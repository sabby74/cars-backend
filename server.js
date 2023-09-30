require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 7070;
const serviceController = require("./controllers/serviceController");
const authController = require("./controllers/authController");
const session = require("express-session");
const morgan = require("morgan");
const cors = require("cors");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: "https://carsapp-pgj8.onrender.com" }));


app.use(
  session({
    secret: "random",
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true, secure: false, maxAge: 1000 * 60 * 60 * 24 * 7 },
  })
);
app.use(morgan("tiny"));

app.use("/user", authController);

app.use((req, res, next) => {
  console.log(req.session.userId);
  if (!req.session.userId) {
    res.send("please login");
    return;
  }

  next();
});

app.use("/service", serviceController);

app.get("/", (req, res) => {
  res.send("cars app");
});

app.get("/test", (req, res) => {
  res.send("test");
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
