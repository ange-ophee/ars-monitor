const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');

exports.register = async (req, res) => {

    try {

        const {
            full_name,
            email,
            password,
            phone,
            role_id
        } = req.body;

        User.findUserByEmail(email, async (err, results) => {

            if (err) {
                return res.status(500).json(err);
            }

            if (results.length > 0) {
                return res.status(400).json({
                    message: 'User already exists'
                });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const userData = [
                full_name,
                email,
                hashedPassword,
                phone,
                role_id
            ];

            User.createUser(userData, (err, result) => {

                if (err) {
                    return res.status(500).json(err);
                }

                res.status(201).json({
                    message: 'User registered successfully'
                });

            });

        });

    } catch (error) {

        res.status(500).json(error);

    }

};

exports.login = (req, res) => {

    const { email, password } = req.body;

    User.findUserByEmail(email, async (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        const user = results[0];

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid credentials'
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                role_id: user.role_id
            },
            'secretkey',
            {
                expiresIn: '1d'
            }
        );

        res.status(200).json({
            message: 'Login successful',
            token
        });

    });

};