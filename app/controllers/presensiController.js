const prisma = require('../helper/prisma');
const { unixSecondsToDate } = require('../helper/parseUnix');
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
        await prisma.jadwalPresensi.create({
          data:{
            judul, start, end
          }
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
    const id = +req.params.id;
    try{
      await prisma.jadwalPresensi.delete({
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
    const id = +req.params.id;
    try{
      const { fields } = await parseForm(req);
      const start = unixSecondsToDate(fields.start) ?? false;
      const end = unixSecondsToDate(fields.end) ?? false;
      const { judul } = fields;
      try{
        await prisma.jadwalPresensi.update({
          where: { id },
          data: {
            judul: judul ?? undefined,
            start: start ?? undefined,
            end: end ?? undefined
          }
        });
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
      const jadwal = await prisma.jadwalPresensi.findMany();
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
    const id = +req.params.id;
    try{
      const jadwal = await prisma.jadwalPresensi.findUnique({
        where: { id },
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
    const id = +req.params.id;
    const now = new Date();
    try{
      const jadwal = await prisma.jadwalPresensi.findFirst({
        where: {
          AND: [
            { id },
            {
              start: {
                lte: now
              }
            },
            {
              end: {
                gte: now
              }
            }
          ]
        }
      });
      if(!jadwal) res.status(400).json({message: 'presensi not available'});
      else{
        const presensi = await prisma.presensiPeserta.findFirst({
          where: {
            Users: {
              id: req.userToken.id
            },
            JadwalPresensis: { id }
          }
        });
        if(presensi){
          await prisma.presensiPeserta.update({
            where: { id: presensi.id },
            data: { hadir: true }
          });
        }
        else{
          await prisma.presensiPeserta.create({
            data: {
              Users: {
                connect: {
                  id: req.userToken.id
                }
              },
              JadwalPresensis: {
                connect: {
                  id
                }
              },
              hadir: true
            }
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
    const id = +req.params.id;
    try{
      try{
        const presensi = await prisma.presensiPeserta.findFirst({
          where: {
            Users: {
              id: req.userToken.id
            },
            JadwalPresensis: { id }
          }
        });
        await prisma.presensiPeserta.update({
          where: { id: presensi.id },
          data: {
            hadir: false
          }
        });
        res.json({message: 'success unregistering presensi'});
      }
      catch(err){
        console.log(err);
        res.status(400).json({message: 'presensi not registered'});
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
      const presensi = await prisma.presensiPeserta.findMany({
        where: {
          Users: { id: +req.userToken.id },
        },
        include: {
          JadwalPresensis: true
        },
      });
      res.json({presensi});
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
          const presensi = await prisma.presensiPeserta.findMany({
            where: {
              Users: { id: +fields.userid }
            },
            include: {
              JadwalPresensis: true
            }
          });
          res.json({presensi});
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