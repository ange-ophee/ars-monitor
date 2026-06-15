const db = require("../config/db");

const getReports = async () => {

  const [rows] = await db.query(`
    SELECT
      r.*,
      u.full_name AS generated_by_name
    FROM reports r
    JOIN users u ON r.generated_by = u.id
    ORDER BY r.created_at DESC
  `);

  return rows;
};

const createReport = async (data) => {

  const {
    generated_by,
    report_type,
    report_content,
    title
  } = data;

  const [result] = await db.query(`
    INSERT INTO reports
    (
      generated_by,
      report_type,
      report_content,
      title
    )
    VALUES (?, ?, ?, ?)
  `, [
    generated_by,
    report_type,
    report_content,
    title
  ]);

  return result;
};

module.exports = {
  getReports,
  createReport
};