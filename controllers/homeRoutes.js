const router = require('express').Router();
const sequelize = require('../config/connection');
const { google_book, User, songs } = require('../models');


router.get('/home', async (req,res) => {
  res.render('homepage')
});

router.get('/books', async (req, res) => {
  try {
    const mediaOne = await google_book.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const dataOne = mediaOne.map((media) => media.get({ plain: true }));

    res.render('homepage', { 
      dataOne, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/songs', async (req, res) => {
  try {
    const mediaTwo = await songs.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const dataTwo = mediaTwo.map((media) => media.get({ plain: true }));

    res.render('homepage', { 
      dataTwo, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/', (req, res) => {
    if (req.user) {
      res.redirect('/home');
    } else {
      res.render('signup', {js: ['signup.js']});
    }
  });

  router.get('/login', (req, res) => {
    if (req.user) {
      res.redirect('/home');
    } else {
      res.render('login', {js: ['login.js']});
    }
  });

  router.get('/home', (req, res) => {
    if (req.user)
    res.render('home', {js: ['home.js']});
  });
  router.get('/browse', (req, res) => {
    if (req.user)
    res.render('browse', {js: ['media.js']});
  });
  
  router.get('/save', (req, res) => {
    if (req.user)
    res.render('save', {js: ['saveMedia.js']});
  });
    

module.exports = router;