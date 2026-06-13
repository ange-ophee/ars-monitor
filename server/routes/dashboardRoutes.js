const express = require('express');

const router = express.Router();

const dashboardController = require('../controllers/dashboardController');

router.get('/summary', dashboardController.getSummary);
router.get('/farm-status', dashboardController.getFarmStatusStats);
router.get('/evaluations', dashboardController.getEvaluationStats);
router.get('/monitoring', dashboardController.getMonitoringStats);
router.get('/compliance-rate', dashboardController.getComplianceRate);

module.exports = router;