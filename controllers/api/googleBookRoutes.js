const router = require('express').Router();
const { googleBook } = require('../../models');
const withAuth = require('../../utils/auth');


    router.get('/', (req, res) => {function getApi() {

      var bookUrl = 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyDtIDO7fZg0HMzaHAbrf8XjGXAx&q=search-terms&key';
    
      fetch(bookUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data)
        })
      }

      googleBook.findAll({})
        .then(bookData => res.json(bookData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });
    
    module.exports = router;
