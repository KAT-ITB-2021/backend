const express = require('express');

const app = express();
app.use('/', require('./routes/login'));
app.use('/', require('./routes/register'));
app.use('/', require('./routes/materi'));

module.exports = app;