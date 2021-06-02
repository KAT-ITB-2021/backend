const formidable = require('formidable');
const jwt = require('jsonwebtoken');

const { User } = require('../database/models');
const crypto = require('crypto');

const CURRENT_ROLE = 'mentor';

module.exports = {
  register(req, res, next) {
    /* Handle Register */
    const form = formidable({multiples: true});
    form.parse(req, (err, fields, _) => {
      if(err){
        next(err);
      }
      else{
        /* Berhasil parse form */
        if(!fields.username || !fields.password) return res.status(400).json({ message: ''});
        const salt = crypto.randomBytes(32);
        crypto.pbkdf2(fields.password, salt, 50000, 64, 'sha512', (err, derivedKey) => {
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
            res.status(500).json({ message: 'Error when creating user'});
          });
        });
      }
    });
  }
}