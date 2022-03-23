// const {
//   validationResult
// } = require('express-validator');

//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')
const Patient = require("../../models/patient");

const createPatient = async (req, res, next) => {
  // const errors = validationResult(req);

  // if (!errors.isEmpty()) {
  //   return res.json({
  //     message: 'Invalid input.'
  //   });
  // }

  const {
    firstName,
    lastName,
    email,
    password,
    cnp,
    bloodType,
    gender,
    age,
    confirm_password,
  } = req.body;

  let createdPatient;
  try {
    const patients = await Patient.find().exec();
    const VALID = patients.find((p) => p.email === email);
    console.log(VALID)
    if (VALID || password !== confirm_password)
      // se verifica daca email-ul introdus exista in baza de date si daca corespunde cu parola
      return res.json({
        message: "Email already used or the passwords do not match!",
      });

    // let hashedPassword;
    // try {
    //   hashedPassword = await bcrypt.hash(password, 5) // criptarea parolei
    // } catch (err) {
    //   res.status(500).json({
    //     error: "Could not create user."
    //   })
    // }

    createdPatient = new Patient({
      firstName,
      lastName,
      email,
      password,
      cnp,
      bloodType,
      gender,
      age,
      confirm_password,
    });
    await createdPatient.save();
  } catch (err) {
    res.status(500).json("Registration has failed!");
  }

  // let token;
  // try {
  //   token = jwt.sign(
  //     { userID: createdPatient.id, name: createdPatient.name },
  //     "super_secret",
  //     { expiresIn: "1h" }
  //   );
  // } catch (err) {
  //   return res.status(500).json("Failed registration!");
  // }
  res.status(201).json({
    message: "New user added!",
    user: createdPatient,
    // token: token,
  });
};

module.exports = createPatient;
