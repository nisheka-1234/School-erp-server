const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    studentId: String,
    studentname: String,
    classname: String,
    month: String,
    attendance: Object
  },
  { timestamps: true }
);

module.exports = mongoose.model("attendance", attendanceSchema);