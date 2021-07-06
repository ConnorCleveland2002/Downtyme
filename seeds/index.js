// const seedGoogleBook = require('./googleBook-seeds');
// const seedUsers = require('./user-seeds');
const sequelize = require('../Config/connection')
const { User } = require('../Models')
const userData = require('./user.json')


const seedAll = async () => {
  await sequelize.sync({ force: true });
    const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
    });
   

    console.log('\n----- DATABASE SYNCED -----\n');
  
//   await seedUsers();
    // console.log('\n----- USERS SEEDED -----\n');

  // await seedGoogleBook();
  //   console.log('\n----- googleBook SEEDED -----\n');

  process.exit(0);
};

seedAll();