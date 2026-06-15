const monitoringModel = require("../models/monitoringModel");
const assignmentModel = require("../models/assignmentModel");

exports.getMonitoringRecords =
async (req, res) => {

  try {

    const records =
      await monitoringModel
      .getAllMonitoringRecords();

    res.status(200).json(records);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getMonitoringRecordById =
async (req, res) => {

  try {

    const record =
      await monitoringModel
      .getMonitoringRecordById(
        req.params.id
      );

    if (!record) {
      return res.status(404).json({
        message:
          "Monitoring record not found"
      });
    }

    res.status(200).json(record);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.createMonitoringRecord =
async (req, res) => {

  try {

    const { farm_id } = req.body;

    const assigned =
      await assignmentModel
      .isFarmAssignedToAuditor(
        farm_id,
        req.user.id
      );

    if (!assigned) {
      return res.status(403).json({
        message:
          "You are not assigned to this farm"
      });
    }

    const result =
      await monitoringModel
      .createMonitoringRecord({
        ...req.body,
        auditor_id: req.user.id
      });

      if (
        req.body.monitoring_status ===
        "Completed"
        ) {

        await assignmentModel
            .updateAssignmentStatus(
            req.body.farm_id,
            req.user.id,
            "completed"
            );

        }
        else {

        await assignmentModel
            .updateAssignmentStatus(
            req.body.farm_id,
            req.user.id,
            "active"
            );

        }

    res.status(201).json({
      message:
        "Monitoring record created",
      monitoringId:
        result.insertId
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.updateMonitoringRecord =
async (req, res) => {

  try {

    const existingRecord =
      await monitoringModel
      .getMonitoringRecordById(
        req.params.id
      );

    if (!existingRecord) {
      return res.status(404).json({
        message:
          "Monitoring record not found"
      });
    }

    await monitoringModel
      .updateMonitoringRecord(
        req.params.id,
        req.body
      );

    const status =
      req.body.monitoring_status ||
      existingRecord.monitoring_status;

    if (status === "Completed") {

      await assignmentModel
        .updateAssignmentStatus(
          existingRecord.farm_id,
          existingRecord.auditor_id,
          "completed"
        );

    } else {

      await assignmentModel
        .updateAssignmentStatus(
          existingRecord.farm_id,
          existingRecord.auditor_id,
          "active"
        );

    }

    res.status(200).json({
      message:
        "Monitoring record updated successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.deleteMonitoringRecord =
async (req, res) => {

  try {

    await monitoringModel
      .deleteMonitoringRecord(
        req.params.id
      );

    res.status(200).json({
      message:
        "Monitoring record deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getMyMonitoringRecords =
async (req, res) => {

  try {

    const records =
      await monitoringModel
      .getRecordsByAuditor(
        req.user.id
      );

    res.status(200).json(records);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};