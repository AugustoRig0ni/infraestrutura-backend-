const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Equipment = sequelize ('./equipment');

const Maintenance = sequelize.define ('Maintenance', {
    equipamentId: { type: DataTypes.INTEGER, allowNull: false},
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    technician: { type: DataTypes.STRING },
    descripition: { type: DataTypes.TEXT },
})

Equipment.hasMany(Maintenance, { ForeignKey: 'equipmentId' });
Maintenance.belongsTo(equipment, { ForeignKey: 'equipmentId'});

module.exports = Maintenance;