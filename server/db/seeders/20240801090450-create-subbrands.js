'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 const subbrandsData = [
  {
    name: 'Antminer',
    createdAt: new Date(),
    updatedAt: new Date(),
    brand_id: 1
  },
  {
    name: 'Whatsminer',
    createdAt: new Date(),
    updatedAt: new Date(),
    brand_id: 2
  }
 ]
 const subbrands = subbrandsData.map((subbrand) => ({
   ...subbrand,
   createdAt: new Date(),
   updatedAt: new Date(),
 }))
 await queryInterface.bulkInsert("SubBrands", subbrands);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("SubBrands")
  }
};
