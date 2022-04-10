const express = require('express');

const createPatient = require('../controllers/patient-control/newPatient');
const getPatients = require('../controllers/patient-control/getAllPatients');

const router = express.Router();

router.post('/', createPatient);
router.get('/', getPatients);

module.exports = router;