const prisma = require('../helper/prisma');
const { uploadFile, deleteFile } = require('../helper/uploader');
const { parseForm } = require('../helper/parseform');

module.exports = {
  /**
   * Route to add materi to database
   * Everything is passed using multipart/form-data
   * in the form-data, 4 fields are needed: `bagian`, `judul`, `deskripsi`, `embed`
   * embed is a link to youtube video that could be embedded
   * the rest is self explanatory
   * File are uploaded in `file` field.
   */
  async addMateri(req, res){
    try{
      const { fields, files } = await parseForm(req);
      const {bagian, judul, deskripsi, embed} = fields;
      const materi = await prisma.materi.create({
        data: {
          bagian, judul, deskripsi, embed
        }
      });
      if(files.file){
        let file = files.file;
        if(!Array.isArray(files.file)) file = [file];
        await Promise.all(file.map((file, i) => new Promise((resolve, reject) => {
          const pathInBucket = `${judul}_${i}_${file.name}`;
          uploadFile(file.path, pathInBucket).then(() => {
            prisma.file.create({
              data: {
                name: file.name,
                path: pathInBucket,
                Materi: {
                  connect: {
                    id: materi.id
                  }
                }
              },
            }).then(() => {
              console.log('success');
              resolve();
            });
          }).catch((err) => {
            reject(err);
          });
        })));
        res.json({message: 'success upload'});
      }
      else{
        res.json({message: 'success upload'});
      }
    }
    catch(err){
      res.status(400).json({message: 'unknown error occured'});
    }
  },
  /**
   * Route to remove materi by id
   */
  async removeMateri(req, res){
    const id = +req.params.id;
    try{
      const materi = await prisma.materi.delete({
        where: { id },
        include: {
          File: true
        }
      });
      const fileIds = [];
      await Promise.all(materi.File.map((file) => new Promise((resolve, reject) => {
        deleteFile(file.path).then(resolve).catch(reject);
        fileIds.push(file.id);
      })));
      await prisma.file.deleteMany({
        where: {
          id: { in: fileIds }
        }
      });
      res.status(200).json({message: 'success'});
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'materi delete fail'});
    }
  },
  /**
   * Route to update materi by id
   * everything is passed by mulitpart/form-data
   * possible fields: `judul`, `deskripsi`, `link`
   * File are not possible to delete
   */
  async editMateri(req, res){
    try{
      const {fields} = await parseForm(req);
      await prisma.materi.update({
        where: { id: +req.params.id },
        data: {
          bagian: fields.bagian ?? undefined,
          judul: fields.judul ?? undefined,
          deskripsi: fields.deskripsi ?? undefined,
          embed: fields.embed ?? undefined
        }
      });
      res.json({message: 'Edit success'});
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'Edit fail'});
    }
  },
  /**
   * Route to get all materi
   * return: object with one property, `materis`
   * `materis` is an array of materi: each materi consists of
   * `id`, `bagian`, and `judul`
   */
  async getAllMateri(_, res){
    const materis = await prisma.materi.findMany({
      include: {
        File: true
      }
    });
    res.json({materis});
  },
  /**
   * Route to get a specific materi by id
   * return: object of materi, including files
   * {`id`, `bagian`, `deskripsi`, `embed`, `files`: [{`name`, `path`}]}
   */
  async getMateriById(req, res){
    const id = +req.params.id;
    if(id){
      const materi = await prisma.materi.findUnique({
        where: { id },
        include: {
          File: true
        }
      });
      if(materi !== null){
        res.json(materi);
      }
      else{
        res.status(404).json({message: 'materi not found'});
      }
    }
    else{
      res.status(400).send({message: 'no id specified'});
    }
  }
};