const express = require('express');

const createPatient = require('../controllers/patient-control/newPatient');

const router = express.Router();

router.post('/', createPatient);

module.exports = router;