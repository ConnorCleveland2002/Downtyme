var db = require('../../models');
const router = require('express').Router();



  // GET route for getting all of the shoppingcarts
  router.get("/api/shoppingcarts", (req, res) => {
    db.Shoppingcart.findAll({
      include: [db.google_route, db.songs]
    }).then(function (dbShoppingcart) {
      console.log('In .get /api/shoppingcarts - findAll()');
      console.log('req.body: ', req.body);
      console.log('dbShoppingcart: ', dbShoppingcart);
      res.json(dbShoppingcart);
    });
  });

  router.get("/api/shoppingcart/:UserId", (req, res) => {
    db.Shoppingcart.findOne({
      where: {
        userId: req.params.userId
      },
      
    }).then(function (dbShoppingcart) {
      console.log('In .get /api/shoppingcarts - findOne()');
      console.log('req.params.UserId: ', req.params.userId);
      console.log('dbShoppingcart: ', dbShoppingcart);
      res.json(dbShoppingcart);
    });
  });

  
  router.post("/api/shoppingcarts", (req, res) => {
    db.Shoppingcart.create({
      userId: req.body.userId,
      bookId: req.body.bookId
    }).then(function (dbShoppingcart) {
      console.log('In .POST /api/shoppingcarts - create()');
      console.log('req.body: ', req.body);
      console.log('dbShoppingcart: ', dbShoppingcart);
      console.log('dbShoppingcart.id: ', dbShoppingcart.id);
      

      db.Shoppingcart_Book.create({
        ShoppingcartId: dbShoppingcart.id,
        bookId: req.body.BookId
      }).then(function (dbShoppingcart_Book) {
        console.log('In .POST /api/shoppingcarts - create() - Shoppingcart_Book');
        console.log('req.body: ', req.body);
        console.log('dbShoppingcart_Book: ', dbShoppingcart_Book);
        res.json(dbShoppingcart_Book);
      });
    });
  });


  
  router.delete("/api/shoppingcarts/:UserId", (req, res) => {
    db.Shoppingcart.destroy({
      where: {
        userId: req.params.userId
      }
    }).then(function (dbShoppingcart) {
      console.log('In .DELETE /api/shoppingcarts - destroy()');
      console.log('req.params.UserId: ', req.params.userId);
      console.log('dbShoppingcart: ', dbShoppingcart);
      res.json(dbShoppingcart);
    });
  });


  router.put("/api/shoppingcarts", function (req, res) {
    db.Shoppingcart.update(
      req.body,
      {
        where: {
          UserId: req.body.userId
        }
      }).then(function (dbShoppingcart) {
        console.log('In .PUT /api/shoppingcarts - update()');
        console.log('req.body.UserId: ', req.body.userId);
        console.log('dbShoppingcart: ', dbShoppingcart);
        res.json(dbShoppingcart);
      });
  });

  module.exports = router;
