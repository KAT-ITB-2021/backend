const { PrismaClient } = require('../../.prisma/');

let prisma = new PrismaClient();

module.exports = prisma;