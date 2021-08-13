const { parseForm } = require('../helper/parseform');
const { uploadFile, deleteFile } = require('../helper/uploader');
const prisma = require('../helper/prisma');


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
          nama,
          deskripsi,
          tingkatSponsor,
        },
      });
      if (files.logoSponsor) {
        let logos = files.logoSponsor;
        if (!Array.isArray(logos)) logos = [logos];
        await Promise.all(
          logos.map(
            (logo, i) =>
              new Promise((resolve, reject) => {
                const pathInBucket = `${nama}_${i}_${logo.nama}`;
                uploadFile(logo.path, pathInBucket)
                  .then(() => {
                    prisma.logosponsor.create({
                      data: {
                        Sponsor: {
                          connect: {
                            id: +sponsor.id,
                          },
                        },
                        nama: logo.name,
                        path: pathInBucket,
                      },
                    }).then(() => {
                      resolve();
                    });
                  })
                  .catch((err) => {
                    console.log(err);
                    reject();
                  });
              })
          )
        );
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
        sponsor.LogoSponsor.map((logo) => {
          new Promise((resolve, reject) => {
            deleteFile(logo.path)
              .then(() => {
                logoSponsorId.push(logo.id);
                resolve();
              })
              .catch((err) => {
                console.log(err);
                reject();
              });
          });
        })
      );
      await prisma.logosponsor.deleteMany({
        where: {
          id: {
            in: logoSponsorId,
          },
        },
      });

      //delte its produk and gambar
      let gambarIds = [];
      let produkIds = [];
      await Promise.all(
        sponsor.Produk.map((produk) => {
          produkIds.push(produk.id);
          new Promise((resolve, reject) => {
            produk.GambarProduk.map((gambar) => {
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
   * possible fields: `nama`, `deskripsi`, `tingkatSponsor`
   * gambar is impossible to delete
   */
  async editSponsor(req, res) {
    try {
      const { fields } = await parseForm(req);
      await prisma.sponsor.update({
        where: {
          id: +req.params.id,
        },
        data: {
          nama: fields.nama ?? undefined,
          deskripsi: fields.deskripsi ?? undefined,
          tingkatSponsor: fields.tingkatSponsor ?? undefined,
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
      const sponsors = await prisma.sponsor.findMany({
        include: {
          Produk: {
            include: {
              GambarProduk: true,
            },
          },
          LogoSponsor: true,
        },
      });
      res.json({
        sponsors,
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
    const { fields, files } = await parseForm(req);
    const {
      nama,
      tipeProduk,
      deskripsi,
      sponsor,
      hargaAwal,
      hargaDiskon,
      linkProduk,
    } = fields;

    // create produk
    const produk = await prisma.produk.create({
      data: {
        nama,
        tipeProduk,
        deskripsi,
        hargaAwal: +hargaAwal,
        hargaDiskon: +hargaDiskon,
        Sponsor: {
          connect: {
            id: +sponsor,
          },
        },
      },
    });

    let linkProduks = linkProduk;
    // create LinkProduks
    if (linkProduks) {
      if (!Array.isArray(linkProduks)) linkProduks = [linkProduks];
      await prisma.linkproduk.createMany({
        data: linkProduks.map((link) => {
          return {
            Produk: {
              connect: {
                id: +produk.id,
              },
            },
            link: link.link,
            jenis: link.jenis,
            linkTo: link.linkTo,
          };
        }),
      });
    }

    // upload gambar
    if (files.file) {
      let file = files.file;
      if (!Array.isArray(files.file)) file = [file];
      await Promise.all(
        file.map((file, i) => {
          new Promise((resolve, reject) => {
            const pathInBucket = `${nama}_${i}_${file.nama}`;
            prisma.gambarProduk.create({
              nama: file.name,
              path: pathInBucket,
              Produk: {
                connect: {
                  id: +produk.id,
                },
              },
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
    try {
      const id = +req.params.id;
      const produk = prisma.produk.findUnique({
        where: {
          id,
        },
        include: {
          GambarProduk: true,
          LinkProduk: true,
        },
      });
      await prisma.produk.delete({
        where: {
          id,
        },
      });

      //delete gambar
      let gambarIds = [];
      if(!Array.isArray(produk.GambarProduk)) produk.GambarProduk = [produk.GambarProduk];
      await Promise.all(
        produk.GambarProduk.map(
          (gambar) =>
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

      //delete links
      await produk.linkproduk.deleteMany({
        where: {
          produk: id,
        },
      });

      res.status(200).json({
        message: 'success',
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: 'Error' });
    }
  },

  /**
   * Route to update produk by id
   * everything is passed by mulitpart/form-data
   * possible fields: `nama`, `tipeProduk`, `deskripsi`, `sponsor`, `hargaAwal`, `hargaDiskon`
   * gambar is impossible to delete
   */
  async editProduk(req, res) {
    try {
      const { fields } = await parseForm(req);
      await prisma.produk.update({
        where: {
          id: +req.params.id,
        },
        data: {
          nama: fields.nama ?? undefined,
          tipeProduk: fields.tipeProduk ?? undefined,
          deskripsi: fields.deskripsi ?? undefined,
          hargaAwal: +fields.hargaAwal ?? undefined,
          hargaDiskon: +fields.hargaDiskon ?? undefined,
          sponsor: +fields.sponsor ?? undefined
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
   * Route to add a produk by Id
   */

  async getProdukById(req, res) {
    try {
      const id = +req.params.id;
      const produk = await prisma.produk.findUnique({
        where: {
          id,
        },
        include: {
          Sponsor: {select: {nama: true}},
          GambarProduk: true,
          LinkProduk: true,
        },
      });
      res.json(produk);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: 'error' });
    }
  },

  /**
   * Route to get all sponsor and its products
   * return: object with one property sponsors
   */

  async getAllProduk(_, res) {
    try {
      const produks = await prisma.produk.findMany({
        include: {
          GambarProduk: true,
          LinkProduk: true,
        },
      });
      res.json({
        produks,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: 'error' });
    }
  },
};
