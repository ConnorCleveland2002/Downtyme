var db = require('../../models');
const router = require('express').Router();



    router.get("/api/purchases", (req, res) => {
        db.Purchase.findAll({
            include: [db.google_book, db.songs]
        }).then(function (dbPurchase) {
            console.log('In .get /api/purchases - findAll()');
            console.log('req.body: ', req.body);
            console.log('dbPurchase: ', dbPurchase);
            res.json(dbPurchase);
        });
    });

    router.get("/api/purchases/:UserId", function (req, res) {
        db.Purchase.findAll({
            where: {
                userId: req.params.userId
            },
            include: [db.Book]
        }).then(function (dbPurchase) {
            console.log('In .get /api/purchases/:userId - findAll()');
            console.log('req.params.userId: ', req.params.userId);
            console.log('dbPurchase: ', dbPurchase);
            res.json(dbPurchase);
        });
    });

    router.post("/api/purchases", (req, res) => {
        db.Purchase.create({
            userId: req.body.userId,
            bookId: req.body.bookId,
            date: new Date()
        }).then(function (dbPurchase) {
            console.log('In .POST /api/purchases - create()');
            console.log('req.body: ', req.body);
            console.log('dbPurchase: ', dbPurchase);
          
            db.Purchase_Book.create({
                PurchaseId: dbPurchase.id,
                BbokId: req.body.bookId
            }).then(function (dbPurchase_Book) {
                console.log('In .POST /api/purchases - create() - Purchase_Book');
                console.log('req.body: ', req.body);
                console.log('dbPurchase_Book: ', dbPurchase_Book);
                res.json(dbPurchase_Book);
            });
        });
    });


    router.delete("/api/purchases/:UserId", (req, res) => {
        db.Purchase.destroy({
            where: {
                userId: req.params.userId
            }
        }).then(function (dbPurchase) {
            console.log('In .DELETE /api/purchases - destroy()');
            console.log('req.params.UserId: ', req.params.userId);
            console.log('dbPurchase: ', dbPurchase);
            res.json(dbPurchase);
        });
    });

    router.put("/api/purchases", (req, res) => {
        db.Purchase.update(
            req.body,
            {
                where: {
                    userId: req.body.userId
                }
            }).then(function (dbPurchase) {
                console.log('In .PUT /api/purchases - update()');
                console.log('req.body.UserId: ', req.body.userId);
                console.log('dbPurchase: ', dbPurchase);
                res.json(dbPurchase);
            });
    });

    module.exports = router;
