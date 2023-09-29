const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

//INDUCES


 // INDEX DELETE UPDATE  CREATE   SHOW

//we dont to do full induces here because react will handle forms for us

//index route
// router.get("/", async (req, res) => {
//   try {
//     const newServices = await Service.find({});
//     res.status(200).json(newServices);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// })

// INDEX
router.get("/", async (req, res) => {
  try {
    res.json(await Service.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
});


//create a service
router.post("/", async (req, res) => {
  try {
    const createdService = await Service.create(req.body);
    res.status(200).json(createdService);
  } catch (error) {
    res.status(400).json(error);
  }
});

//delete a service
router.delete("/:id", async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    res.status(400).json(error);
  }
});

//update a service
router.put("/:id", async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
