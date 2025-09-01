const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const User = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    tipo: {
        type: DataTypes.ENUM('Admin', 'usuario'),
        defaultValue: 'usuario',
    },

}, {
    tableName: 'usuarios', 
    timestamps: false
});

module.exports = User;
