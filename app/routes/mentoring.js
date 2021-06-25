const express = require('express');
const router = new express.Router();
const { parseToken, authEdit } = require('../helper/auth');
const { addMentoring, getLatestMentoring, editMentoring, removeMentoring, getAllMentoring, getOneMentoring } = require('../controllers/mentoringController');
const { addDetailMentoring, editDetailMentoring, removeDetailMentoring, getAllDetailMentorings, getOneDetailMentoring, getAssociatedMentorings } = require('../controllers/mentoringDetailController');

router.post('/mentoring*', parseToken);
router.post('/mentoring/now', getLatestMentoring);
router.post('/mentoring/getall', getAllMentoring);
router.post('/mentoring/admin*', authEdit);
router.post('/mentoring/admin/add', addMentoring);
router.post('/mentoring/admin/edit/:id', editMentoring);
router.post('/mentoring/admin/remove/:id', removeMentoring);
router.post('/mentoring/admin/getall', getAllMentoring);
router.post('/mentoring/admin/get/:id', getOneMentoring);

router.post('/mentoringdetail*', parseToken, authEdit);
router.post('/mentoringdetail/add', addDetailMentoring);
router.post('/mentoringdetail/edit/:id', editDetailMentoring);
router.post('/mentoringdetail/remove/:id', removeDetailMentoring);
router.post('/mentoringdetail/getall', getAllDetailMentorings);
router.post('/mentoringdetail/get/:id', getOneDetailMentoring);
router.post('/mentoringdetail/mentorings', getAssociatedMentorings);

module.exports = router;