const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URI);

const Banner = sequelize.define('Banner', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timer: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isVisible: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Banner;
