const express = require("express");

const router = express.Router();

const student = require(
  "../controllers/home/studenthomecontroller"
);

const teacher = require(
  "../controllers/home/teacherhomecontroller"
);

router.get(
  "/student",
  student.studenthome
);

router.get(
  "/teacher",
  teacher.teacherhome
);

module.exports = router;