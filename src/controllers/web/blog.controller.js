const BlogModel = require('../../models/blog.model');

exports.getBlogs = async (req, res) => {
    try {
        return res.status(200).json('OK');
    } catch (error) {
        console.log('Error at getBlogs:', error.message);
        return res.status(500).end('Internal Server Error');
    }
}

exports.createBlog = async (req, res) => {
    try {
        if (!req.body.blogTitle) res.status(400).end('Missing blogTitle');
        const result = await BlogModel.create(req.body);
        return res.status(201).json(result);
    } catch (error) {
        console.log('Error at createBlog:', error.message);
        return res.status(500).end('Internal Server Error');
    }
}