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

module.exports = {express, prefix};