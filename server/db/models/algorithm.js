'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Algorithm extends Model {
    static associate({Modell}) {
      this.hasMany(Modell, {foreignKey: 'algorithm_id'})
    }
  }
  Algorithm.init({
    algo: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
  },
   {
    sequelize,
    modelName: 'Algorithm',
  });
  return Algorithm;
};