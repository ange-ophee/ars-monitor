const db = require("../config/db");

const getAllMonitoringRecords =
async () => {

  const [records] = await db.query(`
    SELECT
      mr.*,
      f.farm_name,
      u.full_name AS auditor_name
    FROM monitoring_records mr

    JOIN farms f
      ON mr.farm_id = f.id

    JOIN users u
      ON mr.auditor_id = u.id

    ORDER BY inspection_date DESC
  `);

  return records;
};

const getMonitoringRecordById =
async (id) => {

  const [rows] = await db.query(
    `
    SELECT *
    FROM monitoring_records
    WHERE id = ?
    `,
    [id]
  );

  return rows[0];
};

const createMonitoringRecord =
async (data) => {

  const {
    farm_id,
    auditor_id,
    inspection_date,
    observations,
    disease_presence,
    environmental_conditions,
    production_status,
    monitoring_status
  } = data;

  const [result] = await db.query(
    `
    INSERT INTO monitoring_records
    (
      farm_id,
      auditor_id,
      inspection_date,
      observations,
      disease_presence,
      environmental_conditions,
      production_status,
      monitoring_status
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      farm_id,
      auditor_id,
      inspection_date,
      observations,
      disease_presence,
      environmental_conditions,
      production_status,
      monitoring_status
    ]
  );

  return result;
};

const updateMonitoringRecord =
async (id, data) => {

  const {
    observations,
    disease_presence,
    environmental_conditions,
    production_status,
    monitoring_status
  } = data;

  const [result] = await db.query(
    `
    UPDATE monitoring_records
    SET
      observations = ?,
      disease_presence = ?,
      environmental_conditions = ?,
      production_status = ?,
      monitoring_status = ?
    WHERE id = ?
    `,
    [
      observations,
      disease_presence,
      environmental_conditions,
      production_status,
      monitoring_status,
      id
    ]
  );

  return result;
};

const deleteMonitoringRecord =
async (id) => {

  const [result] = await db.query(
    `
    DELETE FROM monitoring_records
    WHERE id = ?
    `,
    [id]
  );

  return result;
};

const getRecordsByFarm =
async (farmId) => {

  const [records] = await db.query(
    `
    SELECT *
    FROM monitoring_records
    WHERE farm_id = ?
    ORDER BY inspection_date DESC
    `,
    [farmId]
  );

  return records;
};

const getRecordsByAuditor =
async (auditorId) => {

  const [records] = await db.query(
    `
    SELECT *
    FROM monitoring_records
    WHERE auditor_id = ?
    ORDER BY inspection_date DESC
    `,
    [auditorId]
  );

  return records;
};

module.exports = {
  getAllMonitoringRecords,
  getMonitoringRecordById,
  createMonitoringRecord,
  updateMonitoringRecord,
  deleteMonitoringRecord,
  getRecordsByFarm,
  getRecordsByAuditor
};