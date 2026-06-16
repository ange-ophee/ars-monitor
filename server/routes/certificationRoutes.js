const express = require("express");
const router = express.Router();

const protect =
require("../middleware/authMiddleware");

const authorize =
require("../middleware/roleMiddleware");

const {
  autoCertifyFarm,
  getCertificate,
  getAllCertificates
} =
require("../controllers/certificationController");

router.get(
  "/",
  protect,
  getAllCertificates
);

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