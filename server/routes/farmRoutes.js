const express = require("express");

const router = express.Router();

const protect =
require("../middleware/authMiddleware");

const authorize =
require("../middleware/roleMiddleware");

const {
  getFarms,
  getFarmById,
  createFarm,
  updateFarm,
  deleteFarm,
  getFarmMonitoring,
  getFarmEvaluations
} = require("../controllers/farmController");

router.get(
  "/",
  protect,
  authorize(
    "Admin",
    "Auditor",
    "Cooperative Manager"
  ),
  getFarms
);

router.get(
  "/:id",
  protect,
  getFarmById
);

router.post(
  "/",
  protect,
  authorize(
    "Admin",
    "Cooperative Manager"
  ),
  createFarm
);

router.put(
  "/:id",
  protect,
  authorize(
    "Admin",
    "Cooperative Manager"
  ),
  updateFarm
);

router.delete(
  "/:id",
  protect,
  authorize("Admin"),
  deleteFarm
);

router.get(
  "/:id/monitoring",
  protect,
  getFarmMonitoring
);

router.get(
  "/:id/evaluations",
  protect,
  getFarmEvaluations
);

module.exports = router;