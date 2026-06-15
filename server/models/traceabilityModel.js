const db = require("../config/db");

const getTraceabilityByBatch = async (batchId) => {

  const [rows] = await db.query(
    `
    SELECT
      tr.*,
      cb.batch_code,
      cb.weight_kg,
      h.harvest_date
    FROM traceability_records tr

    JOIN cocoa_batches cb
      ON tr.batch_id = cb.id

    JOIN harvests h
      ON cb.harvest_id = h.id

    WHERE tr.batch_id = ?
    ORDER BY tr.action_date ASC
    `,
    [batchId]
  );

  return rows;
};

const createTraceEvent = async (data) => {

  const {
    batch_id,
    location,
    action_type
  } = data;

  const [result] = await db.query(
    `
    INSERT INTO traceability_records
    (
      batch_id,
      location,
      action_type
    )
    VALUES (?, ?, ?)
    `,
    [
      batch_id,
      location,
      action_type
    ]
  );

  return result;
};

const getAllTraceability = async () => {

  const [rows] = await db.query(
    `
    SELECT
      tr.*,
      cb.batch_code,
      h.farm_id
    FROM traceability_records tr

    JOIN cocoa_batches cb
      ON tr.batch_id = cb.id

    JOIN harvests h
      ON cb.harvest_id = h.id

    ORDER BY tr.action_date DESC
    `
  );

  return rows;
};

module.exports = {
  getTraceabilityByBatch,
  createTraceEvent,
  getAllTraceability
};