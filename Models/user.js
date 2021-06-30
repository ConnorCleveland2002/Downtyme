const { Model, DataTypes } = require('sequelize');
const sequelize = require('./config/connection.js');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },
            
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        album_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'album',
                key: 'id',
            },
        },
        movie_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'movie',
                key: 'id',
            }
        },
        book_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'book',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);


module.exports = User;