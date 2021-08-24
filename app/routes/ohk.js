const express = require('express');
const { parseToken } = require('../helper/auth');
const router = new express.Router();
const ohkController = require('../controllers/ohkController');

router.post('/ohk*', parseToken);
router.post('/ohk/insert', ohkController.postSubmisiQuiz);
router.post('/ohk/visited/:id', ohkController.getVisited);
router.post('/ohk/visit/:zona/:id', ohkController.visit);