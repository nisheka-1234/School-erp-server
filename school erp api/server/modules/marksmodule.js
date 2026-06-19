const mongoose = require("mongoose");


const subjectSchema =
new mongoose.Schema({

  subject: {
    type: String,
  },

  marks: {
    type: Number,
  },

  outof: {
    type: Number,
  },

});




const marksSchema =
new mongoose.Schema({

  studentId: {
    type: String,
    required: true,
  },

  studentname: {
    type: String,
  },

  registernumber: {
    type: String,
  },

  examtitle: {
    type: String,
  },

  rows: [subjectSchema],

  totalmarks: {
    type: Number,
  },

  totaloutof: {
    type: Number,
  },

  average: {
    type: Number,
  },

});

module.exports =
mongoose.model(
  "marks",
  marksSchema
);