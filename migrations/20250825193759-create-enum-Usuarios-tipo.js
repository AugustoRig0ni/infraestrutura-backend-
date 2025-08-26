'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      CREATE TYPE enum_Usuarios_tipo AS ENUM ('Admin', 'usuario');
    `);
    console.log('Rodando a migration do ENUM')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      DROP TYPE enum_Usuarios_tipo;
    `);
  }
};
