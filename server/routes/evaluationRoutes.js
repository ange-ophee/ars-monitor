const express = require('express');

const router = express.Router();

const evaluationController = require('../controllers/evaluationController');

// CREATE
router.post('/', evaluationController.createEvaluation);

// GET ALL
router.get('/', evaluationController.getAllEvaluations);

// GET BY FARM
router.get('/farm/:farmId', evaluationController.getByFarm);

// GET BY ID
router.get('/:id', evaluationController.getById);

// UPDATE
router.put('/:id', evaluationController.updateEvaluation);

// DELETE
router.delete('/:id', evaluationController.deleteEvaluation);

module.exports = router;