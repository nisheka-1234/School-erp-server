const mongoose = require("mongoose");

const feesSchema = new mongoose.Schema({

  studentId: {
    type: String,
    required: true
  },

  studentname: {
    type: String
  },

  classname: {
    type: String
  },

  paymentDate: {
    type: String
  },

  feesType: {
    type: String
  },

  amount: {
    type: Number,
    default: 0
  },

  paidAmount: {
    type: Number,
    default: 0
  }

});

module.exports =
mongoose.model(
  "fees",
  feesSchema
);