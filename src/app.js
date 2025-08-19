const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require ('./routes/authRoutes');
const equipmentRoutes = require('./routes/equipmentsRoutes.js');
const maintenanceRoutes = require('./routes/maintenanceRoutes');
const reportRouts = require('./routes/reportRoutes');

const app = express ();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/equipment', equipmentRoutes);
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/reports', reportRouts);


const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log (`Servidor rodando na porta ${PORT}`));
});