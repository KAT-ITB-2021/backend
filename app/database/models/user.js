'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    nama: DataTypes.STRING,
    nim: DataTypes.STRING(8),
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING.BINARY,
    salt: DataTypes.STRING.BINARY,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};