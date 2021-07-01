const router = require('express').Router();
const userRoutes = require('./userRoutes');
const googleBookRoutes = require('./googleBookRoutes');

router.use('/users', userRoutes);
router.use('/googleBooks', googleBookRoutes);

module.exports = router;

router.use('/users', userRoutes);

module.exports = router;
