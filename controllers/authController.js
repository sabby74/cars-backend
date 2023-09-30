const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');



//INDUCES


    // INDEX DELETE UPDATE  CREATE   
    
    
    
    //SHOW

    router.get("/", async (req,res) =>{

        try{
            res.json(await User.find({}));
        }catch(error){
            res.status(400).json(error)
        }
    })

  


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
        res.json(' you are logged in')
      }else{
        res.send("incorrect password")
      }
   
    })
    }
    
  })

   //create a user
  router.post("/signup", async (req, res) => {
    console.log(req.body);
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


  // SHOW
router.get("/:id", async (req, res) => {
    try {
      res.json(await User.findById(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
  });



  // router.get('/login', (req, res) => {
  //   res.render('login');
  // });


  router.get('/signup', (req, res) => {
    res.render('auth/signup');
  });

  
  router.get('/logout', (req, res) => {
    req.session.destroy(err => {
      if (err) {
        // handle error
        return res.status(500).send('Failed to logout.');
      }
      // Clear the session cookie from the client-side
      res.clearCookie('connect.sid');  // 'connect.sid' is the default cookie name used by express-session
      return res.send('Logged out!');
    });
  });







module.exports = router;