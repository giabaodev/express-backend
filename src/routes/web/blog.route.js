const express = require('express');
const router = express.Router();
const BlogController = require('../../controllers/web/blog.controller');

router.get('/', BlogController.getBlogs);
router.post('/', BlogController.createBlog);

module.exports = router;
