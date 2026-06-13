const db = require("../config/db");

// GET notifications for a user
exports.getUserNotifications = async (req, res) => {
  try {
    const { userId } = req.params;

    const [rows] = await db.promise().query(
      `SELECT * FROM notifications 
       WHERE user_id = ? 
       ORDER BY created_at DESC`,
      [userId]
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching notifications" });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    const { id } = req.params;

    await db.promise().query(
      `UPDATE notifications SET status = 'read' WHERE id = ?`,
      [id]
    );

    res.status(200).json({ message: "Notification marked as read" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating notification" });
  }
};

exports.createNotification = async (req, res) => {
  try {
    const { user_id, message, notification_type } = req.body;

    await db.promise().query(
      `INSERT INTO notifications (user_id, message, notification_type, status)
       VALUES (?, ?, ?, 'unread')`,
      [user_id, message, notification_type]
    );

    res.status(201).json({ message: "Notification created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating notification" });
  }
};