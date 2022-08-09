const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Check extends Model {
    static associate({Table, Dish}) {
      this.belongsTo(Table, { foreignKey: 'tableId' });
      this.belongsTo(Dish, { foreignKey: 'dishId' });
    }
  }
  Check.init({
    tableId: DataTypes.INTEGER,
    dishId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Check',
  });
  return Check;
};
