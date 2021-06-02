const formidable = require('formidable');
const jwt = require('jsonwebtoken');

const { User } = require('../database/models');
const crypto = require('crypto');

const CURRENT_ROLE = 'mentor';

module.exports = {
  register(req, res, next) {
    /* Handle Register */
    const form = formidable({multiples: true});
    form.parse(req, (err, fields) => {
      if(err){
        next(err);
      }
      else{
        /* Berhasil parse form */
        if(!fields.username || !fields.password) return res.status(400).json({ message: ''});
        const salt = crypto.randomBytes(32);
        crypto.pbkdf2(fields.password, salt, 50000, 64, 'sha512', (_, derivedKey) => {
          User.create({
            username: fields.username,
            hashedPassword: derivedKey.toString('hex'),
            salt: salt.toString('hex'),
            role: CURRENT_ROLE
          }).then((user) => {
            res.status(200).send(
              jwt.sign({
                'username': user.username,
                'role': user.role
              }, process.env.JWT_SECRET)
            );
          }).catch((err) => {
            console.log(err);
            res.status(500).json({ message: 'Error when creating user'});
          });
        });
      }
    });
  },

  login(req, res, next){
    const form = formidable();
    form.parse(req, async (err, fields) => {
      if(!fields.username || !fields.password) return res.status(400).json({ message: 'Login fail' });
      const user = await User.findOne({where: { username: fields.username }});
      if(user === null){
        res.status(400).json({ message: 'Invalid user or password' });
      }
      else{
        crypto.pbkdf2(fields.password, Buffer.from(user.salt, 'hex'), 50000, 64, 'sha512', (_, derivedKey) => {
          if(derivedKey.toString('hex') === user.hashedPassword){
            res.status(200).send(
              jwt.sign({
                'username': user.username,
                'role': user.role
              }, process.env.JWT_SECRET)
            );
          }
          else{
            res.status(400).json({ message: 'Invalid user or password' });
          }
        })
      }
    });
  }
};