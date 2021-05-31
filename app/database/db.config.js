module.exports = {
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_USER || "root",
  PASSWORD: process.env.DB_PASS || "password",
  DB: process.env.DB_NAME || "database",
  dialect: "mariadb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}