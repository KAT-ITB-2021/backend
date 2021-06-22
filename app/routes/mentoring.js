const express = require('express');
const router = new express.Router();
const { parseToken, authEdit } = require('../helper/auth');
const { addMentoring, getLatestMentoring, editMentoring, removeMentoring, getAllMentoring } = require('../controllers/mentoringController');
const { addMentoringDetail, editMentoringDetail, removeMentoringDetail, getAllMentoringDetails, getOneMentoringDetail, getAssociatedMentorings } = require('../controllers/mentoringDetailController');

router.post('/mentoring*', parseToken);
router.post('/mentoring/now', getLatestMentoring);
router.post('/mentoring/admin*', authEdit);
router.post('/mentoring/admin/add', addMentoring);
router.post('/mentoring/admin/edit/:id', editMentoring);
router.post('/mentoring/admin/remove/:id', removeMentoring);
router.post('/mentoring/admin/getall', getAllMentoring);

router.post('/mentoringdetail*', parseToken, authEdit);
router.post('/mentoringdetail/add', addMentoringDetail);
router.post('/mentoringdetail/edit/:id', editMentoringDetail);
router.post('/mentoringdetail/remove/:id', removeMentoringDetail);
router.post('/mentoringdetail/getall', getAllMentoringDetails);
router.post('/mentoringdetail/get/:id', getOneMentoringDetail);
router.post('/mentoringdetail/mentorings', getAssociatedMentorings);

module.exports = router;