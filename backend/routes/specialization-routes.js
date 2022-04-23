const express = require("express");

const createSpecialization = require("../controllers/specialization-control/newSpecialization");
const getSpecializations = require("../controllers/specialization-control/getAllSpecializations");

const router = express.Router();

router.post("/", createSpecialization);
router.get("/", getSpecializations);

module.exports = router;
