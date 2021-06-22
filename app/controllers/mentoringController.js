const formidable = require('formidable');
const { Op } = require('sequelize');
const { Mentoring, DetailMentoring } = require('../database/models');

module.exports = {
  /**
   * Route to add Mentoring for specific kelompok
   * form encoded fields:
   * `detail`, `link`, `kelompok`
   * `detail` is id of Mentoring Detail associated
   */
  addMentoring(req, res){
    const form = formidable();
    form.parse(req, async (err, fields) => {
      if(err) res.status(400).json({ message: 'error parsing form' });
      else{
        const { detail, link, kelompok } = fields;
        try{
          await Mentoring.create({
            detail, link, kelompok
          });
          res.json({message: 'success adding mentoring'});
        }
        catch(err){
          console.log(err);
          res.status(500).json({message: 'error adding mentoring'});
        }
      }
    });
  },
  /**
   * Route to edit mentoring
   * form encoded fields:
   * `detail`, `link`, `kelompok`
   * `detail` is id of Mentoring Detail associated
   * both are optional
   */
  editMentoring(req, res){
    const form = formidable();
    const id = req.params.id;
    form.parse(req, async (err, fields) => {
      if(err) res.status(400).json({ message: 'error parsing form' });
      else{
        const { detail, link, kelompok } = fields;
        try{
          const mentoring = await Mentoring.findOne({
            id
          });
          if(detail) mentoring.detail = detail;
          if(link) mentoring.link = link;
          if(kelompok) mentoring.kelompok = kelompok;
          await mentoring.save();
          res.json({message: 'success editing mentoring'});
        }
        catch(err){
          console.log(err);
          res.status(500).json({message: 'error editing mentoring'});
        }
      }
    });
  },
  /**
   * Route to remove Mentoring by id
   */
  async removeMentoring(req, res) {
    const id = req.params.id;
    try{
      await Mentoring.destroy({
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
   * {`id`, `kelompok`, `link`, `detail`: {'judul`, `deskripsi`, `start`, `end`}}
   */
  async getLatestMentoring(req, res) {
    const current = new Date();
    try{
      const mentoring = await Mentoring.findOne({
        where: {
          kelompok: req.userToken.kelompok
        },
        order: [['jadwal', 'DESC']],
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        include: {
          model: DetailMentoring,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          },
          where: {
            [Op.and]: [
              {
                start: { [Op.le]: current },
                end: { [Op.ge]: current}
              }
            ]
          }
        }
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
      const mentoring = await Mentoring.findAll();
      res.json({mentoring});
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error fetching mentoring'});
    }
  }
};