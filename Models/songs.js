const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/connection');

class songs extends Model {}

songs.init(
  {
    
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    
    },
    
    song_title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    artist: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    album: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    song_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'songs',
  }
);

module.exports = songs;
