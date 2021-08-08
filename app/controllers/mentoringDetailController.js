const { parseForm } = require('../helper/parseform');
const { unixSecondsToDate } = require('../helper/parseUnix');
const prisma = require('../helper/prisma');

module.exports = {
  /**
   * Route to add Mentoring Detail
   * required fields: `day`, `judul`, `deskripsi`, `start`, `end`
   * `start` and `end` must be formatted as seconds since UNIX epoch
   */
  async addDetailMentoring(req, res){
    try{
      const { fields } = await parseForm(req);
      const { day, judul, deskripsi } = fields;
      const start = unixSecondsToDate(fields.start);
      const end = unixSecondsToDate(fields.end);
      try{
        await prisma.detailMentoring.create({
          data: {
            day: parseInt(day), judul, deskripsi, start, end,
          },
        });
        res.json({message: 'success adding mentoring detail'});
      }
      catch(err){
        console.log(err);
        res.status(500).json({message: 'error adding mentoring detail'});
      }
    }
    catch(err){
      res.status(400).json({message: 'error adding mentoring detail'});
    }
  },
  /**
   * Route to edit Mentoring Detail by id
   * optional fields: `day`, `judul`, `deskripsi`, `start`, `end`
   * `start` and `end` must be formatted as seconds since UNIX epoch
   */
  async editDetailMentoring(req, res){
    const id = parseInt(req.params.id);
    if (!id)
      res.status(400).json({message: 'error editing mentoring detail'});
    try{
      const { fields } = await parseForm(req);
      const { day, judul, deskripsi } = fields;
      const start = unixSecondsToDate(fields.start);
      const end = unixSecondsToDate(fields.end);
      const numDay = parseInt(day);
      try{
        await prisma.detailMentoring.update({
          where: { id },
          data: {
            day: isNaN(numDay) ? undefined : numDay,
            judul: judul ?? undefined,
            deskripsi: deskripsi ?? undefined,
            start: start ?? undefined,
            end: end ?? undefined,
          },
        });
        res.json({message: 'success editing mentoring detail'});
      }
      catch(err){
        console.log(err);
        res.status(500).json({message: 'error editing mentoring detail'});
      }
    }
    catch(err){
      res.status(400).json({message: 'error editing mentoring detail'});
    }
  },
  /**
   * Route to delete Mentoring Detail by id
   */
  async removeDetailMentoring(req, res){
    const id = parseInt(req.params.id);
    if (!id)
      res.status(400).json({message: 'error editing mentoring detail'});

    try{
      await prisma.detailMentoring.delete({
        where: { id },
      });
      res.json({message: 'success removing mentoring detail'});
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error removing mentoring detail'});
    }
  },
  /**
   * Route to show all Mentoring Details' `judul`
   * returns object with one property, `mentoringDetails`, which contains an array of juduls.
   * {`mentoringDetails`: [{`id`, `judul`}]}
   */
  async getAllDetailMentorings(_, res){
    try{
      const mentoringDetails = await prisma.detailMentoring.findMany({
        select: {
          id: true,
          judul: true,
        },
      });
      res.json(mentoringDetails);
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error fetching all mentoring details'});
    }
  },
  /**
   * Route to get one mentoring details
   * returns DetailMentoring object:
   * `id`, `day`, `judul`, `deskripsi`, `start`, `end`
   */
  async getOneDetailMentoring(req, res){
    const id = parseInt(req.params.id);
    if (!id)
      res.status(400).json({message: 'error editing mentoring detail'});

    try{
      const mentoringDetail = await prisma.detailMentoring.findUnique({
        where: { id },
        select: {
          id: true,
          day: true,
          deskripsi: true,
          start: true,
          end: true,
        }
      });
      res.json(mentoringDetail);
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error fetching mentoring detail'});
    }
  },
  /**
   * Route to get associated mentorings
   * returns object with `mentorings` property, which holds array of Mentoring:
   * [{`id`, `kelompok`, `detail`, `link`}]
   */
  async getAssociatedMentorings(req, res){
    const id = parseInt(req.params.id);
    if (!id)
      res.status(400).json({message: 'error fetching mentoring list'});

    try{
      const mentoringDetails = await prisma.mentoring.findUnique({
        where: { id },
        include: {
          DetailMentoring: true,
        },
      });
      console.log({ mentoringDetails, id });
      res.json(mentoringDetails.DetailMentoring);
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error fetching mentoring list'});
    }
  }
};