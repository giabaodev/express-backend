require('dotenv').config();
require('./config/database.config');
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.listen(PORT).on('error', (err) => {
    console.log('✘ Application failed to start');
    console.log('Error: ', err.message);
    process.exit(0);
}).on('listening', () => {
    console.log('✔ Application started on PORT:', PORT);
})

//API ROUTES
const webRoutes = require('./src/routes/webRoutes');
// const appRoutes = require('./src/routes/appRoutes');


app.use('/api/web', webRoutes);
// app.use('/api/app', appRoutes);
app.use(express.static(path.join(__dirname, 'public')));
