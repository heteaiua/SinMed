const mongoose = require("mongoose");

const Specialization = new mongoose.Schema({
  name: { type: String, required: true },
  details:{type: String},
  doctors:{type: Array, default:[]}
});

module.exports = mongoose.model('Specialization', Specialization);
