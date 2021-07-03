const User = require('./user');
const googleBook = require('./googleBook');
const Song = require('./songs');

User.hasMany(googleBook, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

googleBook.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, googleBook, Song };

// module.exports = { User };
