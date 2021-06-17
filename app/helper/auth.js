const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

module.exports = {
  /**
   * Membaca token JWT, verifikasi, lalu mengembalikan objek berisi
   * nama dan role dari user yang mengirim JWT
   * @param {String} token token JWT
   * @returns {{username: String, role: String}} objek user, keduanya berisi string kosong jika JWT tidak valid
   */
  parseToken(token){
    try{
      return jwt.verify(token, jwtSecret);
    }
    catch(err){
      return {username: '', role: ''};
    }
  }
};