const express = require("express");
const router = express.Router();

const protect =
require("../middleware/authMiddleware");

const authorize =
require("../middleware/roleMiddleware");

const {
  createTraceEvent,
  getBatchTraceability,
  getAllTraceability
} = require("../controllers/traceabilityController");

router.post(
  "/",
  protect,
  authorize("Admin", "Auditor"),
  createTraceEvent
);

router.get(
  "/",
  protect,
  getAllTraceability
);

router.get(
  "/batch/:batchId",
  protect,
  getBatchTraceability
);

module.exports = router;