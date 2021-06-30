const { Materi, File } = require('../database/models');
const { uploadFile } = require('../helper/uploader');
const { parseForm } = require('../helper/parseform');

module.exports = {
  /**
   * Route to add materi to database
   * Everything is passed using multipart/form-data
   * in the form-data, 4 fields are needed: `bagian`, `judul`, `deskripsi`, `embed`
   * embed is a link to youtube video that could be embedded
   * the rest is self explanatory
   * Files are uploaded in `file` field.
   */
  async addMateri(req, res){
    try{
      const { fields, files } = await parseForm(req);
      const {bagian, judul, deskripsi, embed} = fields;
      const materi = await Materi.create({
        bagian, judul, deskripsi, embed
      });
      if(files.file){
        let file = files.file;
        if(!Array.isArray(files.file)) file = [file];
        await Promise.all(file.map((file, i) => new Promise((resolve, reject) => {
          const pathInBucket = `${judul}_${i}_${file.name}`;
          uploadFile(file.path, pathInBucket).then(() => {
            File.create({
              name: file.name,
              path: pathInBucket,
              materi: materi.id
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
    const id = req.params.id;
    await Materi.destroy({
      where: { id }
    });
    res.status(200).json({message: 'success'});
  },
  /**
   * Route to update materi by id
   * everything is passed by mulitpart/form-data
   * possible fields: `judul`, `deskripsi`, `link`
   * Files are not possible to delete
   */
  async editMateri(req, res){
    try{
      const {fields} = await parseForm(req);
      const materi = await Materi.findByPk(req.params.id);
      if(fields.bagian){
        materi.bagian = fields.bagian;
      }
      if(fields.judul){
        materi.judul = fields.judul;
      }
      if(fields.deskripsi){
        materi.deskripsi = fields.deskripsi;
      }
      if(fields.embed){
        materi.embed = fields.embed;
      }
      try{
        await materi.save();
        res.json({message: 'Edit success'});
      }
      catch(err){
        res.status(500).json({message: 'Edit fail'});
      }
    }
    catch(err){
      res.status(400);
    }
  },
  /**
   * Route to get all materi
   * return: object with one property, `materis`
   * `materis` is an array of materi: each materi consists of
   * `id`, `bagian`, and `judul`
   */
  async getAllMateri(_, res){
    const materis = await Materi.findAll({
      attributes: ['id', 'bagian', 'judul', 'deskripsi', 'embed'],
      include: {
        model: File,
        attributes: ['name', 'path']
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
    const id = req.params.id;
    if(id){
      const materi = await Materi.findByPk(id, {
        attributes: { exclude: ['createdAt', 'updatedAt']},
        include: {
          model: File,
          attributes: ['name', 'path']
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