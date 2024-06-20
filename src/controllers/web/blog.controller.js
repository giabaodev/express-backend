const BlogModel = require('../../models/blog.model');

exports.getBlogs = async (req, res) => {
    try {
        const result = await BlogModel.find(req.query);
        return res.status(200).json(result);
    } catch (error) {
        console.log('Error at getBlogs:', error.message);
        return res.status(500).end('Internal Server Error');
    }
};

exports.getBlogById = async (req, res) => {
    try {
        const result = await BlogModel.findById(req.params.id);
        if (!result) res.status(404).end('Blog is not found.');
        return res.status(200).json(result);
    } catch (error) {
        console.log('Error at getBlogById:', error.message);
        return res.status(500).end('Internal Server Error');
    }
};

exports.createBlog = async (req, res) => {
    try {
        if (!req.body.title) res.status(400).end('Missing title.');
        const result = await BlogModel.create(req.body);
        return res.status(201).json(result);
    } catch (error) {
        console.log('Error at createBlog:', error.message);
        return res.status(500).end('Internal Server Error');
    }
};

exports.updateBlogById = async (req, res) => {
    try {
        if (!req.body.id) res.status(400).end('Missing id.');
        const result = await BlogModel.updateOne({ _id: req.body.id }, req.body, { new: true });
        return res.status(200).json(result);
    } catch (error) {
        console.log('Error at updateBlogById:', error.message);
        return res.status(500).end('Internal Server Error');
    }
};

exports.deleteBlogs = async (req, res) => {
    try {
        if (!req.body.ids) res.status(400).end('Missing ids.');
        const result = await BlogModel.deleteMany({ _id: req.body.ids });
        return result && res.status(200).json('Delete successfully');
    } catch (error) {
        console.log('Error at deleteBlogs:', error.message);
        return res.status(500).end('Internal Server Error');
    }
};
