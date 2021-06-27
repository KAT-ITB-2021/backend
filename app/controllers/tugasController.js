const { Tugas, SubmisiTugas, User } = require('../database/models');
const { parseForm } = require('../helper/parseform');
const { uploadFile } = require('../helper/uploader');

module.exports = {
  /**
   * Route to get all Tugas from database
   * return object with one property, tugas,
   * which has an array. Each element of the array
   * consists of {`id`, `bagian`, and `judul`}.
   */
  async getAllTugas(_, res){
    try{
      const tugas = await Tugas.findAll({
        attributes: ['id', 'bagian', 'judul']
      });
      res.json({tugas});
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'unknown error'});
    }
  },
  /**
   * Route to get specific Tugas of id `id`
   * return object of tugas
   * {`id`, `bagian`, `judul`, `deskripsi`}
   */
  async getTugasById(req, res){
    const id = req.params.id;
    try{
      const tugas = await Tugas.findOne({
        where: { id },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      });
      res.json(tugas);
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'unknown error'});
    }
  },
  /**
   * Route to add Tugas
   * Everything is passed using multipart/form-data
   * There are 3 fields that needs to be filled:
   * `bagian`, `judul`, `deskripsi`.
   */
  async addTugas(req, res){
    try{
      const { fields } = await parseForm(req);
      const {bagian, judul, deskripsi} = fields;
      if(!bagian || !judul || !deskripsi) res.status(401).json({message: 'empty field not allowed'});
      try{
        await Tugas.create({
          bagian, judul, deskripsi
        });
        res.json({message: 'success creating tugas'});
      }
      catch(err){
        console.log(err);
        res.status(500).json({message: 'error when creating tugas'});
      }
    }
    catch(err){
      res.status(400).json({message: 'error parsing form'});
    }
  },
  /**
   * Route to remove Tugas by Id
   */
  async removeTugas(req, res){
    const id = req.params.id;
    try{
      await Tugas.destroy({
        where: {id}
      });
      res.json({message: 'success removing tugas'});
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error when removing tugas'});
    }
  },
  /**
   * Route to edit tugas by Id
   * just like addTugas, everything is passed using multipart/form-data
   * and there are 3 fields that could be filled:
   * `bagian`, `judul`, `deskripsi`. Each field is optional, empty if not needed to update
   */
  async editTugas(req, res){
    const id = req.params.id;
    try{
      const { fields } = await parseForm(req);
      try{
        const tugas = await Tugas.findOne({
          where: { id }
        });
        if(fields.bagian) tugas.bagian = fields.bagian;
        if(fields.judul) tugas.judul = fields.judul;
        if(fields.deskripsi) tugas.deskripsi = fields.deskripsi;
        await tugas.save();
        res.json({message: 'success editing tugas'});
      }
      catch(err){
        console.log(err);
        res.status(500).json({message: 'error editing tugas'});
      }
    }
    catch(err){
      res.status(400).json({message: 'error parsing form'});
    }
  },
  /**
   * Route to add SubmisiTugas
   * Everything is passed using multipart/form-data
   * with only 1, `file`, which contains the file submitted
   * `file` may only have 1 file.
   */
  async submitTugas(req, res){
    const id = parseInt(req.params.id);
    try{
      const { files } = await parseForm(req);
      try{
        const bucketPath = `${req.userToken.id}_${id}_${files.file.path}`;
        await uploadFile(files.file.path, bucketPath);
        await SubmisiTugas.create({
          nama: files.file.name,
          path: bucketPath,
          pemilik: req.userToken.id,
          tugas: id
        });
        res.json({message: 'success submitting tugas'});
      }
      catch(err){
        console.log(err);
        res.status(500).json({message: 'error submitting tugas'});
      }
    }
    catch(err){
      res.status(400).json({message: 'error parsing form'});
    }
  },
  /**
   * Route to remove SubmisiTugas
   */
  async hapusSubmisi(req, res){
    const id = req.params.id;
    try{
      await SubmisiTugas.destroy({
        where: { id }
      });
      res.json({message: 'success removing submisi'});
    }
    catch(err){
      res.status(500).json({message: 'error removing submisi'});
    }
  },
  /**
   * Route to list all SubmisiTugas by Id Tugas
   * returns an object with one property: `submisi`
   * which is an array of SubmisiTugas:
   * {`id`, `nama`, `pemilik`, `path`, `tugas`: {`id`, `bagian`, `judul`, `deskripsi`}}
   */
  async listSubmisiPerTugas(req, res){
    const id = parseInt(req.params.id);
    try{
      const submisi = await SubmisiTugas.findAll({
        attributes: ['id', 'nama', 'pemilik', 'path'],
        include: [{
          model: Tugas,
          where: { id },
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        },
        {
          model: User,
          where: { kelompok: req.userToken.kelompok },
          attributes: ['nim', 'kelompok']
        }]
      });
      res.json({submisi});
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error fetching submisi tugas'});
    }
  },
  /**
   * Route to get own SubmisiTugas on Tugas
   * returns SubmisiTugas:
   * {`id`, `nama`, `pemilik`, `path`, `tugas`: {`id`, `bagian`, `judul`, `deskripsi`}}
   */
  async lihatSubmisiSendiri(req, res){
    const id = req.params.id;
    try{
      const submisi = await SubmisiTugas.findOne({
        attributes: ['id', 'nama', 'pemilik', 'path'],
        include: [{
          model: Tugas,
          where: { id },
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        },
        {
          model: User,
          where: { id: req.userToken.id },
          attributes: []
        }]
      });
      res.json(submisi);
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error when peeking submission'});
    }
  }
};