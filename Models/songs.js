const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

Song.init(
  {
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
  { sequelize }
);

module.exports = Song;
