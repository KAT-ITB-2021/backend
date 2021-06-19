'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PresensiPeserta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PresensiPeserta.belongsTo(models.Users, {foreignKey: 'user'});
      PresensiPeserta.belongsTo(models.JadwalPresensis, {foreignKey: 'jadwal'});
    }
  };
  PresensiPeserta.init({
    hadir: DataTypes.BOOLEAN,
    user: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    },
    jadwal: {
      type: DataTypes.INTEGER,
      references: {
        model: 'JadwalPresensis'
      }
    }
  }, {
    sequelize,
    modelName: 'PresensiPeserta',
  });
  return PresensiPeserta;
};