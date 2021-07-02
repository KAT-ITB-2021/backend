const { JadwalPresensi, PresensiPeserta } = require('../database/models');
const { unixSecondsToDate } = require('../helper/parseUnix');
const { Op } = require('sequelize');
const { parseForm } = require('../helper/parseform');

module.exports = {
  /**
   * Route to add JadwalPresensi
   * three fields in form is needed:
   * `judul`, `start`, and `end`, both of which is formatted as seconds since UNIX epochs.
   */
  async addJadwal(req, res){
    try{
      const { fields } = await parseForm(req);
      const start = unixSecondsToDate(fields.start);
      const end = unixSecondsToDate(fields.end);
      const { judul } = fields;
      try{
        await JadwalPresensi.create({
          judul, start, end
        });
        res.json({message: 'success add jadwal'});
      }
      catch(err){
        console.log(err);
        res.status(500).json({message: 'error when adding jadwal'});
      }
    }
    catch(err){
      res.status(400).json({message: 'error parsing form'});
    }
  },
  /**
   * Route to remove JadwalPresensi by id
   */
  async removeJadwal(req, res){
    const id = req.params.id;
    try{
      await JadwalPresensi.destroy({
        where: { id }
      });
      res.json({message: 'success remove jadwal'});
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error removing jadwal'});
    }
  },
  /**
   * Route to edit JadwalPresensi by Id
   * same requirements as addJadwal:
   * three fields in form is needed:
   * `judul`, `start` and `end`, both of which is formatted as seconds since UNIX epochs.
   */
  async editJadwal(req, res){
    const id = req.params.id;
    try{
      const { fields } = await parseForm(req);
      const start = unixSecondsToDate(fields.start) ?? false;
      const end = unixSecondsToDate(fields.end) ?? false;
      const { judul } = fields;
      try{
        const jadwal = await JadwalPresensi.findOne({
          where: { id }
        });
        if(judul) jadwal.judul = judul;
        if(start) jadwal.start = start;
        if(end) jadwal.end = end;
        await jadwal.save();
        res.json({message: 'success edit jadwal'});
      }
      catch(err){
        console.log(err);
        res.status(500).json({message: 'error editing jadwal'});
      }
    }
    catch(err){
      res.status(400).json({message: 'error parsing form'});
    }
  },
  /**
   * Route to get all JadwalPresensi
   * returns object with one property, `jadwal`, which consists of array of JadwalPresensi:
   * [{`id`, `judul`, `start`, `end`}]
   */
  async getAllJadwal(_, res){
    try{
      const jadwal = await JadwalPresensi.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      });
      res.json({jadwal});
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error fetching jadwal'});
    }
  },
  /**
   * Route to get JadwalPresensi by id
   * Returns JawdalPresensi:
   * {`id`, `judul`, `start`, `end`}
   */
  async getJadwalById(req, res){
    const { id } = req.params;
    try{
      const jadwal = await JadwalPresensi.findOne({
        where: { id },
        exclude: ['createdAt', 'updatedAt']
      });
      res.json(jadwal);
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error getting jadwal'});
    }
  },
  /**
   * Route to add presensi or set presensi to true by JadwalPresensi id
   */
  async daftarkanPresensi(req, res){
    const id = req.params.id;
    const now = new Date();
    try{
      const jadwal = await JadwalPresensi.findOne({
        where: {
          id,
          [Op.and]: {
            start: {
              [Op.lte]: now
            },
            end: {
              [Op.gte]: now
            }
          }
        }
      });
      if(!jadwal) res.status(400).json({message: 'presensi not available'});
      else{
        const presensi = await PresensiPeserta.findOne({
          where: {
            user: req.userToken.id,
            jadwal: id
          }
        });
        if(presensi){
          presensi.hadir = true;
          await presensi.save();
        }
        else{
          await PresensiPeserta.create({
            user: req.userToken.id,
            jadwal: id,
            hadir: true
          });
        }
        res.json({message: 'success registering presensi'});
      }
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error registering presensi'});
    }
  },
  /**
   * Route to set presensi to false by id
   */
  async hapuskanPresensi(req, res){
    const id = req.params.id;
    const now = new Date();
    try{
      const presensi = await PresensiPeserta.findOne({
        where: {
          user: req.userToken.id,
          jadwal: id,
        },
        include: {
          model: JadwalPresensi,
          where: {
            [Op.and]: {
              start: {
                [Op.lte]: now
              },
              end: {
                [Op.gte]: now
              }
            }
          }
        }
      });
      if(presensi){
        presensi.hadir = false;
        await presensi.save();
        res.json({message: 'success removing presensi'});
      }
      else{
        res.status(400).json({message: 'presensi not registered yet'});
      }
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error when removing presensi'});
    }
  },
  /**
   * Route to list PresensiPeserta by id
   * returns object with one property, `presensi`, which contains array of PresensiPeserta:
   * [{`id`, `hadir`, `jadwal`: {`id`, `judul`, `start`, `end`}}]
   */
  async listPresensiPeserta(req, res){
    try{
      const presensi = await PresensiPeserta.findAll({
        where: {
          user: req.userToken.id,
        },
        include: {
          model: JadwalPresensi,
          attributes: ['id', 'judul', 'start', 'end']
        },
        attributes: { exclude: ['user', 'createdAt', 'updatedAt']}
      });
      res.json(presensi);
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error when fetching presensi'});
    }
  },
  /**
   * Route to list PresensiPeserta of others
   * Used by admin
   * form fields needed: `userid`
   * returns object with one property, `presensi`, which contains array of PresensiPeserta:
   * [{`id`, `hadir`, `jadwal`: {`id`, `judul`, `start`, `end`}}]
   */
  async listPresensiPesertaOther(req, res){
    try{
      const { fields } = await parseForm(req);
      if(!fields.userid) res.status(400).json({message: 'userid must not be empty'});
      else{
        try{
          const presensi = await PresensiPeserta.findAll({
            where: {
              user: fields.userid
            },
            include: {
              model: JadwalPresensi,
              attributes: ['id', 'judul', 'start', 'end']
            },
            attributes: { exclude: ['user', 'createdAt', 'updatedAt']}
          });
          res.json(presensi);
        }
        catch(err){
          console.log(err);
          res.status(500).json({message: 'error when fetching presensi'});
        }
      }
    }
    catch(err){
      res.status(400).json({message: 'error parsing form'});
    }
  }
};