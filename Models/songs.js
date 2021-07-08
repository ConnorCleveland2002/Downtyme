const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/connection');

class Song extends Model {}

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
