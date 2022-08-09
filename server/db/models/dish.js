const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dish extends Model {
    static associate({Check}) {
      this.hasMany(Check, { foreignKey: 'dishId' });
    }
  }
  Dish.init({
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dish',
  });
  return Dish;
};
