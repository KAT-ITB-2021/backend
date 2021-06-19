const formidable = require('formidable');
const { Webinar } = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
  /**
   * Route to add Webinar
   * form fields: `ytid`, `start`, `end`
   * `start` and `end` must be formatted as seconds since UNIX epoch
   */
  addWebinar(req, res){
    const form = formidable();
    form.parse(req, async (err, fields) => {
      if(err) res.status(400).json({message: 'error parsing form'});
      else{
        const start = new Date(parseInt(fields.start));
        const end = new Date(parseInt(fields.end));
        const { ytid } = fields;
        try{
          await Webinar.create({
            start, end, ytid
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
   * form fields: `ytid`, `start`, `end`
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
        const { ytid } = fields;
        try{
          const webinar = Webinar.findOne({
            where: { id }
          });
          if(start) webinar.start = start;
          if(end) webinar.end = end;
          if(ytid) webinar.ytid = ytid;
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
   * [{`id`, `ytid`, `start`, `end`}]
   */
  async listWebinar(_, res){
    try{
      const webinar = Webinar.findAll();
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
   * {`id`, `ytid`, `start`, `end`}
   * could be empty if there is no webinar
   */
  async currentWebinar(_, res){
    const current = new Date();
    try{
      const webinar = Webinar.findOne({
        where: {
          [Op.and]: [
            { start: {
              [Op.lte]: current
            } },
            { end: {
              [Op.gte]: current
            }}
          ]
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