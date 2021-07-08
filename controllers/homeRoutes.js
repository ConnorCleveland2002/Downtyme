const router = require('express').Router();
const sequelize = require('../Config/connection');
const { google_book, user, songs, movies, userBook } = require('../Models');


router.get('/home', async (req,res) => {
  res.render('homepage')
});

router.get('/books', async (req, res) => {
  try {
    const mediaOne = await google_book.findAll({
      include: [
        {
          model: user,
          attributes: ['name'],
        },
      ],
    });

    const dataOne = mediaOne.map((google_book) => google_book.get({ plain: true }));

    res.render('browse', { 
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

    const dataTwo = mediaTwo.map((songs) => songs.get({ plain: true }));

    res.render('browse', { 
      dataTwo, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/browse');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/browse');
    return;
  }

  res.render('signup');
});

router.get('/home', async (req,res) => {
  res.render('browse')
});
router.get('/home', async (req,res) => {
  res.render('cart')
});
router.get('/home', async (req,res) => {
  res.render('home')
});
    

module.exports = router;