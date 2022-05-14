const Appointment = require("../../models/appointment");

const showAllAppointmentsByUserID = async (req, res, next) => {
  const idPatient = req.params.idPatient;
  let appointments;
  try {
    appointments = await Appointment.find().exec();

    if (!appointments)
      return res.json({
        message: " No appointmends found!",
      });

    let userApponintments = appointments.filter((a) => {
      return a.idPatient === idPatient;
    });
    if (userApponintments.length === 0) {
      console.log(userApponintments);
      return res.json({
        message: " User has no appointments!",
      });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Could not get appointments.", err: err });
  }
  res.json({
    message: "Appointments: ",
    userAppointments: appointments,
  });
};

module.exports = showAllAppointmentsByUserID;
