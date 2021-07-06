<<<<<<< HEAD
const seedGoogleBook = require('./googleBook-seeds');
// const seedUsers = require('./user-seeds');
const seedMovies = require('./movie-seeds.json');
=======
const sequelize = require('../config/connection');
const { google_book } = require('../models');

>>>>>>> b996b5532cadba7c7957397f4b948bd681563973

const bookSeeds = require('./bookSeeds.json');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  await google_book.bulkCreate(bookSeeds, {
      individualHooks: true,
      returning: true,
    });
  
    console.log('\n----- DATABASE SYNCED -----\n');
  
    console.log('\n----- googleBook SEEDED -----\n');

  process.exit(0);
};

<<<<<<< HEAD
const seedAll = async () => {
  await sequelize.sync({ force: true});
    console.log('\n---- DATABASE SYNCED ----\n');
  
  await seedMovies();
    console.log('\n---- movieData SEEDED ----\n');
  process.exit(0);

};
seedAll();
=======
seedAll();






>>>>>>> b996b5532cadba7c7957397f4b948bd681563973
