const express = require("express");
const showAllAppointmentsByUserID = require("../controllers/appointment-control/getAppointmentsByUserID");

const showAllAppointments = require("../controllers/appointment-control/getAppointmentsByUserID");
const createAppointment = require("../controllers/appointment-control/newAppointment");
const deleteAppointment = require("../controllers/appointment-control/deleteAppointment");

const router = express.Router();

router.post("/:pid/:did", createAppointment);
router.get("/", showAllAppointments);
router.get("/:idPatient", showAllAppointmentsByUserID);
router.delete("/:aid", deleteAppointment);


module.exports = router;
