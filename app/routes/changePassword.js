const express = require('express');
const router = new express.Router();
const { changePassword } = require('../controllers/userController');
const { parseToken } = require('../helper/auth');

router.post('/changepassword', parseToken, changePassword);

module.exports = router;