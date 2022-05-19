const express = require("express");

const createDoctor = require("../controllers/doctor-control/newDoctor");
const getAllDoctors = require("../controllers/doctor-control/getAllDoctors");
const getDoctorById = require("../controllers/doctor-control/getDoctorById");
const getDoctorBySpecializationId = require("../controllers/doctor-control/getDoctorBySpecializationId");
const reviewDoctor = require("../controllers/doctor-control/reviewDoctor");

const router = express.Router();

router.post("/", createDoctor);
router.get("/", getAllDoctors);
router.get("/:did", getDoctorById); //nu se foloseste
router.get("/specializations/:sid", getDoctorBySpecializationId);
router.post("/rating/:did", reviewDoctor);

module.exports = router;
