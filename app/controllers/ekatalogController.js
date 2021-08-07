const prisma = require('../helper/prisma');
const { parseForm } = require('../helper/parseform');
const { uploadFile, deleteFile } = require('../helper/uploader');

module.exports = {
  /**
   * Route to add Sponsor
   * three fields in form is needed:
   * `nama`, `deskripsi`, and `tingkatSponsor`
   * Logo of the sponsor is uploaded in `logoSponsor` field
   */
  async addSponsor(req, res) {
    try {
      const { fields, files } = await parseForm(req);
      const { nama, deskripsi, tingkatSponsor } = fields;
      const sponsor = await prisma.sponsor.create({
            data: {
                nama, deskripsi, tingkatSponsor
            }
      });
      if (files.logoSponsor) {
        let logos = files.logoSponsor;
        if (!Array.isArray(logos)) logos = [logos];
        await Promise.all(logos.map((logo, i) => new Promise((resolve, reject) => {
            const pathInBucket = `${nama}_${i}_${file.nama}`;
            uploadFile(logo.path, pathInBucket)
                .then(() => {
                    await prisma.logosponsor.create({
                        data: {
                            sponsor: sponsor.id,
                            nama: file.name,
                            path: pathInBucket 
                        }
                    });
                    resolve()
                }).catch((err) => {
                    console.log(err);
                    reject();
                })
        })))
      } else {
        res.json({
          message: 'please filled in logo',
        });
      }
    } catch (err) {
      res.status(400).json({
        message: 'unknown error',
      });
    }
  },

  /**
   * Route to remove Sponsor by id
   */

  async removeSponsor(req, res) {
    try {
      const id = +req.params.id;
      const sponsor = await prisma.sponsor.delete({
        where: {
          id,
        },
        include: {
          Produk: {
            include: {
              GambarProduk: true,
            },
          },
          LogoSponsor: true,
        },
      });

    //delete its logos
      let logoSponsorId = [];
      await Promise.all(
          sponsor.LogoSponsor.map((logo, i) => {
              new Promise((resolve, reject) => {
                deleteFile(logo.path)
                    .then(() => {
                        logoSponsorId.push(logo.id);
                        resolve();
                    })
                    .catch((err) => {
                        console.log(err);
                        reject()
                    })
              })
          })
      );
      await prisma.logosponsor.deleteMany({
          where: {
              id: {
                  in: logoSponsorId
              }
          }
      })

      //delte its produk and gambar
      let gambarIds = [];
      let produkIds = [];
      await Promise.all(
        sponsor.Produk.map((produk, i) => {
          produkIds.push(produk.id);
          new Promise((resolve, reject) => {
            produk.GambarProduk.map((gambar, i) => {
              deleteFile(gambar.path).then(resolve).catch(reject);
              gambarIds.push(gambar.id);
            });
          });
        })
      );
      await prisma.produk.deleteMany({
        where: {
          id: {
            in: produkIds,
          },
        },
      });
      await prisma.GambarProduk.deleteMany({
        where: {
          id: {
            in: gambarIds,
          },
        },
      });

      res.status(200).json({
        message: 'success',
      });
    } catch (err) {
      res.status(400).json({
        message: 'failed removing sponsor',
      });
    }
  },

  /**
   * Route to update sponsor by id
   * everything is passed by mulitpart/form-data
   * possible fields: `judul`, `deskripsi`, `link`
   * gambar is impossible to delete
   */
  async editSponsor(req, res) {
    try {
      const { fields, files } = await parseForm(req);
      await prisma.sponsor.update({
        where: {
          id: +req.params.id,
        },
        data: {
          nama: fields.bagian ?? undefined,
          deskripsi: fields.judul ?? undefined,
          tingkatSponsor: fields.deskripsi ?? undefined,
          embed: fields.embed ?? undefined,
        },
      });
      res.json({
        message: 'Edit success',
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Edit fail',
      });
    }
  },

  /**
   * Route to get all sponsor and its products
   * return: object with one property sponsors
   */

  async getAllSponsor(_, res) {
    try {
      const sponsors = await prisma.materi.findMany({
        include: {
          Produk: {
            include: {
              GambarProduk: true,
            },
          },
          LogoSponsor: true
        },
      });
      res.json({
        sponsors
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        message: 'Failed fetching sponsors',
      });
    }
  },
  /**
   * Route to get sponsor by id
   */
  async getSponsorById(req, res) {
    try {
      const id = +req.params.id;
      const sponsor = await prisma.sponsor.findUnique({
        where: {
          id,
        },
        include: {
          Produk: {
            include: {
              GambarProduk: true,
            },
          },
          LogoSponsor: true,
        },
      });
      res.json(sponsor);
    } catch (err) {
      console.log(err);
      res.status(400).json({
        message: 'failed at fetching sponsor',
      });
    }
  },

  /**
   * Route to add Produk
   * three fields in form is needed:
   * `nama`, `tipeProduk`, `deskripsi`, `sponsor`, `hargaAwal`, `hargaDiskon`, and `linkProduk`
   * images of the product is uploaded in `gambar` field
   */
  async addProduk(req, res) {
    const { fields, files } = parseForm(req);
    const { nama, tipeProduk, deskripsi, sponsor, hargaAwal, hargaDiskon, linkProduk } = fields;

    // create produk
    const produk = await prisma.produk.create({
      nama,
      tipeProduk,
      deskripsi,
      sponsor,
      hargaAwal,
      hargaDiskon,
    });

    // create LinkProduks
    if(LinkProduk){
        if(Array.isArray(linkProduk)) linkProduk = [linkProduk];
        await prisma.linkproduk.createMany({
            data: linkProduk.map((link, i) => { return {
                produk: produk.id,
                link: link.link,
                jenis: link.jenis,
                linkTo: link.linkTo
            }})
        })
    }

    // upload gambar
    if (files.file) {
      let file = files.file;
      if (Array.isArray(files.file)) file = [file];
      await Promise.all(
        file.map((file, i) => {
          new Promise((resolve, reject) => {
            const pathInBucket = `${nama}_${i}_${file.nama}`;
            prisma.GambarProduk.create({
              nama: file.name,
              path: pathInBucket,
              produk: produk.id,
            })
              .then(() => {
                resolve();
              })
              .catch((err) => {
                reject(err);
              });
          });
        })
      );
      res.status(200).json({
        message: 'success',
      });
    } else {
      res.status(200).json({
        message: 'success',
      });
    }
  },
  /**
   * Route to remove a ProdukEkatalog by Id
   */
  async removeProduk(req, res) {
    const id = +req.params.id;
    const produk = prisma.produk.findUnique({
      where: {
        id,
      },
      include: {
        GambarProduk: true,
      },
    });
    await prisma.produk.delete({
      where: {
        id,
      },
    });
    let gambarIds = [];
    await Promise.all(
      produk.GambarProduk.map(
        (gambar, i) =>
          new Promise((resolve, reject) => {
            deleteFile(gambar.path).then(resolve).catch(reject);
            gambarIds.push(gambar.id);
          })
      )
    );
    await prisma.GambarProduk.deleteMany({
      where: {
        id: {
          in: gambarIds,
        },
      },
    });
    res.status(200).json({
      message: 'success',
    });
  },

  /**
   * Route to add a produk by Id
   */

  async getProdukById(req, res) {
    const id = +req.params.id;
    const produk = prisma.produk.findUnique({
      where: {
        id,
      },
      include: {
        GambarProduk: true,
      },
    });
    res.json(produk);
  },

  /**
   * Route to get all sponsor and its products
   * return: object with one property sponsors
   */

  async getAllProduk(_, res) {
    const produks = await prisma.produk.findMany({
      include: {
        GambarProduk: true,
      },
    });
    res.json({
      produks,
    });
  },
};
