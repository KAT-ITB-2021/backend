const prisma = require('../helper/prisma');
const { ROLES } = require('../helper/constants');
const { parseForm } = require('../helper/parseform');
const { unixSecondsToDate } = require('../helper/parseUnix');
const { uploadFile, deleteFile } = require('../helper/uploader');

module.exports = {
  /**
   * Route to get all Tugas from database
   * return object with one property, tugas,
   * which has an array. Each element of the array
   * consists of {`id`, `bagian`, and `judul`}.
   */
  async getAllTugas(_, res){
    try{
      const tugas = await prisma.tugas.findMany({});
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
   * {`id`, `bagian`, `judul`, `deskripsi`, `deadline`}
   */
  async getTugasById(req, res){
    const id = +req.params.id;
    try{
      const tugas = await prisma.tugas.findUnique({
        where: { id },
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
   * There are 4 fields that needs to be filled:
   * `bagian`, `judul`, `deskripsi`, `deadline`.
   * `deadline` must be formatted as unix epoch (seconds)
   */
  async addTugas(req, res){
    try{
      const { fields } = await parseForm(req);
      const {bagian, judul, deskripsi, deadline} = fields;
      if(!bagian || !judul || !deskripsi || !deadline) res.status(401).json({message: 'empty field not allowed'});
      else{
        const deadlineDate = unixSecondsToDate(deadline);
        try{
          await prisma.tugas.create({
            data: {
              bagian, judul, deskripsi, deadline: deadlineDate
            }
          });
          res.json({message: 'success creating tugas'});
        }
        catch(err){
          console.log(err);
          res.status(500).json({message: 'error when creating tugas'});
        }
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
    const id = +req.params.id;
    try{
      await prisma.tugas.delete({
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
   * and there are 4 fields that could be filled:
   * `bagian`, `judul`, `deskripsi`, `deadline`. Each field is optional, empty if not needed to update
   * `deadline` must be formatted as unix epoch (seconds)
   */
  async editTugas(req, res){
    const id = +req.params.id;
    try{
      const { fields } = await parseForm(req);
      try{
        await prisma.tugas.update({
          where: { id },
          data: {
            bagian: fields.bagian ?? undefined,
            judul: fields.judul ?? undefined,
            deskripsi: fields.deskripsi ?? undefined,
            deadline: fields.deadline ?? undefined
          }
        });
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
    const id = +req.params.id;
    try{
      const { files } = await parseForm(req);
      try{
        const bucketPath = `${req.userToken.id}_${id}_${files.file.name}`;
        await uploadFile(files.file.path, bucketPath);
        await prisma.submisiTugas.create({
          data: {
            nama: files.file.name,
            path: bucketPath,
            pemilik: req.userToken.id,
            tugas: {
              connect: { id }
            }
          }
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
    const id = +req.params.id;
    try{
      const submisi = await prisma.submisiTugas.delete({
        where: { id }
      });
      await deleteFile(submisi.path);
      res.json({message: 'success removing submisi'});
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error removing submisi'});
    }
  },
  /**
   * Route to list all SubmisiTugas by Id Tugas
   * returns an object with one property: `submisi`
   * which is an array of SubmisiTugas:
   * {`id`, `nama`, `pemilik`, `path`, `tugas`: {`id`, `bagian`, `judul`, `deskripsi`, `deadline`}}
   */
  async listSubmisiPerTugas(req, res){
    const id = +req.params.id;
    const kelompokFilter = req.userToken.role === ROLES.mentor ? { kelompok: req.userToken.kelompok } : {};
    try{
      const submisi = await prisma.submisiTugas.findMany({
        where: {
          Tugas: {
            id
          },
          Users: {
            kelompokFilter
          }
        }
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
   * {`id`, `nama`, `pemilik`, `path`, `tugas`: {`id`, `bagian`, `judul`, `deskripsi`, `deadline`}}
   */
  async lihatSubmisiSendiri(req, res){
    const id = +req.params.id;
    try{
      const submisi = await prisma.submisiTugas.findFirst({
        where: {
          Tugas: { id },
          Users: { id: req.userToken.id }
        }
      });
      res.json(submisi);
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error when peeking submission'});
    }
  }
};