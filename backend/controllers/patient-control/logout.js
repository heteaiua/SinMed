const Patient = require('../../models/patient');
const logoutPatient = async (req, res, next) => {
    const patientID = req.params.uid;
    let patient;
    try {
        patient = await Patient.findById(patientID);
    } catch (err) {
        return res.status(500).json("Error! Could not leave. ")
    }
    patient.loggedIn = false;
    try {
        await patient.save();
    } catch (err) {
        return res.status(500).json("Could not log out! ")
    }
    return res.status(200).json({ message: "BYE!", user: patient.toObject({ getters: true }) })
}

module.exports = logoutPatient