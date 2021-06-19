'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PresensiPeserta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hadir: {
        type: Sequelize.BOOLEAN
      },
      user: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users'
        }
      },
      jadwal: {
        type: Sequelize.INTEGER,
        references: {
          model: 'JadwalPresensis'
        }
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PresensiPeserta');
  }
};