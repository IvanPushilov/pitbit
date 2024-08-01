'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Miners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      currency_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Currencies',
          key: 'id'
        }
      },
      algorithm_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Algorithms',
          key: 'id'
        }
      },
      modell_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Modells',
          key: 'id'
        }
      },
      brand_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Brands',
          key: 'id'
        }
      },
      subbrand_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'SubBrands',
          key: 'id'
        }
      },
      img: {
        type: Sequelize.TEXT
      },
      expense: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hashrate_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Hashrates',
          key: 'id'
        }
      },
      description: {
        type: Sequelize.TEXT,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Miners');
  }
};