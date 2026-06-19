const mongoose =
require("mongoose");

const studentSchema =
new mongoose.Schema({

  studentname: {
    type: String
  },

  registernumber: {
    type: String
  },

  username: {
    type: String
  },

  password: {
    type: String
  },

  classname: {
    type: String
  }

});

module.exports =

mongoose.models.students ||

mongoose.model(
  "students",
  studentSchema
);