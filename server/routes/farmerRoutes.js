const express = require('express');

const router = express.Router();

const farmerController = require('../controllers/farmerController');

// CREATE
router.post('/', farmerController.createFarmer);

// READ ALL
router.get('/', farmerController.getAllFarmers);

// READ ONE
router.get('/:id', farmerController.getFarmerById);

// UPDATE
router.put('/:id', farmerController.updateFarmer);

// DELETE
router.delete('/:id', farmerController.deleteFarmer);

module.exports = router;