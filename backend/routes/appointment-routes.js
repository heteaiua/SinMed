const express = require("express");
const showAllAppointmentsByUserID = require("../controllers/appointment-control/getAppointmentsByUserID");

const showAllAppointments = require("../controllers/appointment-control/getAppointmentsByUserID");
const createAppointment = require("../controllers/appointment-control/newAppointment");

const router = express.Router();

router.post("/:pid/:did", createAppointment);
router.get("/", showAllAppointments);
router.get("/:idPatient", showAllAppointmentsByUserID);


module.exports = router;
