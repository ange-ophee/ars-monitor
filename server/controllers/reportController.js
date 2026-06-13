const Report = require("../models/reportModel");
const { createNotificationLogic } = require("../services/notificationService");

/**
 * CREATE REPORT
 */
exports.createReport = async (req, res) => {

    try {

        const {
            generated_by,
            report_type,
            report_content
        } = req.body;

        Report.create(
            [generated_by, report_type, report_content],
            async (err, result) => {

                if (err) {
                    return res.status(500).json(err);
                }

                try {

                    await createNotificationLogic({
                        user_id: generated_by,
                        message: `A new ${report_type} report has been generated`,
                        notification_type: "report"
                    });

                } catch (notificationError) {
                    console.log(notificationError);
                }

                res.status(201).json({
                    message: "Report created successfully",
                    reportId: result.insertId
                });

            }
        );

    } catch (error) {

        res.status(500).json(error);

    }

};


/**
 * GET ALL REPORTS
 */
exports.getAllReports = (req, res) => {

    Report.getAll((err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(results);

    });

};


/**
 * GET REPORT BY ID
 */
exports.getReportById = (req, res) => {

    Report.getById(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (!result.length) {
            return res.status(404).json({
                message: "Report not found"
            });
        }

        res.status(200).json(result[0]);

    });

};


/**
 * UPDATE REPORT
 */
exports.updateReport = (req, res) => {

    const {
        report_type,
        report_content
    } = req.body;

    Report.update(
        req.params.id,
        [report_type, report_content],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.status(200).json({
                message: "Report updated successfully"
            });

        }
    );

};


/**
 * DELETE REPORT
 */
exports.deleteReport = (req, res) => {

    Report.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json({
            message: "Report deleted successfully"
        });

    });

};