const router = require('express').Router();
const userRoutes = require('./userRoutes');
const googleBookRoutes = require('./googleBookRoutes');
const songRoutes = require('./songRoutes');
const shoppingcartsRoutes = require('./shoppingcartsRoutes');
const purchaseRoutes = require('./purchaseRoutes');

router.use('/users', userRoutes);
router.use('/googleBooks', googleBookRoutes);
router.use('/songs', songRoutes);
router.use('/shoppingscart', shoppingcartsRoutes);
router.use('/purchases', purchaseRoutes);


module.exports = router;
