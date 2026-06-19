const mongoose =
  require("mongoose");

const studentSchema =
  new mongoose.Schema({

    name: String,

    regno: String,

    username: String,

    password: String,

  });

module.exports =
  mongoose.model(
    "studentlogin",
    studentSchema
  );