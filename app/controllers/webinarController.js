const formidable = require('formidable');
const { Webinar } = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
  /**
   * Route to add Webinar
   * form fields: `ytid`, `judul`, `deskripsi`, `start`, `end`
   * `start` and `end` must be formatted as seconds since UNIX epoch
   */
  addWebinar(req, res){
    const form = formidable();
    form.parse(req, async (err, fields) => {
      if(err) res.status(400).json({message: 'error parsing form'});
      else{
        const start = new Date(parseInt(fields.start));
        const end = new Date(parseInt(fields.end));
        const { ytid, judul, deskripsi } = fields;
        try{
          await Webinar.create({
            start, end, ytid, judul, deskripsi
          });
          res.json({message: 'success adding webinar'});
        }
        catch(err){
          console.log(err);
          res.status(500).json({message: 'error adding webinar'});
        }
      }
    });
  },
  /**
   * Route to remove Webinar by Id
   */
  async removeWebinar(req, res){
    const id = req.params.id;
    try{
      await Webinar.destroy({ where: { id }});
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
  editWebinar(req, res){
    const id = req.params.id;
    const form = formidable();
    form.parse(req, async (err, fields) => {
      if(err) res.status(400).json({message: 'error parsing form'});
      else{
        const start = new Date(parseInt(fields.start));
        const end = new Date(parseInt(fields.end));
        const { ytid, judul, deskripsi } = fields;
        try{
          const webinar = Webinar.findOne({
            where: { id }
          });
          if(start) webinar.start = start;
          if(end) webinar.end = end;
          if(ytid) webinar.ytid = ytid;
          if(judul) webinar.judul = judul;
          if(deskripsi) webinar.deskripsi = deskripsi;
          await webinar.save();
          res.json({message: 'success editing webinar'});
        }
        catch(err){
          console.log(err);
          res.status(500).json({message: 'error editing webinar'});
        }
      }
    });
  },
  /**
   * Route to list all webinars
   * return object with only one proprety, `webinar`, which is an array of Webinar:
   * [{`id`, `ytid`, `judul, `start`, `end`}]
   */
  async listWebinar(_, res){
    try{
      const webinar = await Webinar.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'deskripsi']
        }
      });
      res.json({webinar});
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
    const current = Date.now();
    try{
      const webinar = await Webinar.findOne({
        where: {
          [Op.and]: [
            { start: {
              [Op.lte]: current
            } },
            { end: {
              [Op.gte]: current
            }}
          ]
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      });
      res.json(webinar);
    }
    catch(err){
      console.log(err);
      res.status(500).json({message: 'error finding webinar'});
    }
  }
};