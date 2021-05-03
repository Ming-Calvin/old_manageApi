'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classified extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Classified.init({
    name: DataTypes.STRING,
    level: DataTypes.STRING,
    effective: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Classified',
  });
  return Classified;
};