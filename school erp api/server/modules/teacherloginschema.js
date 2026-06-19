const mongoose =
  require("mongoose");

const teacherSchema =
  new mongoose.Schema({

    username: String,

    password: String,

  });

module.exports =
  mongoose.model(
    "teacherlogin",
    teacherSchema
  );