// const {
//   validationResult
// } = require('express-validator');

//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')
const Doctor = require("../../models/doctor");
const Specialization = require("../../models/specialization");

const createDoctor = async (req, res, next) => {
  // const errors = validationResult(req);

  // if (!errors.isEmpty()) {
  //   return res.json({
  //     message: 'Invalid input.'
  //   });
  // }

  const {
    idSpecialization,
    firstName,
    lastName,
    email,
    password,
    cnp,
    gender,
    age,
  } = req.body;

  let createdDoctor;
  try {

    const doctors = await Doctor.find().exec();

    const specializations = await Specialization.find().exec();
    const specialization = specializations.filter(s => {
        return s.id === idSpecialization;
    })
    if (specialization.length === 0){
        console.log(specialization)
        return res.json({
            message: " Invalid specialization!"
        });
      }
    

    const usedEmail = doctors.find((p) => p.email === email);
    const usedCNP = doctors.find((p) => p.cnp === cnp);
    console.log(usedEmail);
    console.log(usedCNP);
    
    // if (!specialization)
    // // se verifica daca cnp-ul introdus exista in baza de date
    // return res.json({
    //   message: " Invalid specialization! ",
    // });

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
      
    // if (password != confirm_password)
    // // se verifica daca cele 2 parole corespund
    // return res.json({
    //   message: "Passwords do not match! ",
    // });

    // let hashedPassword;
    // try {
    //   hashedPassword = await bcrypt.hash(password, 5) // criptarea parolei
    // } catch (err) {
    //   res.status(500).json({
    //     error: "Could not create user."
    //   })
    // }
 

 
    createdDoctor = new Doctor({
      idSpecialization,
      firstName,
      lastName,
      email,
      password,
      cnp,
      gender,
      age,
    });
    console.log(createdDoctor)
    await createdDoctor.save();
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
  res.json({
    message: "New doctor added!",
    doctor: createdDoctor,
    // token: token,
  });
};

module.exports = createDoctor;
