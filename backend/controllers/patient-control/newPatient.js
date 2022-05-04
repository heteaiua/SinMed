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

  // console.log("body     : ", req.body);

  const {
    firstName,
    lastName,
    email,
    password,
    cnp,
    bloodType,
    gender,
    age,
    passwordConfirmation,
  } = req.body;

  // console.log("FName: ", firstName);

  let createdPatient;
  try {
    const patients = await Patient.find().exec();
    const usedEmail = patients.find((p) => p.email === email);
    const usedCNP = patients.find((p) => p.cnp === cnp);
    if (usedCNP)
      // se verifica daca cnp-ul introdus exista in baza de date
      return res.json({
        message: " CNP already used! ",
      });

    if (usedEmail)
      // se verifica daca email-ul introdus exista in baza de date
      return res.json({
        message: "Email already used! ",
      });
      
    if (password !== passwordConfirmation)
    // se verifica daca cele 2 parole corespund
    return res.json({
      message: "Passwords do not match! ",
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
      passwordConfirmation,
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
    patient: createdPatient,
    // token: token,
  });
};

module.exports = createPatient;
