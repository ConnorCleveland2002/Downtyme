const User = require('./user');
const googleBook = require('./googleBook');

User.hasMany(googleBook, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

googleBook.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, googleBook };

module.exports = { User };
