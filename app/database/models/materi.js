'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Materi.hasMany(models.File, { foreignKey: 'materi' });
    }
  };
  Materi.init({
    bagian: DataTypes.STRING,
    judul: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    embed: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Materi',
  });
  return Materi;
};