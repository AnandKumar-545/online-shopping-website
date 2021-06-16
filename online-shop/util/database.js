const Sequelize = require('sequelize');

const sequelize = new Sequelize('online-shop', 'root', 'Anand@789', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
