const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/connection');

class userBook extends Model {}

userBook.init(
  {
    
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'google_book',
          key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
    }
    },
},

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userBook'
  }

);

module.exports = userBook;