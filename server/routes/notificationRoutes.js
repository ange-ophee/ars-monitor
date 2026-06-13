const express = require("express");
const router = express.Router();

const notificationController = require("../controllers/notificationController");

// Get user notifications
router.get("/:userId", notificationController.getUserNotifications);

// Mark as read
router.put("/:id/read", notificationController.markAsRead);

// Create notification
router.post("/", notificationController.createNotification);

module.exports = router;