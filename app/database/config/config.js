require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mariadb"
  },
  "test": {
    "username": "root",
    "password": "",
    "database": "test",
    "host": "localhost",
    "port": 3307,
    "dialect": "mariadb"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mariadb"
  }
}
