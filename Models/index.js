const User = require('./user');
const googleBook = require('./googleBook');

User.hasMany(GoogleBook, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

googleBook.belongsTo(user, {
  foreignKey: 'user_id'
});

module.exports = { user, googleBook };