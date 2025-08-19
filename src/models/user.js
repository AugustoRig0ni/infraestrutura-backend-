const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },

        
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    tipo: {
        type: DataTypes.ENUM('Admin', 'usuario'),
        defaultValue: 'usuario',
    },

});

module.exports = Usuario;



