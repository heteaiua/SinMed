// const {
//   validationResult
// } = require('express-validator');

//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')
const Doctor = require("../../models/doctor");
const Patient = require("../../models/patient");
const Appointment = require("../../models/appointment");

const createAppointment = async (req, res, next) => {
  const idPatient = req.params.pid;
  const idDoctor = req.params.did;

  const { dateStart, dateEnd } = req.body;

  let createdAppointment;
  try {
    const doctors = await Doctor.find().exec();
    const patients = await Patient.find().exec();

    let patient = patients.filter((p) => {
      return p.id === idPatient;
    });
    if (patient.length === 0) {
      console.log(patient);
      return res.json({
        message: "Invalid patient!",
      });
    }

    const doctor = doctors.filter((d) => {
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
    });
    console.log(createdAppointment);
    await createdAppointment.save();
  } catch (err) {
    res.status(500).json(err+"     Registration has failed!");
  }

  try {
    const patients = await Patient.find().exec();

    let patient = patients.filter((p) => {
      return p.id === idPatient;
    });
    console.log(patient);
    patient[0].appointments.push(createdAppointment.id);
    console.log(patient);
    await patient[0].save();
  } catch (err) {
    res.status(500).json("Id push has failed!");
  }

  res.json({
    message: "New appointment added!",
    appointment: createdAppointment,
    // token: token,
  });
};

module.exports = createAppointment;
