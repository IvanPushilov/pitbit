'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubBrand extends Model {

    static associate({Brand, Modell}) {
      this.belongsTo(Brand, {foreignKey: 'brand_id'})
      this.hasMany(Modell, {foreignKey: 'subbrand_id'})
    }
  }
  SubBrand.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Brands',
        key: 'id'
      },
    },    
  }, {
    sequelize,
    modelName: 'SubBrand',
  });
  return SubBrand;
};