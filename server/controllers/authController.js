const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../models/userModel');

exports.register = async (req, res) => {
    try {
        const { full_name, email, password, phone, role_id } = req.body;

        User.findUserByEmail(email, async (err, results) => {
            if (err) return res.status(500).json(err);

            if (results.length > 0) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const userData = [
                full_name,
                email,
                hashedPassword,
                phone,
                role_id
            ];

            User.createUser(userData, (err) => {
                if (err) return res.status(500).json(err);

                return res.status(201).json({
                    message: 'User registered successfully'
                });
            });
        });

    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    User.findUserByEmail(email, async (err, results) => {
        if (err) return res.status(500).json(err);

        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = results[0];

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            {
                id: user.id,
                role_id: user.role_id,
                role_name: user.role_name
            },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        return res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                full_name: user.full_name,
                email: user.email,
                phone: user.phone,
                role_id: user.role_id,
                role_name: user.role_name
            }
        });
    });
};