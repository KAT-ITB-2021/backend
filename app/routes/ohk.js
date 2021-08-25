const express = require('express');
const { parseToken } = require('../helper/auth');
const router = new express.Router();
const ohkController = require('../controllers/ohkController');

router.post('/ohk*', parseToken);
router.post('/ohk/quiz/submit', ohkController.postSubmisiQuiz);
router.post('/ohk/quiz/get/:id', ohkController.getScore);
router.post('/ohk/zone/visited/:id', ohkController.getVisited);
router.post('/ohk/zone/visit/:zona/:id', ohkController.visit);