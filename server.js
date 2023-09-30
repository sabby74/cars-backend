require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT =process.env.PORT || 7070;
const serviceController = require('./controllers/serviceController');
const authController = require('./controllers/authController');
const session = require("express-session")
const morgan = require('morgan');
const cors = require('cors');

app.use(session({ secret: 'randomkeyyyyyy', cookie: { maxAge: 3600000 }}))





app.use(express.static('public'));

app.use (express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));


app.use('/service', serviceController);
app.use('/user', authController);

app.use((req, res, next) => {
    console.log(req.session);
    if (!req.session.userId) {
      res.redirect("/login");
      return;
    }
  
    next();
  });




app.get('/', (req, res) => {
    res.send('cars app');
});







app.listen(PORT, () => console.log('Server running on port ' + PORT));