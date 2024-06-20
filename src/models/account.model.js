const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    status: {
        type: String,
        enum: ['activated', 'inactivated', 'deactivated'],
        default: 'inactivated',
    },
    loginToken: {
        type: String,
        default: null,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('accounts', AccountSchema);
