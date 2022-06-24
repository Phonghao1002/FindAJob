const mongoose = require("mongoose");
const recruitNewsModel = require("./recruitNewsModel");
const Schema = mongoose.Schema;

const saveJobsSchema = new mongoose.Schema(
  {
    idUsers: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    idRecruitNews: {
      type: Schema.Types.ObjectId,
      ref: "RecruitNews",
    },
    dataRecruitNews: {},
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SaveJobs", saveJobsSchema);
