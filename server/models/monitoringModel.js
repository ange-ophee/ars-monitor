const db = require('../config/db');

const Monitoring = {

    create: (data, callback) => {
        const sql = `
            INSERT INTO monitoring_records 
            (farm_id, auditor_id, inspection_date, observations, disease_presence, environmental_conditions, production_status, monitoring_status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        db.query(sql, data, callback);
    },

    getAll: (callback) => {
        const sql = `
            SELECT * FROM monitoring_records
        `;
        db.query(sql, callback);
    },

    getByFarmId: (farmId, callback) => {
        const sql = `
            SELECT * FROM monitoring_records WHERE farm_id = ?
        `;
        db.query(sql, [farmId], callback);
    },

    getById: (id, callback) => {
        const sql = `
            SELECT * FROM monitoring_records WHERE id = ?
        `;
        db.query(sql, [id], callback);
    },

    update: (id, data, callback) => {
        const sql = `
            UPDATE monitoring_records 
            SET inspection_date=?, observations=?, disease_presence=?, environmental_conditions=?, production_status=?, monitoring_status=?
            WHERE id=?
        `;
        db.query(sql, [...data, id], callback);
    },

    delete: (id, callback) => {
        const sql = `
            DELETE FROM monitoring_records WHERE id=?
        `;
        db.query(sql, [id], callback);
    }

};

module.exports = Monitoring;