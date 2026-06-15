const express = require("express");
const router = express.Router();

const protect =
require("../middleware/authMiddleware");

const authorize =
require("../middleware/roleMiddleware");

const {
  autoCertifyFarm,
  getCertificate
} =
require("../controllers/certificationController");

router.post(
  "/auto/:farmId",
  protect,
  authorize("Admin", "Auditor"),
  autoCertifyFarm
);

router.get(
  "/:farmId",
  protect,
  getCertificate
);

module.exports = router;