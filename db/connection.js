require("dotenv").config();
const mongoose = require("mongoose");
const {DATABASE_URL} = process.env;


mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  });
  
  mongoose.connection
  .on("open", () => console.log("Now connected to MongoDB!"))
  .on("close", () => console.log("MongoDB  is disconnected!!!!"))
  .on("error", (error) => console.log(error));

  module.exports = mongoose;