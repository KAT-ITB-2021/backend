'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Webinar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Webinar.init({
    ytid: DataTypes.STRING,
    start: DataTypes.DATE,
    end: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Webinar',
  });
  return Webinar;
};