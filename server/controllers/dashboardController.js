const db = require('../config/db');

// ======================
// TOTAL SUMMARY
// ======================
exports.getSummary = (req, res) => {

    const queries = {
        farmers: "SELECT COUNT(*) AS totalFarmers FROM farmers",
        farms: "SELECT COUNT(*) AS totalFarms FROM farms",
        monitoring: "SELECT COUNT(*) AS totalMonitoring FROM monitoring_records",
        evaluations: "SELECT COUNT(*) AS totalEvaluations FROM evaluations"
    };

    const result = {};

    db.query(queries.farmers, (err, farmers) => {
        if (err) return res.status(500).json(err);

        result.totalFarmers = farmers[0].totalFarmers;

        db.query(queries.farms, (err, farms) => {
            if (err) return res.status(500).json(err);

            result.totalFarms = farms[0].totalFarms;

            db.query(queries.monitoring, (err, monitoring) => {
                if (err) return res.status(500).json(err);

                result.totalMonitoring = monitoring[0].totalMonitoring;

                db.query(queries.evaluations, (err, evaluations) => {
                    if (err) return res.status(500).json(err);

                    result.totalEvaluations = evaluations[0].totalEvaluations;

                    res.status(200).json(result);
                });

            });

        });

    });

};

// ======================
// FARM STATUS STATS
// ======================
exports.getFarmStatusStats = (req, res) => {

    const sql = `
        SELECT status, COUNT(*) AS count
        FROM farms
        GROUP BY status
    `;

    db.query(sql, (err, results) => {

        if (err) return res.status(500).json(err);

        res.status(200).json(results);

    });

};

// ======================
// EVALUATION STATS
// ======================
exports.getEvaluationStats = (req, res) => {

    const sql = `
        SELECT evaluation_status, COUNT(*) AS count
        FROM evaluations
        GROUP BY evaluation_status
    `;

    db.query(sql, (err, results) => {

        if (err) return res.status(500).json(err);

        res.status(200).json(results);

    });

};

// ======================
// MONITORING STATS
// ======================
exports.getMonitoringStats = (req, res) => {

    const sql = `
        SELECT monitoring_status, COUNT(*) AS count
        FROM monitoring_records
        GROUP BY monitoring_status
    `;

    db.query(sql, (err, results) => {

        if (err) return res.status(500).json(err);

        res.status(200).json(results);

    });

};

// ======================
// COMPLIANCE RATE
// ======================
exports.getComplianceRate = (req, res) => {

    const sql = `
        SELECT 
            SUM(CASE WHEN evaluation_status = 'Compliant' THEN 1 ELSE 0 END) AS compliant,
            COUNT(*) AS total
        FROM evaluations
    `;

    db.query(sql, (err, results) => {

        if (err) return res.status(500).json(err);

        const data = results[0];

        const rate = data.total === 0 
            ? 0 
            : (data.compliant / data.total) * 100;

        res.json({
            complianceRate: rate.toFixed(2)
        });

    });

};