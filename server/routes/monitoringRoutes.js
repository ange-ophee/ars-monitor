const express = require('express');

const router = express.Router();

const monitoringController = require('../controllers/monitoringController');

// CREATE
router.post('/', monitoringController.createMonitoring);

// GET ALL
router.get('/', monitoringController.getAllMonitoring);

// GET BY FARM
router.get('/farm/:farmId', monitoringController.getByFarm);

// GET BY ID
router.get('/:id', monitoringController.getById);

// UPDATE
router.put('/:id', monitoringController.updateMonitoring);

// DELETE
router.delete('/:id', monitoringController.deleteMonitoring);

module.exports = router;