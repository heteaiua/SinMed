const express = require('express');

const createSpecialization = require('../controllers/specialization-control/newSpecialization');
//const getDoctors = require('../controllers/patient-control/getAllPatients'); not ready

const router = express.Router();

router.post('/', createSpecialization);
//router.get('/', getPatients);

module.exports = router;