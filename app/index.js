const express = require('express');
const config = require('./config');

const db = require('./database/models');

const app = express();
app.use('/api', require('./routes/login'));

app.listen(config.express.port, config.express.ip);
console.log(`Server started at http://${config.express.ip}:${config.express.port}`);