'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nfc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Nfc.init({
    team: DataTypes.STRING,
    standing: DataTypes.STRING,
    record: DataTypes.STRING,
    nextGame: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nfc',
  });
  return Nfc;
};