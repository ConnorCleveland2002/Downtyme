// const seedGoogleBook = require('./googleBook-seeds');
// const seedUsers = require('./user-seeds');
const seedMovies = require('./movies-seeds.json');
const sequelize = require('../config/connection');
const { google_book, user, movies, songs } = require('../models');



const bookSeeds = require('./bookSeeds.json');
const userSeeds = require('./userSeeds.json');
const moviesSeeds = require('./moviesSeeds.json');
const musicSeeds = require('./musicSeeds.json');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  await google_book.bulkCreate(bookSeeds, {
      individualHooks: true,
      returning: true,
    });
  
   await user.bulkCreate(userSeeds);
   await movies.bulkCreate(moviesSeeds);
   await songs.bulkCreate(musicSeeds);
  
    console.log('\n----- DATABASE SYNCED -----\n');
  
    console.log('\n----- googleBook user and movies SEEDED -----\n');

  process.exit(0);
};

seedAll();