const express = require('express');
const router = new express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.register);

module.exports = router;