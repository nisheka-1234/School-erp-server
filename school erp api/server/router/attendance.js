const express = require("express");
const router = express.Router();

const {
  saveAttendance,
  getAttendance
} = require("../controllers/attendance/attendancecontroller");


router.post("/save", saveAttendance);

router.get("/get", getAttendance);

module.exports = router;