const db = require("../config/db");

// Get all farmers
const getAllFarmers = async () => {
  const [farmers] = await db.query(`
    SELECT
      farmers.id,
      farmers.user_id,
      users.full_name,
      users.email,
      users.phone,
      farmers.gender,
      farmers.cooperative_name,
      farmers.region,
      farmers.village,
      farmers.created_at
    FROM farmers
    JOIN users
      ON farmers.user_id = users.id
  `);

  return farmers;
};

// Get farmer by ID
const getFarmerById = async (id) => {
  const [farmer] = await db.query(
    `
    SELECT
      farmers.*,
      users.full_name,
      users.email,
      users.phone
    FROM farmers
    JOIN users
      ON farmers.user_id = users.id
    WHERE farmers.id = ?
    `,
    [id]
  );

  return farmer[0];
};

// Create farmer
const createFarmer = async (farmerData) => {
  const {
    user_id,
    gender,
    cooperative_name,
    region,
    village
  } = farmerData;

  const [result] = await db.query(
    `
    INSERT INTO farmers
    (
      user_id,
      gender,
      cooperative_name,
      region,
      village
    )
    VALUES (?, ?, ?, ?, ?)
    `,
    [
      user_id,
      gender,
      cooperative_name,
      region,
      village
    ]
  );

  return result;
};

// Update farmer
const updateFarmer = async (id, farmerData) => {
  const {
    gender,
    cooperative_name,
    region,
    village
  } = farmerData;

  const [result] = await db.query(
    `
    UPDATE farmers
    SET
      gender = ?,
      cooperative_name = ?,
      region = ?,
      village = ?
    WHERE id = ?
    `,
    [
      gender,
      cooperative_name,
      region,
      village,
      id
    ]
  );

  return result;
};

// Delete farmer
const deleteFarmer = async (id) => {
  const [result] = await db.query(
    "DELETE FROM farmers WHERE id = ?",
    [id]
  );

  return result;
};

// Get farmer farms
const getFarmerFarms = async (farmerId) => {
  const [farms] = await db.query(
    `
    SELECT *
    FROM farms
    WHERE farmer_id = ?
    `,
    [farmerId]
  );

  return farms;
};

module.exports = {
  getAllFarmers,
  getFarmerById,
  createFarmer,
  updateFarmer,
  deleteFarmer,
  getFarmerFarms
};