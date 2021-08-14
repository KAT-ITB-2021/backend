const { parseForm } = require('../helper/parseform');
const prisma = require('../helper/prisma');

module.exports = {
  /**
   * Route to add Mentoring for specific kelompok
   * form encoded fields:
   * `detail`, `link`, `kelompok`
   * `detail` is id of Mentoring Detail associated
   */
  async addMentoring(req, res){
    try{
      const { fields } = await parseForm(req);
      const { detail, link, kelompok } = fields;

      try{
        await prisma.mentoring.create({
          data: {
            detail: parseInt(detail),
            link,
            kelompok
          },
        });
        res.json({ message: 'success adding mentoring' });
      } catch(err) {
        console.log(err);
        res.status(500).json({message: 'error adding mentoring'});
      }
    } catch(err) {
      res.status(400).json({ message: 'error parsing form' });
    }
  },

  /**
   * Route to edit mentoring
   * form encoded fields:
   * `detail`, `link`, `kelompok`
   * `detail` is id of Mentoring Detail associated
   * both are optional
   */
  async editMentoring(req, res){
    if (!parseInt(req.params.id)) {
      res.status(400).json({ message: 'error parsing form' });
    }
    const id = parseInt(req.params.id);
    try{
      const { fields } = await parseForm(req);
      const { detail, link, kelompok } = fields;
      const numDetail = parseInt(detail);

      try {

        await prisma.mentoring.update({
          where: { id },
          data: {
            detail: isNaN(numDetail) ? undefined : numDetail,
            link: link ?? undefined,
            kelompok: kelompok ?? undefined,
          },
        });
        res.json({message: 'success editing mentoring'});
      } catch(err) {
        console.log(err);
        res.status(500).json({message: 'error editing mentoring'});
      }
    } catch(err) {
      res.status(400).json({ message: 'error parsing form' });
    }
  },

  /**
   * Route to remove Mentoring by id
   */
  async removeMentoring(req, res) {
    if (!parseInt(req.params.id)) {
      res.status(400).json({ message: 'error parsing form' });
    }
    const id = parseInt(req.params.id);

    try{
      await prisma.mentoring.delete({
        where: { id }
      });
      res.json({message: 'success removing mentoring'});
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error removing mentoring'});
    }
  },

  /**
   * Route to get latest active Mentoring based on Kelompok
   * returns Mentoring object:
   * {`id`, kelompok`, `link`, `detail`: {`day`, `judul`, `deskripsi`, `start`, `end`}}
   */
  async getLatestMentoring(req, res) {
    const current = new Date();
    try{
      const mentoring = await prisma.mentoring.findFirst({
        where: {
          kelompok: {
            in: [req.userToken.kelompok.toString(), '0'],
          },
          DetailMentoring: {
            AND: {
              start: { lte: current, },
              end: { gte: current, },
            }
          }
        },
        select: {
          id: true,
          DetailMentoring: {
            select: {
              id: true,
              day: true,
              judul: true,
              deskripsi: true,
              start: true,
              end: true,
            },
          },
          detail: true,
          kelompok: true,
          link: true,
        },
      });
      res.json(mentoring);
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error fetching mentoring'});
    }
  }

  /**
   * Route to get all mentoring
   * returns object with one property, `mentoring`, which holds array of Mentoring:
   * [{`id`, `kelompok`, `detail`, `link`}]
   */,
  async getAllMentoring(req, res){
    try{
      const mentoring = await prisma.mentoring.findMany({
        where: {
          kelompok: {
            in: [req.userToken.kelompok.toString(), '0'],
          },
        },
        include: {
          DetailMentoring: {
            select: {
              judul: true,
              deskripsi: true,
              start: true,
              end: true,
            },
          },
        },
      });
      res.json({mentoring});
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error fetching mentoring'});
    }
  },

  /**
   * Route to get all mentoring by admin
   * returns object with one property, `mentoring`, which holds array of Mentoring:
   * [{`id`, `kelompok`, `detail`, `link`}]
   */
  async getAllMentoringAdmin(req, res){
    try{
      const mentoring = await prisma.mentoring.findMany({
        include: {
          DetailMentoring: {
            select: {
              judul: true,
            },
          },
        },
      });
      res.json({mentoring});
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error fetching mentoring'});
    }
  },

  /**
   * Route to get one mentoring
   * returns Mentoring object:
   * {`id`, kelompok`, `link`, `detail`}
   */
  async getOneMentoring(req, res){
    if (!parseInt(req.params.id)) {
      res.status(400).json({ message: 'error parsing form' });
    }
    const id = parseInt(req.params.id);

    try{
      const mentoring = await prisma.mentoring.findUnique({ where: { id } });
      res.json(mentoring);
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error fetching mentoring'});
    }
  }
};