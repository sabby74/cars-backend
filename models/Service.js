const mongoose = require("../db/connection");

const ServiceSchema = new mongoose.Schema(
  {
    carName: String,
    carModel  : String,
    oilChange: Boolean,
    tireRotation: Boolean,
    airFilter: Boolean,
    breakCheck: Boolean,
    batteryCheck: Boolean,
    brakePadChange: Boolean,
    alignment: Boolean,
    transmissionOilChange: Boolean,
    cabinAirFilterChange: Boolean,
    engineAirFilter: Boolean,
    wiperBladesChange: Boolean,
    mileage: Number,
    coolantChange: Boolean,
  },
  { timestamps: true }
);
const Service = mongoose.model("Service", ServiceSchema);

module.exports = Service;
