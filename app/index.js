const app = require('./app');
const config = require('./config');

app.listen(config.express.port, config.express.ip);
console.log(`Server started at http://${config.express.ip}:${config.express.port}`);