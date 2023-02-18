const router = require('express').Router();
const blogsRoute = require('./web/blog.route')

router.use('/blogs', blogsRoute);

module.exports = router;
