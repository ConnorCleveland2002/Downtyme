const router = require('express').Router();
const { User } = require('../../models');

//CRUD

router.get('/', async (req, res) => {
try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
} catch (err) {
    res.status(400).json(err);
}
});
// router.post((req, res) => {
// //create
// });
// router.put((req, res) => {
// //update
// });
// router.delete((req, res) => {
// //delete
// });

module.exports = router;