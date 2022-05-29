const Appointment = require("../../models/appointment");
const deleteAppointment = async (req, res, next) => {
  const appointmentID = req.params.aid;

  let appointment;
  try {
    appointment = await Appointment.findById(appointmentID);
  } catch (err) {
    return res.status(500).json("Deleting appointment failed! ");
  }

  try {
    await appointment.remove();
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Deleting appointment has failed! ", error: err });
  }
  return res
    .status(200)
    .json({ message: "Appointment card deleted.", appointment: appointment });
};

module.exports = deleteAppointment;
