const Patient = require("../../models/patient");

const showAllPatients = async (req, res, next) => {
  let patients;
  try {
    patients = await Patient.find().exec();

    if (!patients)
      return res.json({
        message: " No patients found!",
      });
  } catch (err) {
    return res.json({ message: "Could not get patients.", err: err });
  }
  res.json({
    message: "Patients: ",
    patients: patients,
  });
};

module.exports = showAllPatients;
