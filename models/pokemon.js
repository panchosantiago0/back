const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Pokemon = sequelize.define('pokemon', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  attack: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  defense: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Pokemon;
