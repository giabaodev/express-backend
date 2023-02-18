const mongoose = require('mongoose');
const url = process.env.MONGO_URL;
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
mongoose.set('strictQuery', true);

const connection = mongoose.connect(url, {
    useNewUrlParser: true,
});

connection.then(() => {
    console.log('✔ Database connected!');
}).catch((error) => {
    console.error('✘ MongoDB failed to connect:', error.message);
})

module.exports = connection;