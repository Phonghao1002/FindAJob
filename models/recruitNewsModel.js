const mongoose = require("mongoose");

const recruitNewsSchema = new mongoose.Schema(
  {
    // recruitNews_id: {
    //   type: String,
    //   unique: true,
    //   trim: true,
    //   required: true,
    // },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    images: {
      type: Object,
      required: true,
    },
    requirements: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    rank: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    dayApply: {
      type: Number,
      default: 0,
    },
    sold: {
      type: Number,
      default: 0,
    },
    // status: {
    //   type: String,
    // },
  },
  {
    timestamps: true, //important
  }
);

module.exports = mongoose.model("RecruitNews", recruitNewsSchema);
