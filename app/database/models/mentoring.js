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
      Mentoring.belongsTo(models.DetailMentoring, {foreignKey: 'detail'});
    }
  };
  Mentoring.init({
    kelompok: DataTypes.STRING,
    link: DataTypes.STRING,
    detail: {
      type: DataTypes.INTEGER,
      references: {
        model: 'DetailMentorings'
      }
    }
  }, {
    sequelize,
    modelName: 'Mentoring',
  });
  return Mentoring;
};