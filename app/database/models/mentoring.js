'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mentoring extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Mentoring.init({
    kelompok: DataTypes.STRING,
    jadwal: DataTypes.DATE,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mentoring',
  });
  return Mentoring;
};