const db = require("../config/db");

const getAllEvaluations = async () => {

  const [evaluations] = await db.query(`
    SELECT
      e.*,
      f.farm_name,
      u.full_name AS evaluator_name
    FROM evaluations e

    JOIN farms f
      ON e.farm_id = f.id

    JOIN users u
      ON e.evaluator_id = u.id

    ORDER BY evaluation_date DESC
  `);

  return evaluations;
};

const getEvaluationById =
async (id) => {

  const [rows] = await db.query(
    `
    SELECT *
    FROM evaluations
    WHERE id = ?
    `,
    [id]
  );

  return rows[0];
};

const createEvaluation =
async (data) => {

  const {
    farm_id,
    evaluator_id,
    evaluation_date,
    compliance_score,
    evaluation_status,
    recommendations,
    corrective_actions,
    score_breakdown,
    status_reason
  } = data;

  const [result] = await db.query(
    `
    INSERT INTO evaluations
    (
      farm_id,
      evaluator_id,
      evaluation_date,
      compliance_score,
      evaluation_status,
      recommendations,
      corrective_actions,
      score_breakdown,
      status_reason
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      farm_id,
      evaluator_id,
      evaluation_date,
      compliance_score,
      evaluation_status,
      recommendations,
      corrective_actions,
      score_breakdown,
      status_reason
    ]
  );

  return result;
};

const updateEvaluation =
async (id, data) => {

  const {
    compliance_score,
    evaluation_status,
    recommendations,
    corrective_actions,
    score_breakdown,
    status_reason
  } = data;

  const [result] = await db.query(
    `
    UPDATE evaluations
    SET
      compliance_score = ?,
      evaluation_status = ?,
      recommendations = ?,
      corrective_actions = ?,
      score_breakdown = ?,
      status_reason = ?
    WHERE id = ?
    `,
    [
      compliance_score,
      evaluation_status,
      recommendations,
      corrective_actions,
      score_breakdown,
      status_reason,
      id
    ]
  );

  return result;
};

const deleteEvaluation =
async (id) => {

  const [result] = await db.query(
    `
    DELETE FROM evaluations
    WHERE id = ?
    `,
    [id]
  );

  return result;
};

module.exports = {
  getAllEvaluations,
  getEvaluationById,
  createEvaluation,
  updateEvaluation,
  deleteEvaluation
};