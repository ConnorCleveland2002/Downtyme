const user = require('./user');
const google_book = require('./google_book');
const userBook = require('./userBook');
const movies = require('./movies');
const songs = require('./songs');

user.hasMany(userBook, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

userBook.belongsTo(user, {
  foreignKey: 'user_id'
});


user.hasMany(google_book, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

google_book.belongsTo(user, {
  foreignKey: 'user_id'
});

user.hasMany(movies, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

movies.belongsTo(user, {
  foreignKey: 'user_id'
});

user.hasMany(songs, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

songs.belongsTo(user, {
  foreignKey: 'user_id'
});


module.exports = { user, google_book, userBook, movies, songs };

