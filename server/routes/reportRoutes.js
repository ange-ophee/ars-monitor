const express = require("express");
const router = express.Router();

/**
 * REPORT CONTROLLER
 * Handles all report-related route logic
 */
const reportController = require("../controllers/reportController");


/**
 * CREATE A NEW REPORT
 * POST /api/reports
 */
router.post("/", reportController.createReport);


/**
 * GET ALL REPORTS
 * GET /api/reports
 */
router.get("/", reportController.getAllReports);


/**
 * GET SINGLE REPORT BY ID
 * GET /api/reports/:id
 */
router.get("/:id", reportController.getReportById);


/**
 * UPDATE REPORT
 * PUT /api/reports/:id
 */
router.put("/:id", reportController.updateReport);


/**
 * DELETE REPORT
 * DELETE /api/reports/:id
 */
router.delete("/:id", reportController.deleteReport);


module.exports = router;