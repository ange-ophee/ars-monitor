const Evaluation = require('../models/evaluationModel');
const { createNotificationLogic } = require("../services/notificationService");

// CREATE EVALUATION
exports.createEvaluation = (req, res) => {

    const {
        farm_id,
        evaluator_id,
        evaluation_date,
        compliance_score,
        evaluation_status,
        recommendations,
        corrective_actions
    } = req.body;

    Evaluation.create(
        [farm_id, evaluator_id, evaluation_date, compliance_score, evaluation_status, recommendations, corrective_actions],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.status(201).json({
                message: "Evaluation created successfully",
                evaluationId: result.insertId
            });

        }
    );

    await createNotificationLogic({
        user_id: farmerUserId,
        message: `Your farm was evaluated. Score: ${compliance_score}%`,
        notification_type: "evaluation"
    });

};

// GET ALL
exports.getAllEvaluations = (req, res) => {

    Evaluation.getAll((err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(results);

    });

};

// GET BY FARM
exports.getByFarm = (req, res) => {

    const farmId = req.params.farmId;

    Evaluation.getByFarmId(farmId, (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(results);

    });

};

// GET BY ID
exports.getById = (req, res) => {

    const id = req.params.id;

    Evaluation.getById(id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(result[0]);

    });

};

// UPDATE
exports.updateEvaluation = (req, res) => {

    const id = req.params.id;

    const {
        evaluation_date,
        compliance_score,
        evaluation_status,
        recommendations,
        corrective_actions
    } = req.body;

    Evaluation.update(
        id,
        [evaluation_date, compliance_score, evaluation_status, recommendations, corrective_actions],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Evaluation updated successfully"
            });

        }
    );

};

// DELETE
exports.deleteEvaluation = (req, res) => {

    const id = req.params.id;

    Evaluation.delete(id, (err) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Evaluation deleted successfully"
        });

    });

};