const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

//INDUCES


 // INDEX DELETE UPDATE  CREATE   SHOW

//we dont to do full induces here because react will handle forms for us



// INDEX
router.get("/", async (req, res) => {
  try {
    res.json(await Service.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
});




// DELETE
router.delete("/:id", async (req, res) => {
  try {
    res.json(await Service.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});


// UPDATE
router.put("/:id", async (req, res) => {
  console.log(req.body);
  try {
    res.json(
      await Service.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});



// CREATE
router.post("/", async (req, res) => {
  try {
    res.json(await Service.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});



// SHOW
router.get("/:id", async (req, res) => {
  try {
    res.json(await Service.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});





module.exports = router;
