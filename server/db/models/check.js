'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Check extends Model {
    static associate({Table, Food}) {
      this.hasMany(Table, { foreignKey: 'tableId' });
      this.hasMany(Food, { foreignKey: 'foodId' });
    }
  }
  Check.init({
    tableId: DataTypes.INTEGER,
    foodId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Check',
  });
  return Check;
};
