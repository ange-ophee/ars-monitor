const db = require("../config/db");

const getCertificateByFarm = async (farmId) => {

  const [rows] = await db.query(
    `
    SELECT *
    FROM certifications
    WHERE farm_id = ?
    ORDER BY issue_date DESC
    LIMIT 1
    `,
    [farmId]
  );

  return rows[0];
};

const createCertificate = async (data) => {

  const {
    farm_id,
    evaluation_id,
    certificate_number,
    issue_date,
    expiry_date,
    certification_status,
    ars_standard
  } = data;

  const [result] = await db.query(
    `
    INSERT INTO certifications
    (
      farm_id,
      evaluation_id,
      certificate_number,
      issue_date,
      expiry_date,
      certification_status,
      ars_standard,
      traceability_verified
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      farm_id,
      evaluation_id,
      certificate_number,
      issue_date,
      expiry_date,
      certification_status,
      ars_standard,
      true
    ]
  );

  return result;
};

module.exports = {
  getCertificateByFarm,
  createCertificate
};