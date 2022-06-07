const mongoose = require("mongoose");

const recruitmentSchema = new mongoose.Schema(
  {
    urlCV: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      required: [true, "Please enter your name!"],
      trim: true,
    },
    descriptions: {
      type: String,
      required: [true, "Please enter your description!"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please enter your phoneNumber!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email!"],
      trim: true,
    },
    idJob: {
      type: String,
      required: true,
      unique: false,
    },
    idUser: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recruitment", recruitmentSchema);
