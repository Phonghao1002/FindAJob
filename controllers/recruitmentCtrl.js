const Recruitment = require("../models/recruitmentModel");
const User = require("../models/userModel");
const RecruitmentCtrl = {
  getListRecruitment: async (req, res) => {
    try {
      const recruitment = await Recruitment.find();
      res.json(recruitment);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getRecruitment: async (req, res) => {
    try {
      const recruitNews = await Recruitment.find({
        idJob: req.query.idJob,
      });

      return res.status(200).json({ status: "Success", data: recruitNews });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getRecruitmentHistory: async (req, res) => {
    try {
      const recruitmentHistory = await Recruitment.find({
        idUser: req.query.idUser,
      });

      return res
        .status(200)
        .json({ status: "Approved", data: recruitmentHistory });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  updateRecuitment: async (req, res) => {
    // res.json({ msg: "Update Success!" });
    try {
      const { status } = req.body;

      await Recruitment.findByIdAndUpdate(
        { _id: req.params.id },
        {
          status,
        }
      );
      res.json({ msg: "Profile browsing successful!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = RecruitmentCtrl;
