const Sequelize = require('sequelize');
require('dotenv').config();

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
      {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
    );
  }
  
module.exports = sequelize;