const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({
            message: 'Access denied. No token provided.'
        });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: 'Invalid token format.'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = {
            id: decoded.id,
            role_id: decoded.role_id,
            role_name: decoded.role_name
        };

        next();

    } catch (error) {
        return res.status(403).json({
            message: 'Invalid or expired token.'
        });
    }
};