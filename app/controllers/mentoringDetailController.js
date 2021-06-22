const formidable = require('formidable');
const { MentoringDetail, Mentoring } = require('../database/models');

module.exports = {
  /**
   * Route to add Mentoring Detail
   * required fields: `judul`, `deskripsi`, `start`, `end`
   * `start` and `end` must be formatted as seconds since UNIX epoch
   */
  addMentoringDetail(req, res){
    const form = formidable();
    form.parse(req, async (err, fields) => {
      if(err) res.status(400).json({message: 'error adding mentoring detail'});
      else{
        const { judul, deskripsi } = fields;
        const start = new Date(fields.start);
        const end = new Date(fields.end);
        try{
          await MentoringDetail.create({
            judul, deskripsi, start, end
          });
          res.json({message: 'success adding mentoring detail'});
        }
        catch(err){
          console.log(err);
          res.status(500).json({message: 'error adding mentoring detail'});
        }
      }
    });
  },
  /**
   * Route to edit Mentoring Detail by id
   * optional fields: `judul`, `deskripsi`, `start`, `end`
   * `start` and `end` must be formatted as seconds since UNIX epoch
   */
  editMentoringDetail(req, res){
    const { id } = req.params;
    const form = formidable();
    form.parse(req, async (err, fields) => {
      if(err) res.status(400).json({message: 'error editing mentoring detail'});
      else{
        const { judul, deskripsi } = fields;
        const start = new Date(fields.start);
        const end = new Date(fields.end);
        try{
          const mentoring = await MentoringDetail.findOne({
            where: { id }
          });
          if(judul) mentoring.judul = judul;
          if(deskripsi) mentoring.deskripsi = deskripsi;
          if(start) mentoring.start = start;
          if(end) mentoring.end = end;
        }
        catch(err){
          console.log(err);
          res.status(500).json({message: 'error editing mentoring detail'});
        }
      }
    });
  },
  /**
   * Route to delete Mentoring Detail by id
   */
  async removeMentoringDetail(req, res){
    const { id } = req.params;
    try{
      await MentoringDetail.destroy({
        where: { id }
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
   * {`mentoringDetails`: [{`judul`}]}
   */
  async getAllMentoringDetails(_, res){
    try{
      const mentoringDetails = await MentoringDetail.findAll({
        attributes: ['judul']
      });
      res.json({mentoringDetails});
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error fetching all mentoring details'});
    }
  },
  /**
   * Route to get one mentoring details
   * returns MentoringDetail object:
   * `id`, `judul`, `deskripsi`, `start`, `end`
   */
  async getOneMentoringDetail(req, res){
    const { id } = req.params;
    try{
      const mentoringDetail = await MentoringDetail.findOne({
        where: { id },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
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
    const { id } = req.params;
    try{
      const mentoringDetails = await Mentoring.findOne({
        where: { id }
      });
      const mentorings = await mentoringDetails.getMentorings();
      res.json({mentorings});
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error fetching mentoring list'});
    }
  }
};