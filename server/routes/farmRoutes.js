const express = require('express');

const router = express.Router();

const farmController = require('../controllers/farmController');

// CREATE
router.post('/', farmController.createFarm);

// READ ALL
router.get('/', farmController.getAllFarms);

// READ ONE
router.get('/:id', farmController.getFarmById);

// UPDATE
router.put('/:id', farmController.updateFarm);

// DELETE
router.delete('/:id', farmController.deleteFarm);

module.exports = router;