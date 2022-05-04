const express = require('express');

const createPatient = require('../controllers/patient-control/newPatient');
const loginPatient = require('../controllers/patient-control/login');
const logoutPatient = require('../controllers/patient-control/logout');
const getPatients = require('../controllers/patient-control/getAllPatients');

const router = express.Router();

router.post('/', createPatient);
router.post('/login', loginPatient);
router.patch('/logout/:uid', logoutPatient);
router.get('/', getPatients);

module.exports = router;