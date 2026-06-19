const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
  text: String,
  date: String,
  time: String,
});

module.exports = mongoose.model("Announcement", announcementSchema);