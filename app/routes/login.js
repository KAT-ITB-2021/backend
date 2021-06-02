const express = require('express');
const router = new express.Router();
// const jwt = require('jsonwebtoken');
const formidable = require('formidable');
const { login } = require('../controllers/userController');

const ParseURLEncoded = express.urlencoded({extended: false});

router.post('/login', login);

module.exports = router;