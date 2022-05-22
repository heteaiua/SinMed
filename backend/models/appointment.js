const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const Appointment = new mongoose.Schema({
  idPatient: { type: String, required: true },
  idDoctor: { type: String, required: true },
  dateStart: { type: String, required: false },
  dateEnd: { type: String, required: false },
  dateCreated: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Appointment", Appointment);
