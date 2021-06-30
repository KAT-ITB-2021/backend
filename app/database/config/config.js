require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "mariadb",
    "logging": false
  },
  "test": {
    "username": "root",
    "password": "",
    "database": "test",
    "host": "localhost",
    "port": process.env.DB_TEST_PORT,
    "dialect": "mariadb"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "mariadb",
    "logging": false,
  }
};
