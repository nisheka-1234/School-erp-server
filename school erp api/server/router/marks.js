const express =
require("express");

const router =
express.Router();

const {

  saveMarks,
  searchMarks,
  getAllMarks

} = require(
  "../controllers/marks/markscontroller"
);




router.post(
  "/save",
  saveMarks
);



router.get(
  "/search/:examtitle",
  searchMarks
);




router.get(
  "/all/:studentId",
  getAllMarks
);


module.exports =
router;