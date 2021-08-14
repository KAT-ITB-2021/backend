const express = require('express');
const router = new express.Router();
const {addTamu} = require('../controllers/tamuGaleriController.js');

router.post('/addbukutamu', addTamu);

module.exports = router;