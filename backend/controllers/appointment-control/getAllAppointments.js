const Appointment = require("../../models/appointment");

const showAllAppointments = async (req, res, next) => {
  let appointments;
  try {
    appointments = await Appointment.find().exec();

    if (!appointments)
      return res.json({
        message: " No appointmends found!",
      });
  } catch (err) {
    return res.status(500).json({ message: "Could not get appointments.", err: err });
  }
  res.json({
    message: "Appointments: ",
    appointments: appointments
  });
};

module.exports = showAllAppointments;
