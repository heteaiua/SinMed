const Doctor = require("../../models/doctor");

const showAllDoctors = async (req, res, next) => {
  let doctors;
  try {
    doctors = await Doctor.find().exec();

    if (!doctors)
      return res.json({
        message: " No doctors found!",
      });
  } catch (err) {
    return res.json({ message: "Could not get doctors.", err: err });
  }
  res.json({
    message: "Doctors: ",
    doctors: doctors.map((doctor) => doctor.toObject({ getters: true })),
  });
};

module.exports = showAllDoctors;
