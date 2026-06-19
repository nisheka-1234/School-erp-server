const express = require("express");

const router = express.Router();

const {
  studentlogin,
} = require(
  "../controllers/login/studentlogincontroller"
);

const {
  teacherlogin,
} = require(
  "../controllers/login/teacherlogincontroller"
);

const {
  studentlogout,
  teacherlogout,
} = require(
  "../controllers/login/logoutcontroller"
);



router.post(
  "/student",
  studentlogin
);


router.post(
  "/teacher",
  teacherlogin
);



router.post(
  "/student/logout",
  studentlogout
);



router.post(
  "/teacher/logout",
  teacherlogout
);

module.exports = router;