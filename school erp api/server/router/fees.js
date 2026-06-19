const express = require("express");

const router = express.Router();

const feesController =
require("../controllers/fees/feescontroller");



router.post(
  "/save",
  feesController.saveFees
);



router.get(
  "/get/:studentId",
  feesController.getFees
);

module.exports = router;