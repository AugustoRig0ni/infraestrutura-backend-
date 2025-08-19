const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Equipment = require('./equipment'); 

const Maintenance = sequelize.define('Maintenance', {
  equipmentId: { type: DataTypes.INTEGER, allowNull: false },
  date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  technician: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT } 
});

Equipment.hasMany(Maintenance, { foreignKey: 'equipmentId' });
Maintenance.belongsTo(Equipment, { foreignKey: 'equipmentId' });

module.exports = Maintenance;
