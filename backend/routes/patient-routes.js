const express = require('express');

const createPatient = require('../controllers/patient-control/newPatient');
const loginPatient = require('../controllers/patient-control/login');
const getPatients = require('../controllers/patient-control/getAllPatients');

const router = express.Router();

router.post('/', createPatient);
router.post('/login', loginPatient);
router.get('/', getPatients);

module.exports = router;