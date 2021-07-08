const user = require('./user');
const google_book = require('./google_book');
const userBook = require('./userBook');
// const Song = require('./songs');


user.hasMany(userBook, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

userBook.belongsTo(user, {
  foreignKey: 'userId'
});


user.hasMany(google_book, {
  foreignKey: 'bookId',
  onDelete: 'CASCADE'
});

google_book.belongsTo(user, {
  foreignKey: 'bookId'
});


module.exports = { user, google_book, userBook };

