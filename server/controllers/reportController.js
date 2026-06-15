const reportModel = require("../models/reportModel");
const db = require("../config/db");

exports.getReports = async (req, res) => {

  try {

    const reports = await reportModel.getReports();

    res.status(200).json(reports);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.generateFarmReport = async (req, res) => {

  try {

    const farmId = req.params.farmId;

    // Farm info
    const [farm] = await db.query(
      `SELECT * FROM farms WHERE id = ?`,
      [farmId]
    );

    // Evaluation
    const [evaluation] = await db.query(
      `SELECT * FROM evaluations WHERE farm_id = ? ORDER BY id DESC LIMIT 1`,
      [farmId]
    );

    // Traceability
    const [trace] = await db.query(`
      SELECT COUNT(*) AS total
      FROM traceability_records tr
      JOIN cocoa_batches cb ON tr.batch_id = cb.id
      JOIN harvests h ON cb.harvest_id = h.id
      WHERE h.farm_id = ?
    `, [farmId]);

    const report = {
      farm: farm[0],
      evaluation: evaluation[0] || null,
      traceability_records: trace[0].total,
      generated_at: new Date()
    };

    res.status(200).json(report);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.saveReport = async (req, res) => {

  try {

    const result = await reportModel.createReport({
      ...req.body,
      generated_by: req.user.id
    });

    res.status(201).json({
      message: "Report saved",
      reportId: result.insertId
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.generateComplianceReport = async (req, res) => {

  try {

    const [rows] = await db.query(`
      SELECT
        evaluation_status,
        COUNT(*) AS total
      FROM evaluations
      GROUP BY evaluation_status
    `);

    const [[avg]] = await db.query(`
      SELECT AVG(compliance_score) AS average_score
      FROM evaluations
    `);

    res.status(200).json({
      status_distribution: rows,
      average_compliance_score: avg.average_score
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.generateTraceabilityReport = async (req, res) => {

  try {

    const [rows] = await db.query(`
      SELECT
        action_type,
        COUNT(*) AS total
      FROM traceability_records
      GROUP BY action_type
    `);

    const [[totalBatches]] = await db.query(`
      SELECT COUNT(*) AS total
      FROM cocoa_batches
    `);

    res.status(200).json({
      action_distribution: rows,
      total_batches: totalBatches.total
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.generateCertificationReport = async (req, res) => {

  try {

    const [rows] = await db.query(`
      SELECT
        certification_status,
        COUNT(*) AS total
      FROM certifications
      GROUP BY certification_status
    `);

    const [[active]] = await db.query(`
      SELECT COUNT(*) AS total
      FROM certifications
      WHERE certification_status = 'Certified'
    `);

    res.status(200).json({
      certification_distribution: rows,
      active_certifications: active.total
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.generateFarmPerformanceReport = async (req, res) => {

  try {

    const [rows] = await db.query(`
      SELECT
        f.farm_name,
        e.compliance_score,
        e.evaluation_status
      FROM farms f
      LEFT JOIN evaluations e ON f.id = e.farm_id
      ORDER BY e.compliance_score DESC
    `);

    res.status(200).json(rows);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getARSComplianceDashboard = async (req, res) => {

  try {

    const farmId = req.params.farmId;

    // ARS 1000-1
    const [[ars1]] = await db.query(`
      SELECT SUM(score) AS total
      FROM farm_rule_results fr
      JOIN compliance_rules cr ON fr.rule_id = cr.id
      WHERE fr.farm_id = ? AND cr.standard_code = 'ARS1000-1'
    `, [farmId]);

    // ARS 1000-2
    const [[ars2]] = await db.query(`
      SELECT SUM(score) AS total
      FROM farm_rule_results fr
      JOIN compliance_rules cr ON fr.rule_id = cr.id
      WHERE fr.farm_id = ? AND cr.standard_code = 'ARS1000-2'
    `, [farmId]);

    // ARS 1000-3
    const [[ars3]] = await db.query(`
      SELECT SUM(score) AS total
      FROM farm_rule_results fr
      JOIN compliance_rules cr ON fr.rule_id = cr.id
      WHERE fr.farm_id = ? AND cr.standard_code = 'ARS1000-3'
    `, [farmId]);

    const global =
      (ars1.total + ars2.total + ars3.total) / 3;

    res.status(200).json({
      farm_id: farmId,
      ars_1000_1: ars1.total || 0,
      ars_1000_2: ars2.total || 0,
      ars_1000_3: ars3.total || 0,
      global_ars_score: global
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};