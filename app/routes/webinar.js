const express = require('express');
const router = new express.Router();
const { parseToken, authEdit } = require('../helper/auth');
const { currentWebinar, addWebinar, editWebinar, removeWebinar, listWebinar } = require('../controllers/webinarController');

router.post('/webinar*', parseToken);
router.post('/webinar/current', currentWebinar);
router.post('/webinar/admin*', authEdit);
router.post('/webinar/admin/add', addWebinar);
router.post('/webinar/admin/edit/:id', editWebinar);
router.post('/webinar/admin/remove/:id', removeWebinar);
router.post('/webinar/admin/list', listWebinar);

module.exports = router;