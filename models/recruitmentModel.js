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
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email!"],
      trim: true,
      unique: true,
    },
    idJob: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    idUser: {
      type: String,
      required: true,
      trim: true,
      unique: true,
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
