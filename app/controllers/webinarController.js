const { unixSecondsToDate } = require('../helper/parseUnix');
const { parseForm } = require('../helper/parseform');
const prisma = require('../helper/prisma');

module.exports = {
  /**
   * Route to add Webinar
   * form fields: `ytid`, `judul`, `deskripsi`, `start`, `end`
   * `start` and `end` must be formatted as seconds since UNIX epoch
   */
  async addWebinar(req, res){
    try{
      const { fields } = await parseForm(req);
      const start = unixSecondsToDate(fields.start);
      const end = unixSecondsToDate(fields.end);
      const { ytid, judul, deskripsi } = fields;
      try{
        await prisma.webinar.create({
          data: {
            start, end, ytid, judul, deskripsi
          }
        });
        res.json({message: 'success adding webinar'});
      }
      catch(err){
        console.log(err);
        res.status(500).json({message: 'error adding webinar'});
      }
    }
    catch(err){
      res.status(400).json({message: 'error parsing form'});
    }
  },
  /**
   * Route to remove Webinar by Id
   */
  async removeWebinar(req, res){
    const id = parseInt(req.params.id);
    if (!id) res.status(400).json({message: 'error removing webinar'});

    try{
      await prisma.webinar.delete({
        where: { id },
      });
      res.json({message: 'success removing webinar'});
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error removing webinar'});
    }
  },
  /**
   * Route to edit webinar
   * form fields: `ytid`, `judul`, `deskripsi`, `start`, `end`
   * all fields optional
   */
  async editWebinar(req, res){
    const id = parseInt(req.params.id);
    if (!id) res.status(400).json({message: 'error editing webinar'});

    try{
      const { fields } = await parseForm(req);
      const { ytid, judul, deskripsi } = fields;

      try{
        await prisma.webinar.update({
          where: { id },
          data: {
            start: fields.start ?? undefined,
            end: fields.end ?? undefined,
            ytid: ytid ?? undefined,
            judul: judul ?? undefined,
            deskripsi: deskripsi ?? undefined,
          }
        });
        res.json({message: 'success editing webinar'});
      }
      catch(err){
        console.log(err);
        res.status(500).json({message: 'error editing webinar'});
      }
    }
    catch(err){
      res.status(400).json({message: 'error parsing form'});
    }
  },
  /**
   * Route to list all webinars
   * return object with only one proprety, `webinar`, which is an array of Webinar:
   * [{`id`, `ytid`, `judul, `start`, `end`}]
   */
  async listWebinar(_, res){
    try{
      const webinar = await prisma.webinar.findMany({
        select: {
          id: true,
          judul: true,
          start: true,
          end: true,
          ytid: true,
        }
      });
      res.json(webinar);
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error fetching webinar'});
    }
  },
  /**
   * Route to get current webinar
   * return object of type `webinar`:
   * {`id`, `ytid`, `judul`, `deskripsi`, `start`, `end`}
   * could be empty if there is no webinar
   */
  async currentWebinar(_, res){
    const current = new Date;
    try{
      const webinar = await prisma.webinar.findFirst({
        where: {
          AND: [
            {
              start: {
                lte: current,
              }
            },
            {
              end: {
                gte: current,
              }
            }
          ]
        },
        select: {
          id: true,
          judul: true,
          deskripsi: true,
          ytid: true,
          start: true,
          end: true,
        },
      });
      res.json(webinar);
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error finding webinar'});
    }
  },
  /**
   * Route to get webinar by Id
   * return object of type `webinar`:
   * {`id`, `ytid`, `judul`, `deskripsi`, `start`, `end`}
   */
  async getWebinarById(req, res){
    const id = parseInt(req.params.id);
    if (!id) res.status(400).json({message: 'error fetching webinar'});

    try{
      const webinar = await prisma.webinar.findUnique({
        where: { id },
      });
      res.json(webinar);
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'could not fetch webinar'});
    }
  }
};
