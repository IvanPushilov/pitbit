'use strict';

const subbrand = require('../models/subbrand');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   const minersData = [
     {
      currency_id: 1,
      algorithm_id: 1,
      brand_id: 1,
      modell_id: 1,
      subbrand_id: 1,
      img:  'https://medialeaks.ru/wp-content/uploads/2018/09/na-glavnuyu.jpg',
      expense: 4000,
      price: 300000,
      hashrate_id: 1,
      description: 'Bitmain miner',
     }
   ]
   const miners = minersData.map((miner) => ({
     ...miner,
     createdAt: new Date(),
     updatedAt: new Date(),
   }))
   await queryInterface.bulkInsert("Miners", miners);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete("Miners")
  }
};
