const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');
const { ROLES } = require('./constants');

module.exports = {
  /**
   * Fungsi wrapper untuk membuat JWT dari payload yang ada dan expiration time-nya
   * @param {Object} payload payload dari JWT
   * @param {String} exp waktu expirasi dari JWT
   */
  generateToken(payload, exp){
    return jwt.sign(payload, jwtSecret, { expiresIn: exp });
  },
  /**
   * Middleware untuk parse token, hasilnya dimasukkan dalam objek
   * `userToken` pada req
   */
  parseToken(req, res, next){
    const authHeader = req.headers.authorization;
    if(authHeader){
      const token = authHeader.split(' ')[1];
      try{
        req.userToken = jwt.verify(token, jwtSecret);
        next();
      }
      catch(err){
        res.status(403).json({message: 'bad token'});
      }
    }
    else{
      res.status(401).send({message: 'unauthorized'});
    }
  },
  /**
   * Middleware untuk otentikasi role dengan kuasa "edit" konten
   */
  authEdit(req, res, next){
    if(req.userToken.role === ROLES.pendikpus) next();
    else res.status(403).send();
  }
};