const express = require('express');

const app = express();
app.use('/', require('./routes/login'));
app.use('/', require('./routes/register'));
app.use('/', require('./routes/materi'));
app.use('/', require('./routes/tugas'));

module.exports = app;