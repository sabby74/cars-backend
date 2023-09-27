//bring in mongoose thats connected to our MongoDatabase
const mongoose = require("mongoose");



//setup user schema
const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
},
{ timestamps: true },
);

//set up model using schema

const User = mongoose.model("User", userSchema);

module.exports = User;