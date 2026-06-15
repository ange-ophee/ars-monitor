const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const {
  getReports,
  generateFarmReport,
  saveReport,
  generateComplianceReport,
  generateFarmPerformanceReport,
  generateTraceabilityReport,
  generateCertificationReport,
  getARSComplianceDashboard
} = require("../controllers/reportController");

/* =========================
   BASIC REPORTS
========================= */

// Get all saved reports
router.get(
  "/",
  protect,
  authorize("Admin", "Auditor", "Cooperative Manager"),
  getReports
);

// Save a report
router.post(
  "/",
  protect,
  authorize("Admin", "Auditor", "Cooperative Manager"),
  saveReport
);

// Generate single farm report
router.get(
  "/farm/:farmId",
  protect,
  authorize("Admin", "Auditor", "Cooperative Manager"),
  generateFarmReport
);

/* =========================
   ANALYTICS REPORTS
========================= */

// Compliance summary (ARS scores overview)
router.get(
  "/compliance-summary",
  protect,
  authorize("Admin", "Auditor"),
  generateComplianceReport
);

// Farm performance ranking
router.get(
  "/farm-performance",
  protect,
  authorize("Admin", "Auditor", "Cooperative Manager"),
  generateFarmPerformanceReport
);

// Traceability analytics
router.get(
  "/traceability-summary",
  protect,
  authorize("Admin", "Auditor"),
  generateTraceabilityReport
);

// Certification analytics
router.get(
  "/certification-summary",
  protect,
  authorize("Admin", "Auditor"),
  generateCertificationReport
);

/* =========================
   ARS DASHBOARD (ADVANCED)
========================= */

// Full ARS compliance dashboard per farm
router.get(
  "/ars-dashboard/:farmId",
  protect,
  authorize("Admin", "Auditor", "Cooperative Manager"),
  getARSComplianceDashboard
);

module.exports = router;