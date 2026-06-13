const db = require("../config/db");

exports.createNotificationLogic = async ({ user_id, message, notification_type }) => {
  await db.promise().query(
    `INSERT INTO notifications (user_id, message, notification_type, status)
     VALUES (?, ?, ?, 'unread')`,
    [user_id, message, notification_type]
  );
};