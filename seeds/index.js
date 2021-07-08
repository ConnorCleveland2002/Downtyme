// const seedGoogleBook = require('./googleBook-seeds');
// const seedUsers = require('./user-seeds');
const seedMovies = require('./movies-seeds.json');
const sequelize = require('../config/connection');
<<<<<<< HEAD
const { google_book, user, movies, songs } = require('../models');



const bookSeeds = require('./bookSeeds.json');
const userSeeds = require('./userSeeds.json');
const moviesSeeds = require('./moviesSeeds.json');
const musicSeeds = require('./musicSeeds.json');

=======
const { google_book, Song } = require('../models');


const bookSeeds = require('./bookSeeds.json');
const musicSeeds = require("./music-seeds.json");
>>>>>>> 1b5dba0ec25bcd2ff365159598a8c07460937f37

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await google_book.bulkCreate(bookSeeds, {
      individualHooks: true,
      returning: true,
    });
<<<<<<< HEAD
  
   await user.bulkCreate(userSeeds);
   await movies.bulkCreate(moviesSeeds);
   await songs.bulkCreate(musicSeeds);
  
=======
  await Song.bulkCreate(musicSeeds, {
    individualHooks: true,
    returning: true,
  });
  // await seedMovies();
  console.log("\n---- movieData SEEDED ----\n");
>>>>>>> 1b5dba0ec25bcd2ff365159598a8c07460937f37
    console.log('\n----- DATABASE SYNCED -----\n');
  
    console.log('\n----- googleBook user and movies SEEDED -----\n');

  process.exit(0);
};

seedAll();