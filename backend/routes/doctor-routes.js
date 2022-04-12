const express = require('express');

const createDoctor = require('../controllers/doctor-control/newDoctor');
//const getDoctors = require('../controllers/patient-control/getAllPatients'); not ready

const router = express.Router();

router.post('/', createDoctor);
//router.get('/', getPatients);

module.exports = router;