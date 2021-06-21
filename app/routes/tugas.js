const express = require('express');
const router = new express.Router();
const { parseToken, authEdit, authMentor } = require('../helper/auth');
const { getAllTugas, getTugasById, addTugas, removeTugas, editTugas, submitTugas, listSubmisiPerTugas, lihatSubmisiSendiri, hapusSubmisi } = require('../controllers/tugasController');

router.post('/tugas*', parseToken);
router.post('/tugas', getAllTugas);
router.post('/tugas/:id', getTugasById);
router.post('/tugas/:id/lihat', lihatSubmisiSendiri);
router.post('/tugas/:id/submit', submitTugas);
router.post('/tugas/:id/hapussubmisi', hapusSubmisi);
router.post('/tugas/admin*', authEdit);
router.post('/tugas/admin/add', addTugas);
router.post('/tugas/admin/remove/:id', removeTugas);
router.post('/tugas/admin/edit/:id', editTugas);
router.post('/tugas/mentor*', authMentor);
router.post('/tugas/mentor/:id/submisi', listSubmisiPerTugas);

module.exports = router;