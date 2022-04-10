const mongoose = require('mongoose');

const Doctor = new mongoose.Schema({
    idSpecialization: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required:true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cnp: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    rating: { type: Number, required: true },
    dateAdded: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Doctor', Doctor);