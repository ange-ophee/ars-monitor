const express = require("express");
const router = express.Router();

const protect =
require("../middleware/authMiddleware");

const authorize =
require("../middleware/roleMiddleware");

const {
  getAssignments,
  getAssignmentById,
  createAssignment,
  updateAssignment,
  deleteAssignment,
  getMyAssignments
} = require(
  "../controllers/assignmentController"
);

router.get(
  "/",
  protect,
  authorize(
    "Admin",
    "Cooperative Manager"
  ),
  getAssignments
);

router.get(
  "/my",
  protect,
  authorize("Auditor"),
  getMyAssignments
);

router.get(
  "/:id",
  protect,
  getAssignmentById
);

router.post(
  "/",
  protect,
  authorize(
    "Admin",
    "Cooperative Manager"
  ),
  createAssignment
);

router.put(
  "/:id",
  protect,
  authorize(
    "Admin",
    "Cooperative Manager"
  ),
  updateAssignment
);

router.delete(
  "/:id",
  protect,
  authorize("Admin"),
  deleteAssignment
);

module.exports = router;