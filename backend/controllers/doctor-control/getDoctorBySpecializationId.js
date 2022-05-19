const Doctor = require("../../models/doctor");

const getDoctorBySpecializationId = async (req, res, next) => {
  const specializationId = req.params.sid;

  let doctor;

  try {
    doctor = await Doctor.find({ idSpecialization: specializationId });
  } catch (err) {
    return res.json({ message: "Could not get doctor.", err: err });
  }
  if (!doctor) {
    return res.json({
      message: "No doctor found for this specialization.",
    });
  }
  res.json({
    doctors: doctor.map((doctor) => doctor.toObject({ getters: true })),
  });
};

module.exports = getDoctorBySpecializationId;
