const express = require('express');
const router = express.Router();
const BlogController = require('../../controllers/web/blog.controller');

router.get('/', BlogController.getBlogs);
router.get('/:id', BlogController.getBlogById);
router.post('/', BlogController.createBlog);
router.put('/', BlogController.updateBlogById);
router.delete('/', BlogController.deleteBlogs);

module.exports = router;
