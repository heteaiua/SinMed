const Doctor = require("../../models/doctor");

const getDoctorById = async (req, res, next) => {
  const doctorId = req.params.did;
  let doctor;
  try {
    doctor = await Doctor.findById(doctorId);
    if (!doctor)
      return res.json({
        message: " No doctor found!",
      });
  } catch (err) {
    return res.json({ message: "Could not get doctor.", err: err });
  }
  res.json({
    message: "Doctor: ",
    doctor,
  });
};

module.exports = getDoctorById;
