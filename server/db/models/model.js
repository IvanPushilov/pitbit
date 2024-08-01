'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Modell extends Model {
    static associate({SubBrand, Miner, Brand}) {
      this.belongsTo(SubBrand, {foreignKey: 'subbrand_id'})
      this.belongsTo(Brand, {foreignKey: 'brand_id'})
      this.hasMany(Miner, {foreignKey: 'modell_id'})
    }
  }
  Model.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subbrand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'SubBrands',
        key: 'id'
      }
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Brands',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Modell',
  });
  return Modell;
};