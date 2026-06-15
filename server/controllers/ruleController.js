const ruleModel = require("../models/ruleModel");
const evaluationModel = require("../models/evaluationModel");

exports.getRules = async (
  req,
  res
) => {

  try {

    const rules =
      await ruleModel.getAllRules();

    res.status(200).json(rules);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.createRule = async (
  req,
  res
) => {

  try {

    const result =
      await ruleModel.createRule(
        req.body
      );

    res.status(201).json({
      message:
      "Rule created",
      ruleId:
      result.insertId
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.saveRuleResult =
async (req, res) => {

  try {

    const {
      farm_id,
      rule_id,
      score
    } = req.body;

    await ruleModel
      .saveRuleResult(
        farm_id,
        rule_id,
        score
      );

    res.status(201).json({
      message:
      "Rule result saved"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.calculateEvaluation =
async (req, res) => {

  try {

    const farmId =
      req.params.farmId;

    const score =
      await ruleModel
      .calculateFarmScore(
        farmId
      );

    let status;

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

    res.status(200).json({
      farmId,
      complianceScore:
      score,
      evaluationStatus:
      status
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.getRulesByStandard =
async (req, res) => {

  try {

    const rules =
      await ruleModel
      .getRulesByStandard(
        req.params.standard
      );

    res.status(200).json(
      rules
    );

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};