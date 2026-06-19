const express =
require("express");

const router =
express.Router();

const timetableController =
require(
  "../controllers/timetable/timetablecontroller"
);

router.post(

  "/save",

  timetableController
  .saveTimetable

);

router.get(

  "/get/:classname",

  timetableController
  .getTimetable

);

module.exports = router;