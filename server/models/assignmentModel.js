const db = require("../config/db");

const getAllAssignments = async () => {
  const [assignments] = await db.query(`
    SELECT
      aa.*,
      f.farm_name,
      auditor.full_name AS auditor_name,
      admin.full_name AS assigned_by_name
    FROM audit_assignments aa

    JOIN farms f
      ON aa.farm_id = f.id

    JOIN users auditor
      ON aa.auditor_id = auditor.id

    JOIN users admin
      ON aa.assigned_by = admin.id
  `);

  return assignments;
};

const getAssignmentById = async (id) => {

  const [assignment] = await db.query(
    `
    SELECT *
    FROM audit_assignments
    WHERE id = ?
    `,
    [id]
  );

  return assignment[0];
};

const createAssignment = async (data) => {

  const {
    farm_id,
    auditor_id,
    assigned_by,
    status
  } = data;

  const [result] = await db.query(
    `
    INSERT INTO audit_assignments
    (
      farm_id,
      auditor_id,
      assigned_by,
      status
    )
    VALUES (?, ?, ?, ?)
    `,
    [
      farm_id,
      auditor_id,
      assigned_by,
      status || "pending"
    ]
  );

  return result;
};

const updateAssignment = async (
  id,
  data
) => {

  const {
    farm_id,
    auditor_id,
    status
  } = data;

  const [result] = await db.query(
    `
    UPDATE audit_assignments
    SET
      farm_id = ?,
      auditor_id = ?,
      status = ?
    WHERE id = ?
    `,
    [
      farm_id,
      auditor_id,
      status,
      id
    ]
  );

  return result;
};

const updateAssignmentStatus =
async (
  farmId,
  auditorId,
  status
) => {

  const [result] = await db.query(
    `
    UPDATE audit_assignments
    SET status = ?
    WHERE farm_id = ?
    AND auditor_id = ?
    `,
    [
      status,
      farmId,
      auditorId
    ]
  );

  return result;
};

const deleteAssignment = async (id) => {

  const [result] = await db.query(
    `
    DELETE FROM audit_assignments
    WHERE id = ?
    `,
    [id]
  );

  return result;
};

const getAssignmentsByAuditor =
async (auditorId) => {

  const [assignments] = await db.query(
    `
    SELECT
      aa.*,
      f.farm_name,
      f.location
    FROM audit_assignments aa

    JOIN farms f
      ON aa.farm_id = f.id

    WHERE aa.auditor_id = ?
    `,
    [auditorId]
  );

  return assignments;
};

const isFarmAssignedToAuditor = async (
  farmId,
  auditorId
) => {

  const [rows] = await db.query(
    `
    SELECT *
    FROM audit_assignments
    WHERE farm_id = ?
    AND auditor_id = ?
    AND status IN (
      'pending',
      'assigned',
      'active'
    )
    `,
    [farmId, auditorId]
  );

  return rows.length > 0;
};

module.exports = {
  getAllAssignments,
  getAssignmentById,
  createAssignment,
  updateAssignment,
  updateAssignmentStatus,
  deleteAssignment,
  getAssignmentsByAuditor,
  isFarmAssignedToAuditor
};