const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email!"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password!"],
    },
    role: {
      type: Number,
      default: 0, // 0 = user, 1 = admin
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
    },
    phone: {
      type: String,
      required: [true, "Please enter your Phone!"],
      trim: true,
      unique: true,
    },
    address: {
      type: String,
      required: [true, "Please enter your Address!"],
      trim: true,
      unique: true,
    },
    gender: {
      type: String,
      required: [true, "Please enter your Gender!"],
      trim: true,
      unique: true,
    },
    birthday: {
      type: String,
      required: [true, "Please enter your Birthday!"],
      trim: true,
      unique: true,
    },
    logo: {
      type: String,
      default: null,
      default:
        "https://res.cloudinary.com/safehorizons/image/upload/v1650769686/test/ofwecfzgvwzolaaiqube.jpg",
    },
    company: {
      type: String,
      // default: null,
      trim: true,
      unique: true,
      required: [true, "Please enter your company!"],
    },
    status: {
      type: String,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
