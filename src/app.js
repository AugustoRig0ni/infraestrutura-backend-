require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database.js');
const authRoutes = require ('./routes/authRoutes.js');
const equipmentRoutes = require('./routes/equipmentsRoutes.js');
const maintenanceRoutes = require('./routes/maintenanceRoutes.js');
const reportRoutes = require('./routes/reportRoutes.js');


const app = express ();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/equipment', equipmentRoutes);
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/reports', reportRoutes);




const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log (`Servidor rodando na porta ${PORT}`));
});