const mongoose = require("mongoose");

const studentschema = new mongoose.Schema({
  studentname: String,
  registernumber: String,
  username: String,
  password: String,
  classname: String
});

module.exports = mongoose.model("students", studentschema);