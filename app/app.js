const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use('/', require('./routes/login'));
app.use('/', require('./routes/register'));
app.use('/', require('./routes/materi'));
app.use('/', require('./routes/tugas'));
app.use('/', require('./routes/mentoring'));

module.exports = app;