const Doctor = require("../../models/doctor");

const reviewDoctor = async (req, res, next) => {
  const doctorId = req.params.did;
  const { rating } = req.body;
  let doctor;
  try {
    doctor = await Doctor.findById(doctorId);
    if (!doctor)
      return res.status(500).json({
        message: " No doctor found!",
      });
    console.log(rating + "aa");
    doctor.rating.push(rating);
    await doctor.save();
  } catch (err) {
    return res.json({ message: "Could not leave rating doctor.", err: err });
  }
  res.status(200).json({
    message: "Doctor rated: ",
    doctor,
  });
};

module.exports = reviewDoctor;
