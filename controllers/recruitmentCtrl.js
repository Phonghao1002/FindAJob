const Recruitment = require("../models/recruitmentModel");
const User = require("../models/userModel");
const Mailer = require("../routes/emailService");
const mailer = new Mailer();
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

      return res
        .status(200)
        .json({ status: "Đã được duyệt", data: recruitNews });
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
        .json({ status: "Đã được duyệt", data: recruitmentHistory });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  updateRecuitment: async (req, res) => {
    // res.json({ msg: "Update Success!" });
    try {
      const { status, email } = req.body;

      await Recruitment.findByIdAndUpdate(
        { _id: req.params.id },
        {
          status,
        }
      );
      const mail = mailer.message(
        email,
        "Hello from ",
        `<div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
      <h2 style="text-align: center; text-transform: uppercase;color: teal;">chúc mừng.</h2>
      <p>ok
      </p>`
      );
      mailer.sendMail(mail);
      res.json({ msg: "Duyệt hồ sơ thành công!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getRecruitmentPending: async (req, res) => {
    try {
      const recruitmentPending = await Recruitment.find({
        status: "Chưa duyệt",
      });
      res.json({
        recruitmentPending: recruitmentPending,
        result: recruitmentPending.length,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getRecruitmentApproved: async (req, res) => {
    try {
      const recruitmentApproved = await Recruitment.find({
        status: "Đã được duyệt",
      });
      res.json({
        recruitmentApproved: recruitmentApproved,
        result: recruitmentApproved.length,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteRecruitment: async (req, res) => {
    try {
      await Recruitment.findByIdAndDelete(req.params.id);
      res.json({ msg: "Đã xóa một hồ sơ tuyển dụng!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = RecruitmentCtrl;
