module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    username: {
      type: Sequelize.STRING
    },
    hashedPassword: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.STRING
    }
  });
  return User;
}