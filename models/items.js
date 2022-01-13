'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    static associate(models) {
      
    }
  };
  Items.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Items',
    tableName: 'items'
  });
  return Items;
};