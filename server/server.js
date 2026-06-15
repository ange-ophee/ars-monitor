const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const db = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');
const certificationRoutes = require('./routes/certificationRoutes');
const farmerRoutes = require('./routes/farmerRoutes');
const farmRoutes = require('./routes/farmRoutes');
const monitoringRoutes = require('./routes/monitoringRoutes');
const evaluationRoutes = require('./routes/evaluationRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const reportRoutes = require('./routes/reportRoutes');
const ruleRoutes = require('./routes/ruleRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const traceabilityRoutes = require('./routes/traceabilityRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/certifications', certificationRoutes);
app.use('/api/farmers', farmerRoutes);
app.use('/api/farms', farmRoutes);
app.use('/api/monitoring', monitoringRoutes);
app.use('/api/evaluations', evaluationRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/rules', ruleRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/traceability', traceabilityRoutes);

app.get('/', (req, res) => {
    res.send('ARS Monitor API Running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});