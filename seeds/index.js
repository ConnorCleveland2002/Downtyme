// const seedGoogleBook = require('./googleBook-seeds');
// const seedMovies = require('./movie-seeds.json');
const sequelize = require('../config/connection.js');
const seedUsers = require('./user.json');
const google_book = require('./bookSeeds.json');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  await bookSeeds.bulkCreate(bookSeeds, {
      individualHooks: true,
      returning: true,
    });
  await seedUsers.bulkCreate(userSeed, {
    individualHooks: true,
    returning: true,
  });
    console.log('\n----- DATABASE SYNCED -----\n');
  
    console.log('\n----- googleBook SEEDED -----\n');

  process.exit(0);
};

seedAll();
