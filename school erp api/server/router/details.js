const express = require("express");
const router = express.Router();

const studentdetailscontroller =
require("../controllers/details/studentdetailscontroller");

router.get("/student", studentdetailscontroller.studentdetails);
router.post("/savestudent", studentdetailscontroller.savestudent);

module.exports = router;