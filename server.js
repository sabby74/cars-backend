require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT =process.env.PORT || 7070;
const serviceController = require('./controllers/serviceController');
const authController = require('./controllers/authController');
const scheduleController = require('./controllers/scheduleController');
const session = require("express-session")
const morgan = require('morgan');
const cors = require('cors');

app.use(session({ secret: 'randomkeyyyyyy', cookie: { maxAge: 3600000 }}))
app.use(express.static('public'));

app.use (express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


app.use('/schedule', scheduleController);
app.use('/service', serviceController);
app.use('/user', authController);

app.use(morgan('tiny'));


app.get('/', (req, res) => {
    res.send('cars app');
});





app.listen(PORT, () => console.log('Server running on port ' + PORT));