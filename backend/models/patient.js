const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const Patient = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  cnp: { type: String, required: true },
  appointments: { type: Array, default: [] },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  loggedIn: { type: Boolean, required: true, default: false },
  dateAdded: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Patient", Patient);
