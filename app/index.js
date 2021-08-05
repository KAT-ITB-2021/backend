// const app = require('./app');
// const config = require('./config');
const prisma = require("./helper/prisma");

// app.listen(config.express.port, config.express.ip);
// console.log(`Server started at http://${config.express.ip}:${config.express.port}`);

async function main() {
  const allUsers = await prisma.users.findMany();
  console.log(allUsers);
}

main()
  .catch((e) => {
    throw e;
  })

  .finally(async () => {
    await prisma.$disconnect();
  });
