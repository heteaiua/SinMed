const Doctor = require("../../models/doctor");

const getAllDoctors = async (req, res, next) => {
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

<<<<<<< Updated upstream
  // doctors.forEach((doctor) => {
  //   let media = 0;
  //   doctor.rating.forEach((rating) => {
  //     media += rating;
  //   });
  //   media = media / doctor.rating.length;
  //   doctor.rating = media;
  // });
=======
  doctors.forEach((doctor) => {
    let media = 0;
    doctor.rating.forEach((rating) => {
      if(rating !== null && rating !== "")
        media += parseInt(rating);
    });
    media = media / doctor.rating.length;
    doctor.rating = media;
  });
>>>>>>> Stashed changes

  res.json({
    message: "Doctors: ",
    doctors: doctors,
  });
};

module.exports = getAllDoctors;
