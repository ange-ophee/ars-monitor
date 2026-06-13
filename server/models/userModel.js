const db = require('../config/db');

const User = {

    createUser: (data, callback) => {
        const sql = `
            INSERT INTO users 
            (full_name, email, password, phone, role_id)
            VALUES (?, ?, ?, ?, ?)
        `;

        db.query(sql, data, callback);
    },

    findUserByEmail: (email, callback) => {
        const sql = `
            SELECT * FROM users
            WHERE email = ?
        `;

        db.query(sql, [email], callback);
    }

};

module.exports = User;