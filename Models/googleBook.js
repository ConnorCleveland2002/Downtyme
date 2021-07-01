const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class googleBook extends Model {}

googleBook.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    authors: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categories: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    published_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    number_page: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
   },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'googleBook',
  }
);

module.exports = googleBook;