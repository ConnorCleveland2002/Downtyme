const router = require('express').Router();
const userRoutes = require('./userRoutes');
const googleBookRoutes = require('./googleBookRoutes');

router.use('/users', userRoutes);
router.use('/googleBooks', googleBookRoutes);

module.exports = router;
=======
const userRoutes = require('./userRoute');

router.use('/users', userRoutes);

module.exports = router;
