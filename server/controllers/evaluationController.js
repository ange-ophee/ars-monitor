const evaluationModel = require("../models/evaluationModel");
const db = require("../config/db");

exports.createEvaluation =
async (req, res) => {

  try {

    let status;

    const score =
      Number(req.body.compliance_score);

    if (score >= 90)
      status = "Certified";

    else if (score >= 75)
      status = "Compliant";

    else if (score >= 50)
      status =
      "Needs Improvement";

    else
      status =
      "Non-Compliant";

    const result =
      await evaluationModel
      .createEvaluation({
        ...req.body,
        evaluator_id:
          req.user.id,
        evaluation_status:
          status
      });

    res.status(201).json({
      message:
        "Evaluation created",
      evaluationId:
        result.insertId,
      evaluationStatus:
        status
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getEvaluations = async (
  req,
  res
) => {

  try {

    const evaluations =
      await evaluationModel
      .getAllEvaluations();

    res.status(200).json(
      evaluations
    );

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.getEvaluationById =
async (req, res) => {

  try {

    const evaluation =
      await evaluationModel
      .getEvaluationById(
        req.params.id
      );

    if (!evaluation) {

      return res.status(404).json({
        message:
          "Evaluation not found"
      });

    }

    res.status(200).json(
      evaluation
    );

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.updateEvaluation =
async (req, res) => {

  try {

    let status;

    const score =
      Number(
        req.body.compliance_score
      );

    if (score >= 90)
      status = "Certified";

    else if (score >= 75)
      status = "Compliant";

    else if (score >= 50)
      status =
      "Needs Improvement";

    else
      status =
      "Non-Compliant";

    await evaluationModel
      .updateEvaluation(
        req.params.id,
        {
          ...req.body,
          evaluation_status:
            status
        }
      );

    res.status(200).json({
      message:
        "Evaluation updated",
      status
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.deleteEvaluation =
async (req, res) => {

  try {

    await evaluationModel
      .deleteEvaluation(
        req.params.id
      );

    res.status(200).json({
      message:
        "Evaluation deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};