'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
 async up(queryInterface, Sequelize) {
   await queryInterface.createTable('Tags', {
     tagId: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
     },
     descripcion:{
        allowNull: false,
        type: Sequelize.STRING
     },
     createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
     updatedAt: {
       allowNull: false,
       type: Sequelize.DATE
     }
   });
 },
 down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tags');
  } 
}
