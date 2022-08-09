const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    static associate({Check}) {
      this.hasMany(Check, { foreignKey: 'tableId' });
    }
  }
  Table.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Table',
  });
  return Table;
};
