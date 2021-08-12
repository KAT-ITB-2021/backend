const express = require('express');
const router = new express.Router();
const { parseToken, authEdit } = require('../helper/auth');
const { addProduk, addSponsor, getAllProduk, getAllSponsor, getProdukById, getSponsorById, removeProduk, removeSponsor, editProduk, editSponsor } = require('../controllers/ekatalogController');

router.post('/ekatalog*', parseToken);
router.get('/ekatalog/produk/getall', getAllProduk);
router.get('/ekatalog/produk/:id', getProdukById);
router.get('/ekatalog/sponsor/getall', getAllSponsor);
router.get('/ekatalog/sponsor/:id', getSponsorById);
router.post('/ekatalog/admin*', authEdit);
router.post('/ekatalog/admin/sponsor/add', addSponsor);
router.post('/ekatalog/admin/produk/add', addProduk);
router.delete('/ekatalog/admin/sponsor/remove/:id', removeSponsor);
router.delete('/ekatalog/admin/produk/remove/:id', removeProduk);
// router.update('/ekatalog/admin/produk/edit/:id', editProduk);
// router.update('/ekatalog/admin/sponsor/edit/:id', editSponsor);

module.exports = router;