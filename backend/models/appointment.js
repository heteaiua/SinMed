const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const Appointment = new mongoose.Schema({
  idPatient: { type: String, required: true },
  idDoctor: { type: String, required: true },
  dateStart: { type: Date, required: true },
  dateEnd: { type: Date, required: true },
  dateCreated: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Appointment", Appointment);
