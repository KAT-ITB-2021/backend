const express = require('express');
const router = new express.Router();
const { parseToken, authEdit } = require('../helper/auth');
const { getAllMateri, getMateriById, addMateri, removeMateri, editMateri } = require('../controllers/materiController');

router.post('/materi*', parseToken);
router.post('/materi', getAllMateri);
router.post('/materi/admin*', authEdit);
router.post('/materi/admin/add', addMateri);
router.post('/materi/admin/remove/:id', removeMateri);
router.post('/materi/admin/edit/:id', editMateri);
router.post('/materi/:id', getMateriById);

module.exports = router;