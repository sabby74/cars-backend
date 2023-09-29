const mongoose = require("../db/connection");
const ScheduleSchema = new mongoose.Schema ({
    userId: { ref : 'User', type: mongoose.Schema.Types.ObjectId},
    services: [{ ref:'Service', type:mongoose.Schema.Types.ObjectId}],
    isReadyForService: Boolean,
    },
    {timestamps : true},
    )
const Schedule = mongoose.model("Schedule", ScheduleSchema);
module.exports = Schedule;