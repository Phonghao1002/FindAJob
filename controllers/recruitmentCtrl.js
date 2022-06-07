const Recruitment = require("../models/recruitmentModel");
const RecruitmentCtrl = {
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
};

module.exports = RecruitmentCtrl;
