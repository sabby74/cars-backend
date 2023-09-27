const express = require('express');
const router = express.Router();

const Schedule = require('../models/Schedule');

//get all schedules index route
router.get('/', async (req, res) => {
    try {
        const allSchedules = await Schedule.find({});
        res.status(200).json(allSchedules);
    } catch (error) {
        res.status(400).json(error);
    }
})

//create a schedule
router.post('/', async (req, res) => {
    try {
        const newSchedule = await Schedule.create(req.body);
        res.status(200).json(newSchedule);
    } catch (error) {
        res.status(400).json(error);
    }
})

//delete a schedule
router.delete('/:id', async (req, res) => {
    try {
        const deletedSchedule = await Schedule.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedSchedule);
    } catch (error) {
        res.status(400).json(error);
    }
})

//update a schedule
router.put('/:id', async (req, res) => {
    try {
        const updatedSchedule = await Schedule.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedSchedule);
    } catch (error) {
        res.status(400).json(error);
    }
})






module.exports = router;