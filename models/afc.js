'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Afc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Afc.init({
    team: DataTypes.STRING,
    standing: DataTypes.STRING,
    record: DataTypes.STRING,
    nextGame: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Afc',
  });
  return Afc;
};