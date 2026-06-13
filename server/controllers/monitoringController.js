const Monitoring = require('../models/monitoringModel');
const { createNotificationLogic } = require("../services/notificationService");

// CREATE MONITORING RECORD
exports.createMonitoring = (req, res) => {

    const {
        farm_id,
        auditor_id,
        inspection_date,
        observations,
        disease_presence,
        environmental_conditions,
        production_status,
        monitoring_status
    } = req.body;

    Monitoring.create(
        [farm_id, auditor_id, inspection_date, observations, disease_presence, environmental_conditions, production_status, monitoring_status],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.status(201).json({
                message: "Monitoring record created successfully",
                monitoringId: result.insertId
            });

        }
    );

    await createNotificationLogic({
        user_id: farmerUserId,
        message: `New monitoring completed on your farm "${farmName}"`,
        notification_type: "monitoring"
    });

};

// GET ALL MONITORING RECORDS
exports.getAllMonitoring = (req, res) => {

    Monitoring.getAll((err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(results);

    });

};

// GET BY FARM
exports.getByFarm = (req, res) => {

    const farmId = req.params.farmId;

    Monitoring.getByFarmId(farmId, (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(results);

    });

};

// GET BY ID
exports.getById = (req, res) => {

    const id = req.params.id;

    Monitoring.getById(id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(result[0]);

    });

};

// UPDATE
exports.updateMonitoring = (req, res) => {

    const id = req.params.id;

    const {
        inspection_date,
        observations,
        disease_presence,
        environmental_conditions,
        production_status,
        monitoring_status
    } = req.body;

    Monitoring.update(
        id,
        [inspection_date, observations, disease_presence, environmental_conditions, production_status, monitoring_status],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Monitoring record updated successfully"
            });

        }
    );

};

// DELETE
exports.deleteMonitoring = (req, res) => {

    const id = req.params.id;

    Monitoring.delete(id, (err) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Monitoring record deleted successfully"
        });

    });

};