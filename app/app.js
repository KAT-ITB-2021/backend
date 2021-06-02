const express = require('express');

const app = express();
app.use('/api', require('./routes/login'));
app.use('/api', require('./routes/register'));

module.exports = app;