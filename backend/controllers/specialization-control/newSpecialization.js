const Specialization = require("../../models/specialization");

const createSpecialization = async (req, res, next) => {
  const { name } = req.body;

  let createdSpecialization;
  try {
    const specializations = await Specialization.find().exec();
    const usedName = specializations.find((s) => s.name === name);
    if (usedName) {
      return res.json({
        message: " Name already used! ",
      });
    }

    createdSpecialization = new Specialization({
      name,
    });

    console.log(createdSpecialization);

    await createdSpecialization.save();
  } catch (err) {
    res.status(500).json("Registration has failed!");
  }
  res.status(201).json({
    message: "New specialization added!",
    specialization: createdSpecialization,
    // token: token,
  });
};

module.exports = createSpecialization;
