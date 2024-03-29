'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailMentoring extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DetailMentoring.hasMany(models.Mentoring, { foreignKey: 'detail'});
    }
  };
  DetailMentoring.init({
    day: DataTypes.INTEGER,
    judul: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    start: DataTypes.DATE,
    end: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'DetailMentoring',
  });
  return DetailMentoring;
};