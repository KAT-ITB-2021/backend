const express = require('express');

const db = require('./database/models');

const app = express();
app.use('/api', require('./routes/login'));

module.exports = app;