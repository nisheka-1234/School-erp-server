const express = require("express");
const router = express.Router();

const controller = require("../controllers/announcement/announcementController");


router.post("/save", controller.saveAnnouncement);


router.get("/get", controller.getAnnouncements);

module.exports = router;