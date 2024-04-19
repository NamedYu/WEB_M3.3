'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.dropTable('Activos');
   await queryInterface.dropTable('ActivoTags');
   await queryInterface.dropTable('Tags');
  },

  async down (queryInterface, Sequelize) {
  }
};
