const router = require('express').Router();
const blogRoute = require('./web/blog.route');
const userRoute = require('./web/user.route');

router.use('/', userRoute);
router.use('/blogs', blogRoute);

module.exports = router;
