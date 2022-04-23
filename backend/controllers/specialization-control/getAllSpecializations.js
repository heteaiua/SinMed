const Specialization = require("../../models/specialization");

const showAllSpecializations = async (req, res, next) => {
  let specializations;
  try {
    specializations = await Specialization.find().exec();

    if (!specializations)
      return res.json({
        message: " No specializations found!",
      });
  } catch (err) {
    return res.json({ message: "Could not get specializations.", err: err });
  }
  res.json({
    message: "Specializations: ",
    specializations: specializations,
  });
};

module.exports = showAllSpecializations;
