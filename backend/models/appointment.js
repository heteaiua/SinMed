const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Appointment = new mongoose.Schema({
    idPatient: { type: ObjectId, required: true },
    idDoctor: { type: ObjectId, required:true },
    dateStart: { type: Date, required: true },
    dateEnd: { type: Date, required: true },
    roomNr: { type: Number, required: true },
    dateCreated:{ type: Date, default: Date.now()}

    
});

module.exports = mongoose.model('Appointment', Appointment);