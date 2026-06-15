const db = require("../config/db");

const getAllRules = async () => {

  const [rules] = await db.query(
    `
    SELECT *
    FROM compliance_rules
    ORDER BY id
    `
  );

  return rules;
};

const getRuleById = async (id) => {

  const [rows] = await db.query(
    `
    SELECT *
    FROM compliance_rules
    WHERE id = ?
    `,
    [id]
  );

  return rows[0];
};

const createRule = async (data) => {

  const {
    rule_name,
    description,
    weight,
    standard_code
    } = data;

  const [result] = await db.query(
    `
    INSERT INTO compliance_rules
    (
    rule_name,
    description,
    weight,
    standard_code
    )
    VALUES (?, ?, ?, ?)
    `,
    [
      rule_name,
      description,
      weight,
      standard_code
    ]
  );

  return result;
};

const saveRuleResult = async (
  farmId,
  ruleId,
  score
) => {

  const [result] = await db.query(
    `
    INSERT INTO farm_rule_results
    (
      farm_id,
      rule_id,
      score
    )
    VALUES (?, ?, ?)
    `,
    [
      farmId,
      ruleId,
      score
    ]
  );

  return result;
};

const getFarmRuleResults =
async (farmId) => {

  const [results] = await db.query(
    `
    SELECT
      frr.*,
      cr.rule_name,
      cr.weight
    FROM farm_rule_results frr

    JOIN compliance_rules cr
      ON frr.rule_id = cr.id

    WHERE farm_id = ?
    `,
    [farmId]
  );

  return results;
};

const calculateFarmScore =
async (farmId) => {

  const [rows] = await db.query(
    `
    SELECT
      SUM(score) AS totalScore
    FROM farm_rule_results
    WHERE farm_id = ?
    `,
    [farmId]
  );

  return rows[0].totalScore || 0;
};

const getRulesByStandard =
async (standardCode) => {

  const [rules] = await db.query(
    `
    SELECT *
    FROM compliance_rules
    WHERE standard_code = ?
    `,
    [standardCode]
  );

  return rules;
};

module.exports = {
  getAllRules,
  getRuleById,
  createRule,
  saveRuleResult,
  getFarmRuleResults,
  calculateFarmScore,
  getRulesByStandard
};