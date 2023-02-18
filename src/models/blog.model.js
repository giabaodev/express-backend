const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    blogTitle: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model('blogs', BlogSchema)