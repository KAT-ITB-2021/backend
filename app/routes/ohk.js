const express = require('express');
const { parseToken } = require('../helper/auth');
const router = new express.Router();
const ohkController = require('../controllers/ohkController');

router.post('/ohk*', parseToken);
router.post('/ohk/quiz/submit', ohkController.postSubmisiQuiz);
router.post('/ohk/quiz/get/score/all', ohkController.getAllScore);
// router.post('/ohk/quiz/get/score/:id', ohkController.getScore);
router.post('/ohk/zone/visited', ohkController.getVisited);
router.post('/ohk/zone/visit', ohkController.visit);

module.exports = router;