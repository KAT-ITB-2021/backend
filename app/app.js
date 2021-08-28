const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use('/', require('./routes/login'));
app.use('/', require('./routes/register'));
app.use('/', require('./routes/changePassword'));
app.use('/', require('./routes/materi'));
app.use('/', require('./routes/tugas'));
app.use('/', require('./routes/webinar'));
app.use('/', require('./routes/presensi'));
app.use('/', require('./routes/mentoring'));
app.use('/', require('./routes/ekatalog'));
app.use('/', require('./routes/tamuGaleri'));
app.use('/', require('./routes/ohk'));

module.exports = app;