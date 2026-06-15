const express = require("express");
const router = express.Router();

const {
  getFarmers,
  getFarmerById,
  createFarmer,
  updateFarmer,
  deleteFarmer,
  getFarmerFarms
} = require("../controllers/farmerController");

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

// View all farmers
router.get(
  "/",
  protect,
  authorize("Admin", "Cooperative Manager", "Auditor"),
  getFarmers
);

// View one farmer
router.get(
  "/:id",
  protect,
  authorize("Admin", "Cooperative Manager", "Auditor", "Farmer"),
  getFarmerById
);

// Create farmer
router.post(
  "/",
  protect,
  authorize("Admin", "Cooperative Manager"),
  createFarmer
);

// Update farmer
router.put(
  "/:id",
  protect,
  authorize("Admin", "Cooperative Manager"),
  updateFarmer
);

// Delete farmer
router.delete(
  "/:id",
  protect,
  authorize("Admin"),
  deleteFarmer
);

// Get farmer farms
router.get(
  "/:id/farms",
  protect,
  authorize("Admin", "Cooperative Manager", "Auditor", "Farmer"),
  getFarmerFarms
);

module.exports = router;