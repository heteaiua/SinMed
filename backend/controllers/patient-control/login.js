//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')

//linie noua ca sa pun iar pe git hehe
const Patient = require("../../models/patient");

const loginPatient = async (req, res, next) => {
  //functie care logheaza un utilizator existent cerand un email si o parola

  const { email, password } = req.body;

  let existingPatient;
  try {
    existingPatient = await Patient.findOne({
      email: email,
    }); //transformarea continutului din baza de date intr-un array de obiecte

    // if (!existingPatient) {
    // // se verifica daca email-ul introdus exista in baza de date si daca corespunde cu parola
    //   return res.status(401).json("No account found");
    // } //mesaj de eroare , nu se mai executa functia in continuare
  } catch (error) {
    return res.status(500).json("Login has failed!");
  }

  try {
    if (!existingPatient || existingPatient.password !== password)
      // se verifica daca email-ul introdus exista in baza de date si daca corespunde cu parola
      return res.status(401).json({
        message: "Wrong password! Invalid credentials ",
      }); //mesaj de eroare , nu se mai executa functia in continuare
  } catch (error) {
    return res.status(401).json({
      error,
    });
  }

  // if (existingPatient.loggedIn)
  //   return res.status(401).json("User already logged in!")

  // let isValidPassword = false;
  // try {
  //   isValidPassword = await bcrypt.compare(password, existingPatient.password)
  // } catch (error) {
  //   return res.status(500).json('Login failed, please try again later.')
  // }

  // if (!isValidPassword) {
  //   return res.status(401).json('Wrong password.')
  // }

  // let token;
  // try {
  //   token = jwt.sign({ userID: existingPatient.id, name: existingPatient.name }, 'super_secret', { expiresIn: '5h' });
  // } catch (err) {
  //   return res.status(500).json("Login failed!")
  // }
  // existingPatient.loggedIn = true;

  // existingPatient.loggedIn = true;
  // await existingPatient.save();

  // line 60,61 ??
  // incearca fara

  res.json({
    message: "Welcome back, " + existingPatient.firstName + "!",
    patient: existingPatient.toObject({ getters: true }),
    // token: token
  }); // mesaj in caz de succes
};

module.exports = loginPatient;
