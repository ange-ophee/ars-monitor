const db = require("../config/db");

const getAllFarms = async () => {
  const [farms] = await db.query(`
    SELECT
      farms.*,
      users.full_name AS farmer_name
    FROM farms
    JOIN farmers
      ON farms.farmer_id = farmers.id
    JOIN users
      ON farmers.user_id = users.id
  `);

  return farms;
};

const getFarmById = async (id) => {
  const [farm] = await db.query(
    `
    SELECT
      farms.*,
      users.full_name AS farmer_name
    FROM farms
    JOIN farmers
      ON farms.farmer_id = farmers.id
    JOIN users
      ON farmers.user_id = users.id
    WHERE farms.id = ?
    `,
    [id]
  );

  return farm[0];
};

const createFarm = async (farmData) => {

  const {
    farmer_id,
    farm_name,
    location,
    gps_coordinates,
    farm_size,
    production_capacity,
    status,
    farm_type,
    risk_level,
    certification_status
  } = farmData;

  const [result] = await db.query(
    `
    INSERT INTO farms (
      farmer_id,
      farm_name,
      location,
      gps_coordinates,
      farm_size,
      production_capacity,
      status,
      farm_type,
      risk_level,
      certification_status
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      farmer_id,
      farm_name,
      location,
      gps_coordinates,
      farm_size,
      production_capacity,
      status,
      farm_type,
      risk_level,
      certification_status
    ]
  );

  return result;
};

const updateFarm = async (id, farmData) => {

  const {
    farm_name,
    location,
    gps_coordinates,
    farm_size,
    production_capacity,
    status,
    farm_type,
    risk_level,
    certification_status
  } = farmData;

  const [result] = await db.query(
    `
    UPDATE farms
    SET
      farm_name = ?,
      location = ?,
      gps_coordinates = ?,
      farm_size = ?,
      production_capacity = ?,
      status = ?,
      farm_type = ?,
      risk_level = ?,
      certification_status = ?
    WHERE id = ?
    `,
    [
      farm_name,
      location,
      gps_coordinates,
      farm_size,
      production_capacity,
      status,
      farm_type,
      risk_level,
      certification_status,
      id
    ]
  );

  return result;
};
const deleteFarm = async (id) => {

  const [result] = await db.query(
    "DELETE FROM farms WHERE id = ?",
    [id]
  );

  return result;
};

const getFarmMonitoring = async (farmId) => {

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

const getFarmEvaluations = async (farmId) => {

  const [evaluations] = await db.query(
    `
    SELECT *
    FROM evaluations
    WHERE farm_id = ?
    ORDER BY evaluation_date DESC
    `,
    [farmId]
  );

  return evaluations;
};

module.exports = {
  getAllFarms,
  getFarmById,
  createFarm,
  updateFarm,
  deleteFarm,
  getFarmMonitoring,
  getFarmEvaluations
};