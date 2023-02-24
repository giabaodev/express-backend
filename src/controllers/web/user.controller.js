const bcrypt = require('bcrypt');
const AccountModel = require('../../models/account.model');

exports.userLogin = async (req, res) => {
    try {
        if (!req.body.username) return res.status(400).end('Missing username.');
        if (!req.body.password) return res.status(400).end('Missing password.');
        return res.status(200).json('OK');
    } catch (error) {
        console.log('Error at userLogin:', error.message);
        return res.status(500).end('Internal Server Error');
    }
};

exports.userSignUp = async (req, res) => {
    try {
        if (!req.body.username) return res.status(400).end('Missing username.');
        const findUser = await AccountModel.findOne({ username: req.body.username });
        if (findUser) return res.status(409).end('Username already existed.');
        if (!req.body.password) return res.status(400).end('Missing password.');
        let { username, password, phone, email } = req.body;
        password = bcrypt.hashSync(password, 10, function (err, hash) {
            if (err) {
                console.log('Error when hash password:', err);
                throw new Error(err);
            }
        });
        const newAccount = new AccountModel({
            username,
            password,
            phone,
            email,
        });
        const result = await newAccount.save();
        return res.status(201).json(result);
    } catch (error) {
        console.log('Error at userSignUp:', error.message);
        return res.status(500).end('Internal Server Error');
    }
};
