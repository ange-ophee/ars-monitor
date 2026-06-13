const db = require("../config/db");

/**
 * REPORT MODEL
 * Handles all database operations related to reports
 */

const Report = {

    /**
     * CREATE A NEW REPORT
     * Inserts a new report into the database
     */
    create: (data, callback) => {
        const sql = `
            INSERT INTO reports (generated_by, report_type, report_content)
            VALUES (?, ?, ?)
        `;
        db.query(sql, data, callback);
    },


    /**
     * GET ALL REPORTS
     * Retrieves all reports ordered from newest to oldest
     */
    getAll: (callback) => {
        const sql = `
            SELECT * 
            FROM reports 
            ORDER BY id DESC
        `;
        db.query(sql, callback);
    },


    /**
     * GET SINGLE REPORT BY ID
     * Fetches one report based on its ID
     */
    getById: (id, callback) => {
        const sql = `
            SELECT * 
            FROM reports 
            WHERE id = ?
        `;
        db.query(sql, [id], callback);
    },


    /**
     * UPDATE REPORT
     * Updates report_type and report_content only (safer design)
     * We avoid changing generated_by to preserve audit integrity
     */
    update: (id, data, callback) => {
        const sql = `
            UPDATE reports 
            SET report_type = ?, report_content = ?
            WHERE id = ?
        `;
        db.query(sql, [...data, id], callback);
    },


    /**
     * DELETE REPORT
     * Permanently removes a report from the database
     */
    delete: (id, callback) => {
        const sql = `
            DELETE FROM reports 
            WHERE id = ?
        `;
        db.query(sql, [id], callback);
    }

};

module.exports = Report;