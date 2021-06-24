const express = require('express');
const router = new express.Router();
const { parseToken, authEdit } = require('../helper/auth');
const { getAllJadwal, daftarkanPresensi, hapuskanPresensi, addJadwal, editJadwal, listPresensiPeserta, listPresensiPesertaOther } = require('../controllers/presensiController');

router.post('/presensi*', parseToken);
router.post('/presensi', getAllJadwal);
router.post('/presensi/list', listPresensiPeserta);
router.post('/presensi/hadir/:id', daftarkanPresensi);
router.post('/presensi/tidakhadir/:id', hapuskanPresensi);
router.post('/presensi/admin*', authEdit);
router.post('/presensi/admin/add', addJadwal);
router.post('/presensi/admin/edit/:id', editJadwal);
router.post('/presensi/admin/remove/:id', editJadwal);
router.post('/presensi/admin/list/:id', listPresensiPesertaOther);

module.exports = router;