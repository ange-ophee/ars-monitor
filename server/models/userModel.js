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
            SELECT
                users.*,
                roles.role_name
            FROM users
            INNER JOIN roles
                ON users.role_id = roles.id
            WHERE users.email = ?
        `;

        db.query(sql, [email], callback);

    }

};

module.exports = User;