const express =
require("express");

const router =
express.Router();

const protect =
require("../middleware/authMiddleware");

const authorize =
require("../middleware/roleMiddleware");

const {
  getRules,
  createRule,
  saveRuleResult,
  calculateEvaluation,
  getRulesByStandard
} =
require("../controllers/ruleController");

router.get(
  "/",
  protect,
  getRules
);

router.post(
  "/",
  protect,
  authorize("Admin"),
  createRule
);

router.post(
  "/results",
  protect,
  authorize(
    "Auditor",
    "Admin"
  ),
  saveRuleResult
);

router.get(
  "/calculate/:farmId",
  protect,
  calculateEvaluation
);

router.get(
  "/standard/:standard",
  protect,
  getRulesByStandard
);

module.exports = router;