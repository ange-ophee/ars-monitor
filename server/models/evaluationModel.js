const db = require('../config/db');

const Evaluation = {

    create: (data, callback) => {
        const sql = `
            INSERT INTO evaluations
            (farm_id, evaluator_id, evaluation_date, compliance_score, evaluation_status, recommendations, corrective_actions)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        db.query(sql, data, callback);
    },

    getAll: (callback) => {
        const sql = `
            SELECT * FROM evaluations
        `;
        db.query(sql, callback);
    },

    getByFarmId: (farmId, callback) => {
        const sql = `
            SELECT * FROM evaluations WHERE farm_id = ?
        `;
        db.query(sql, [farmId], callback);
    },

    getById: (id, callback) => {
        const sql = `
            SELECT * FROM evaluations WHERE id = ?
        `;
        db.query(sql, [id], callback);
    },

    update: (id, data, callback) => {
        const sql = `
            UPDATE evaluations 
            SET evaluation_date=?, compliance_score=?, evaluation_status=?, recommendations=?, corrective_actions=?
            WHERE id=?
        `;
        db.query(sql, [...data, id], callback);
    },

    delete: (id, callback) => {
        const sql = `
            DELETE FROM evaluations WHERE id=?
        `;
        db.query(sql, [id], callback);
    }

};

module.exports = Evaluation;