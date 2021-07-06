const seedGoogleBook = require('./googleBook-seeds');
// const seedUsers = require('./user-seeds');
const seedMovies = require('./movie-seeds.json');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
//   await seedUsers();
    // console.log('\n----- USERS SEEDED -----\n');

  await seedGoogleBook();
    console.log('\n----- googleBook SEEDED -----\n');

  process.exit(0);
};

const seedAll = async () => {
  await sequelize.sync({ force: true});
    console.log('\n---- DATABASE SYNCED ----\n');
  
  await seedMovies();
    console.log('\n---- movieData SEEDED ----\n');
  process.exit(0);

};
seedAll();