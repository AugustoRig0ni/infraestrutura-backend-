const { DataTypes, Model } = require('sequelize');
const sequelize = require ('../config/database');

const Equipament = sequelize.define('equipament', {

    name: { type: DataTypes.STRING, allowNull: false},
    type: { type: DataTypes.STRING, allowNull: false},
    brand: { type: DataTypes.STRING},
    model: { type: DataTypes.STRING},
    serialNumber: { type: DataTypes.STRING, unique: true},
    location: { type: DataTypes.STRING},
    status: { type: DataTypes.ENUM ('ativo', 'manutenção', 'reservado', 'inativo'), defaultValue: 'ativo' },
    acquisitionDate: { type: DataTypes.DATE },
    notes: { type: DataTypes.TEXT },
});

module.exports = Equipament;