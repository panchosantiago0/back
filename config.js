// config.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('pokemonbd', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', 
});

module.exports = sequelize;
