const express = require("express");

const createDoctor = require("../controllers/doctor-control/newDoctor");
const getDoctors = require("../controllers/doctor-control/getAllDoctors");
const getDoctorById = require("../controllers/doctor-control/getDoctorById");
const reviewDoctor = require("../controllers/doctor-control/reviewDoctor");

const router = express.Router();

router.post("/", createDoctor);
router.get("/", getDoctors);
router.get("/:did", getDoctorById);
router.patch("/rating/:did", reviewDoctor);

module.exports = router;
