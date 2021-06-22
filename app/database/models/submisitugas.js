'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubmisiTugas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SubmisiTugas.belongsTo(models.Tugas, { foreignKey: 'tugas'});
      SubmisiTugas.belongsTo(models.User, { foreignKey: 'pemilik'});
    }
  };
  SubmisiTugas.init({
    pemilik: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    },
    nama: DataTypes.STRING,
    path: DataTypes.STRING,
    tugas: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tugas'
      }
    }
  }, {
    sequelize,
    modelName: 'SubmisiTugas',
  });
  return SubmisiTugas;
};