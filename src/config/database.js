const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('infraestrutura', 'infraestrutura', '05182025', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432, 
  logging: false 
});

module.exports = sequelize;
