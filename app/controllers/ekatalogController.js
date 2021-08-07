const prisma = require('../helper/prisma');
const {
    parseForm
} = require('../helper/parseform');
const {
    uploadFile,
    deleteFile
} = require('../helper/uploader');

module.exports = {
    /**
     * Route to add Sponsor
     * three fields in form is needed:
     * `nama`, `deskripsi`, and `tingkat_sponsor`
     * Logo of the sponsor is uploaded in `logo_sponsor` field
     */
    async addSponsor(req, res) {
        try {
            const {
                fields,
                files
            } = await parseForm(req);
            const {
                nama,
                deskripsi,
                tingkat_sponsor
            } = fields;
            if (files.logo_sponsor) {
                let logo = files.logo_sponsor;
                const logo_path = `${nama}_logo.${logo.name.split('.')[1]}`;
                uploadFile(file.path, pathInBucket).then(() => {
                    prisma.sponsor.create({
                        nama,
                        deskripsi,
                        tingkat_sponsor,
                        logo_path
                    })
                }).then(() => {
                    res.json({
                        message: 'success upload'
                    });
                })
            } else {
                res.json({
                    message: 'please filled in logo'
                });
            }
        } catch (err) {
            res.status(400).json({
                message: 'unknown error'
            });
        }
    },

    /**
     * Route to remove Sponsor by id
     */

    async removeSponsor(req, res) {
        const id = req.params.id;
        const sponsor = await prisma.sponsor.delete({
            where: {
                id
            },
            include: {
                Produk: {
                    include: {
                        GambarProduk: true
                    }
                }
            }
        });
        await deleteFile(sponsor.logo_path);
        let gambarIds = [];
        let produkIds = [];
        await Promise.all(sponsor.Produk.map((produk, i) => {
            produkIds.push(produk.id);
            new Promise((resolve, reject) => {
                produk.GambarProduk.map((gambar, i) => {
                    deleteFile(gambar.path).then(resolve).catch(reject);
                    gambarIds.push(gambar.id);
                });
            });
        }));
        await prisma.produk.deleteMany({
            where: {
                id: {
                    in: produkIds
                }
            }
        });
        await prisma.GambarProduk.deleteMany({
            where: {
                id: {
                    in: gambarIds
                }
            }
        });
        res.status(200).json({
            message: 'success'
        });
    },

    /**
     * Route to get all sponsor and its products
     * return: object with one property sponsors 
     */

    async getAllSponsor(_, res) {
        const sponsors = await prisma.materi.findMany({
            include: {
                Produk: {
                    include: {
                        GambarProduk: true
                    }
                }
            }
        });
        res.json({
            sponsors
        });

    },
    /**
     * Route to get sponsor by id
     */
    async getSponsorById(req, res) {
        const id = req.params.id;
        const sponsor = await prisma.sponsor.findUnique( {
            where: {
                id
            },
            include: {
                Produk: {
                    include: {
                        GambarProduk: true
                    }
                }
            }
            
        });
        res.json(sponsor);
    },

    /**
     * Route to add ProdukEkatalog
     * three fields in form is needed:
     * `nama`, `deskripsi`, `harga_awal` and `harga_diskon`
     * images of the product is uploaded in `gambar` field
     */
    async addProduk(req, res) {
        const {
            fields,
            files
        } = parseForm(req);
        const {
            nama,
            deskripsi,
            sponsor,
            harga_awal,
            harga_diskon
        } = fields;
        const produk = await prisma.produk.create({
            nama, deskripsi, sponsor, harga_awal, harga_diskon
        });
        if (files.file) {
            let file = files.file;
            if (Array.isArray(files.file)) file = [file];
            await Promise.all(file.map((file, i) => {
                new Promise((resolve, reject) => {
                    const pathInBucket = `${nama}_${i}_${file.name}`;
                    prisma.GambarProduk.create({
                        name: file.name,
                        path: pathInBucket,
                        produk: produk.id
                    }).then(() => {
                        resolve();
                    }).catch((err) => {
                        reject(err);
                    });
                });
            }));
            res.status(200).json({
                message: 'success'
            });

        } else {
            res.status(200).json({
                message: 'success'
            })
        }
    },
    /**
     * Route to remove a ProdukEkatalog by Id
     */
    async removeProduk(req, res) {
        const id = req.params.id;
        const produk = prisma.produk.findUnique({
            where: {
                id
            },
            include: {
                GambarProduk: true
            }
        })
        await prisma.produk.delete({
            where: {
                id
            }
        });
        let gambarIds = [];
        await Promise.all(produk.GambarProduk.map((gambar, i) => new Promise((resolve, reject) => {
            deleteFile(gambar.path).then(resolve).catch(reject);
            gambarIds.push(gambar.id);
        })));
        await prisma.GambarProduk.deleteMany({
            where: {
                id: {
                    in: gambarIds
                }
            }
        })
        res.status(200).json({
            message: 'success'
        });
    },

    /**
     * Route to add a produk by Id
     */

    async getProdukById(req, res) {
        const id = req.params.id;
        const produk = prisma.produk.findUnique({
            where: {
                id
            },
            include: {
                GambarProduk: true,
            }
        });
        res.json(produk)
    },

    /**
     * Route to get all sponsor and its products
     * return: object with one property sponsors 
     */

    async getAllProduk(req, res) {
        const produks = await prisma.produk.findMany({
            include: {
                GambarProduk: true
            }
        });
        res.json({
            produks
        });
    }

}