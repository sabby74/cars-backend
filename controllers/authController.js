const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');



//INDUCES


    // INDEX DELETE UPDATE  CREATE   SHOW

    //index route
router.get("/", async (req, res) => {
    try {
      const newUsers = await User.find({});
      res.status(200).json(newUsers);
    } catch (error) {
      res.status(400).json(error);
    }
});


//login route
router.post("/login",async (req,res) =>{
    console.log(req.body);
    let userToLogin = await User.findOne({username: req.body.username })
    //just to compare the passwords entered with req.body
    if(userToLogin){
        bcrypt.compare(req.body.password, userToLogin.password,(err,result) => {

      
      if(result){
        req.session.userId = userToLogin._id;
        req.session.name = userToLogin.name
        res.redirect('/service')
      }else{
        res.send("incorrect password")
      }
       // Generate a token
  const token = jwt.sign({ userId: user._id }, 'hhshhshhs', { expiresIn: '1h' });

  res.json({ token });
    })
    }
    
  })

   //create a user
  router.post("/", async (req, res) => {
    // console.log(req.body);
    //hashing a passoword with bcrypt before User.create()
    if (req.body.username && req.body.password) {
      let plainTextPassword = req.body.password;
      bcrypt.hash(plainTextPassword, 10, async (err, hashedPassword) => {
        req.body.password = hashedPassword;
        let newUser = await User.create(req.body);
  
        res.send(newUser);
      });
    }
  });



  router.get('/login', (req, res) => {
    res.re('login');
  });


  router.get('/signup', (req, res) => {
    res.render('signup');
  });

  router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
  });







module.exports = router;