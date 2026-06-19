const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema({
  classname: {
    type: String,
    required: true,
    unique: true,
  },

  columns: {
    type: [String],
    default: [],
  },

  rows: {
    type: Array,
    default: [],
  },

  announcement: {
    text: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
    time: {
      type: String,
      default: "",
    },
  },
});

module.exports = mongoose.model("Timetable", timetableSchema);