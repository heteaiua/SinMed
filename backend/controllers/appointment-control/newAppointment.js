// const {
//   validationResult
// } = require('express-validator');

//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')
const Doctor = require("../../models/doctor");
const Patient = require("../../models/patient");
const Appointment = require("../../models/appointment");

const createAppointment = async (req, res, next) => {
  const { idPatient, idDoctor, dateStart, dateEnd, roomNr } = req.body;

  let createdAppointment;
  try {
    const doctors = await Doctor.find().exec();
    const patients = await Patient.find().exec();

    const patient = patients.filter((s) => {
      return p.id === idPatient;
    });
    if (patient.length === 0) {
      console.log(patient);
      return res.json({
        message: " Invalid patient!",
      });
    }

    const doctor = doctors.filter((s) => {
      return d.id === idDoctor;
    });
    if (doctor.length === 0) {
      console.log(doctor);
      return res.json({
        message: " Invalid doctor!",
      });
    }

    if (dateStart > dateEnd)
      return res.json({
        message: " Invalid dates",
      });

    const appointments = await Appointment.find().exec();
    if (
      appointments.every(
        (a) =>
          (dateStart > a.dateStart && dateStart < a.dateEnd) ||
          (dateEnd > a.dateStart && dateEnd < a.dateEnd)
      )
    )
      return res.json({
        message: " Doctor is busy!",
      });

    createdAppointment = new Appointment({
      idPatient,
      idDoctor,
      dateStart,
      dateEnd,
      roomNr,
    });
    console.log(createdAppointment);
    await createdAppointment.save();
  } catch (err) {
    res.status(500).json("Registration has failed!");
  }

  res.json({
    message: "New appointment added!",
    appointment: createdAppointment,
    // token: token,
  });
};

module.exports = createAppointment;
