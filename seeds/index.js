const sequelize = require('../config/connection');
const { google_book } = require('../models');


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

seedAll();






