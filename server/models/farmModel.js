const db = require('../config/db');

const Farm = {

    create: (data, callback) => {
        const sql = `
            INSERT INTO farms 
            (farmer_id, farm_name, location, gps_coordinates, farm_size, production_capacity, status)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        db.query(sql, data, callback);
    },

    getAll: (callback) => {
        const sql = `
            SELECT * FROM farms
        `;
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = `
            SELECT * FROM farms WHERE id = ?
        `;
        db.query(sql, [id], callback);
    },

    update: (id, data, callback) => {
        const sql = `
            UPDATE farms 
            SET farm_name=?, location=?, gps_coordinates=?, farm_size=?, production_capacity=?, status=?
            WHERE id=?
        `;
        db.query(sql, [...data, id], callback);
    },

    delete: (id, callback) => {
        const sql = `
            DELETE FROM farms WHERE id=?
        `;
        db.query(sql, [id], callback);
    }

};

module.exports = Farm;