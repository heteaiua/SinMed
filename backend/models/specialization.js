const mongoose = require("mongoose");

const Specialization = new mongoose.Schema({
  name: { type: String, required: true }
});

module.exports = mongoose.model('Specialization', Specialization);
