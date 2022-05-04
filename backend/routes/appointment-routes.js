const express = require("express");

const createAppointment = require("../controllers/appointment-control/newAppointment");


const router = express.Router();

router.post("/:pid/:did", createAppointment);

module.exports = router;
