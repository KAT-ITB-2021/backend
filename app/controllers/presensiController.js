const formidable = require('formidable');
const { JadwalPresensi, PresensiPeserta } = require('../database/models');

module.exports = {
  /**
   * Route to add JadwalPresensi
   * three fields in form is needed:
   * `judul`, `start`, and `end`, both of which is formatted as seconds since UNIX epochs.
   */
  addJadwal(req, res){
    const form = formidable();
    form.parse(req, async (err, fields) => {
      if(err) res.status(400).json({message: 'error parsing form'});
      else{
        const start = new Date(parseInt(fields.start));
        const end = new Date(parseInt(fields.end));
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
    });
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
  editJadwal(req, res){
    const id = req.params.id;
    const form = formidable();
    form.parse(req, async (err, fields) => {
      if(err) res.status(400).json({message: 'error parsing form'});
      else{
        const start = new Date(parseInt(fields.start)) ?? false;
        const end = new Date(parseInt(fields.end)) ?? false;
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
    });
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
    try{
      const presensi = await PresensiPeserta.findOne({
        where: {
          user: req.userToken.id,
          jadwal: id
        }
      });
      if(presensi){
        presensi.hadir = true;
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
    try{
      const presensi = await PresensiPeserta.findOne({
        where: {
          user: req.userToken.id,
          jadwal: id
        }
      });
      if(presensi){
        presensi.hadir = false;
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
    const form = formidable();
    form.parse(req, async (err, fields) => {
      if(err) res.status(400).json({message: 'error parsing form'});
      else{
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
    });
  }
};