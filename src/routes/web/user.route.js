const router = require('express').Router();
const UserController = require('../../controllers/web/user.controller');

router.post('/login', UserController.userLogin);
router.post('/signup', UserController.userSignUp);

module.exports = router;
