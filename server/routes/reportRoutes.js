const express = require('express');
const router = express.Router();
const reportController = require('../Controller/reportController');

router.get('/', reportController.getAllReports);
router.post('/', reportController.createReport);


module.exports = router;