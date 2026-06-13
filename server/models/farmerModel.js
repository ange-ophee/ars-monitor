const db = require('../config/db');

const Farmer = {

    create: (data, callback) => {
        const sql = `
            INSERT INTO farmers (user_id, gender, cooperative_name, region, village)
            VALUES (?, ?, ?, ?, ?)
        `;
        db.query(sql, data, callback);
    },

    getAll: (callback) => {
        const sql = `
            SELECT * FROM farmers
        `;
        db.query(sql, callback);
    },

    getById: (id, callback) => {
        const sql = `
            SELECT * FROM farmers WHERE id = ?
        `;
        db.query(sql, [id], callback);
    },

    update: (id, data, callback) => {
        const sql = `
            UPDATE farmers 
            SET gender=?, cooperative_name=?, region=?, village=?
            WHERE id=?
        `;
        db.query(sql, [...data, id], callback);
    },

    delete: (id, callback) => {
        const sql = `
            DELETE FROM farmers WHERE id=?
        `;
        db.query(sql, [id], callback);
    }

};

module.exports = Farmer;