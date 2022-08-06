'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    static associate({Check}) {
      this.belongsTo(Check, { foreignKey: 'tableId' });
    }
  }
  Table.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Table',
  });
  return Table;
};
