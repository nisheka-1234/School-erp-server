const express = require("express");

const router = express.Router();

const studentcontroller = require(
  "../controllers/studentlogin/studentloginroutecontroller"
);

router.post(
  "/login",
  studentcontroller.loginstudent
);

module.exports = router;