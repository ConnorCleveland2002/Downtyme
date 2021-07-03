const User = require('./user');
const google_book = require('./google_book');

User.hasMany(google_book, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

google_book.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, google_book };

// module.exports = { User };
