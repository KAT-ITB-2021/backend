const { User } = require('../database/models');
const { generateToken } = require('../helper/auth');
const crypto = require('crypto');
const { ROLES } = require('../helper/constants');
const { parseForm } = require('../helper/parseform');

const CURRENT_ROLE = ROLES.peserta;

module.exports = {
  async register(req, res, next) {
    /* Handle Register */
    try{
      const { fields } = await parseForm(req);
      if(!fields.email || !fields.password) return res.status(400).json({ message: 'No email or password provided'});
      if(!fields.name || !fields.nim) return res.status(400).json({ message: 'No name or nim provided'});
      const salt = crypto.randomBytes(32);
      crypto.pbkdf2(fields.password, salt, 50000, 64, 'sha512', (_, derivedKey) => {
        User.create({
          nama: fields.name,
          nim: fields.nim,
          email: fields.email,
          kelompok: fields.kelompok,
          hashedPassword: derivedKey.toString('hex'),
          salt: salt.toString('hex'),
          role: CURRENT_ROLE
        }).then((user) => {
          res.status(200).send({
            token: generateToken({
              id: user.id,
              nama: user.nama,
              email: user.email,
              nim: user.nim,
              kelompok: user.kelompok,
              role: user.role
            }, '1d')
          });
        }).catch((err) => {
          console.log(err);
          res.status(400).json({message: 'User already exists'});
        });
      });
    }
    catch(err){
      next(err);
    }
  },

  async login(req, res, next){
    try{
      const { fields } = await parseForm(req);
      if(!fields.email || !fields.password) return res.status(400).json({ message: 'Login fail' });
      const user = await User.findOne({where: { email: fields.email }});
      if(user === null){
        res.status(400).json({ message: 'Invalid user or password' });
      }
      else{
        crypto.pbkdf2(fields.password, Buffer.from(user.salt, 'hex'), 50000, 64, 'sha512', (_, derivedKey) => {
          if(derivedKey.toString('hex') === user.hashedPassword){
            res.status(200).json({
              token: generateToken({
                id: user.id,
                nama: user.nama,
                email: user.email,
                nim: user.nim,
                role: user.role,
                kelompok: user.kelompok
              }, '1d')
            });
          }
          else{
            res.status(400).json({ message: 'Invalid user or password' });
          }
        });
      }
    }
    catch(err){
      next(err);
    }
  },

  async changePassword(req, res){
    try{
      const { fields } = await parseForm(req);
      const { oldPassword, newPassword } = fields;
      const { id } = req.userToken;
      const user = await User.findOne({
        where: { id }
      });
      if(!user.id) res.status(400).json({message: 'user invalid'});
      else{
        const salt = Buffer.from(user.salt, 'hex');
        console.log(oldPassword);
        const hashedOld = crypto.pbkdf2Sync(oldPassword, salt, 50000, 64, 'sha512');
        if(hashedOld.toString('hex') === user.hashedPassword){
          const newSalt = crypto.randomBytes(32);
          const hashedNew = crypto.pbkdf2Sync(newPassword, newSalt, 50000, 64, 'sha512');
          user.salt = newSalt.toString('hex');
          user.hashedPassword = hashedNew.toString('hex');
          try{
            await user.save();
            res.json({message: 'success updating password'});
          }
          catch(err){
            console.log(err);
            res.status(500).json({message: 'error updating password'});
          }
        }
        else{
          res.status(400).json({message: 'password invalid'});
        }
      }
    }
    catch(err){
      res.status(400).json({message: 'error parsing form'});
    }
  }
};