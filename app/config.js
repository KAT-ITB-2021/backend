require('dotenv').config();

/**
 * Konfigurasi IP dan Port untuk Express
 */
let express = {
  port: process.env.EXPRESS_PORT || 3000,
  ip: '0.0.0.0'
};

/**
 * Konfigurasi prefix untuk API, nanti tidak dibutuhkan karena pakai reverse proxy (?)
 */
let prefix = process.env.API_PREFIX || '';

/**
 * Kunci rahasia untuk proses signing JWT
 */
let jwtSecret = process.env.JWT_SECRET;

module.exports = {express, prefix, jwtSecret};