const express = require('express');
const sequelize = require('./config/database');
const authroutes = require ('./routes/authoroutes');
const equipmentRoutes = require('../routes/equipmentsRoutes');
const maintenanceroutes = require('../routes/maintenanceroutes');
const reportrouts = require('../routes/reportroutes');

const app = express ();
app.use(express.json());

app.use('api/auth', authroutes);
app.use('api/equipment', Equipament);
app.use('api/maintenance', Maintenance);
app.use('api/reports', reportrouts);


const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log (`Servidor rodando na porta ${PORT}`));
});