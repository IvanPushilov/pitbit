'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Miner extends Model {
  
    static associate({Comment, Currency, Algorithm, Modell, Brand, SubBrand, Hashrate}) {
      this.hasMany(Comment, {foreignKey: 'miner_id'})
      this.belongsTo(Currency, {foreignKey: 'currency_id'})
      this.belongsTo(Hashrate, {foreignKey: 'hashrate_id'})
      this.belongsTo(Algorithm, {foreignKey: 'algorithm_id'})
      this.belongsTo(Modell, {foreignKey: 'modell_id'})
      this.belongsTo(Brand, {foreignKey: 'brand_id'})
      this.belongsTo(SubBrand, {foreignKey: 'subbrand_id'})
    }
  }
  Miner.init({
    currency_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Currencies',
        key: 'id'
      }
    },
    algorithm_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Algorithms',
        key: 'id'
      }
    },
    modell_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Modells',
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
    subbrand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'SubBrands',
        key: 'id'
      }
    },
    img: {
      type: DataTypes.TEXT
    },
    expense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hashrate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Hashrates',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Miner',
  });
  return Miner;
};