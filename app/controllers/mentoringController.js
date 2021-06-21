const formidable = require('formidable');
const { Op } = require('sequelize');
const { Mentoring } = require('../database/models');

module.exports = {
  /**
   * Route to add Mentoring for specific kelompok
   * form encoded fields:
   * `jadwal`, `link`, `kelompok`
   * `jadwal` is datetime encoded as seconds since UNIX epoch
   */
  addMentoring(req, res){
    const form = formidable();
    form.parse(req, async (err, fields) => {
      if(err) res.status(400).json({ message: 'error parsing form' });
      else{
        const jadwal = new Date(fields.jadwal);
        const { link, kelompok } = fields;
        try{
          await Mentoring.create({
            jadwal, link, kelompok
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
   * `jadwal`, `link`, `kelompok`
   * `jadwal` is datetime encoded as seconds since UNIX epoch
   * both are optional
   */
  editMentoring(req, res){
    const form = formidable();
    const id = req.params.id;
    form.parse(req, async (err, fields) => {
      if(err) res.status(400).json({ message: 'error parsing form' });
      else{
        const jadwal = new Date(fields.jadwal);
        const { link, kelompok } = fields;
        try{
          const mentoring = await Mentoring.findOne({
            id
          });
          if(jadwal) mentoring.jadwal = jadwal;
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
   * {`id`, `kelompok`, `jadwal`, `link`}
   */
  async getLatestMentoring(req, res) {
    const current = new Date();
    try{
      const mentoring = await Mentoring.findOne({
        where: {
          jadwal: {
            [Op.le]: current
          },
          kelompok: req.userToken.kelompok
        },
        order: [['jadwal', 'DESC']],
        attributes: {
          exclude: ['createdAt', 'updatedAt']
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
   * [{`id`, `kelompok`, `jadwal`, `link`}]
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