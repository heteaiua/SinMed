const express = require("express");

const createDoctor = require("../controllers/doctor-control/newDoctor");
const getDoctors = require("../controllers/doctor-control/getAllDoctors");

const router = express.Router();

router.post("/", createDoctor);
router.get("/", getDoctors);

module.exports = router;
