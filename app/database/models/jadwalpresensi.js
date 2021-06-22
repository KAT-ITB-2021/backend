'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JadwalPresensi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JadwalPresensi.hasMany(models.PresensiPeserta, {foreignKey: 'jadwal'});
    }
  };
  JadwalPresensi.init({
    judul: DataTypes.STRING,
    start: DataTypes.DATE,
    end: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'JadwalPresensi',
  });
  return JadwalPresensi;
};