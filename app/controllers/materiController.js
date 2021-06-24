const formidable = require('formidable');
const { Materi, File } = require('../database/models');
const { uploadFile } = require('../helper/uploader');

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
    const form = formidable({multiples: true});
    form.parse(req, async (err, fields, files) => {
      if(err) res.status(400);
      else{
        const {bagian, judul, deskripsi, embed} = fields;
        const materi = await Materi.create({
          bagian, judul, deskripsi, embed
        });
        if(files.file){
          files.file.forEach(async (file, i) => {
            try{
              const pathInBucket = `${judul}_${i}`;
              await uploadFile(file.path, pathInBucket);
              await File.create({
                name: file.name,
                path: pathInBucket,
                materi: materi.id
              });
            }
            catch(err){
              console.log(err);
              res.status(500).send({message: 'upload error'});
            }
          });
        }
        res.json({message: 'success upload'});
      }
    });
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
    const form = formidable({multiples: true});
    form.parse(req, async (err, fields) => {
      if(err) res.status(400);
      else{
        res.json(fields);
        const materi = await Materi.findOne({ id: req.params.id });
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
          materi.link = fields.embed;
        }
        materi.save();
        res.json({message: 'Edit success'});
      }
    });
  },
  /**
   * Route to get all materi
   * return: object with one property, `materis`
   * `materis` is an array of materi: each materi consists of
   * `id`, `bagian`, and `judul`
   */
  async getAllMateri(_, res){
    const materis = await Materi.findAll({
      attributes: ['id', 'bagian', 'judul']
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