const saveJobs = require("../models/saveJobsModel");
const RecruitNews = require("../models/recruitNewsModel");

const saverecruitNewsCtrl = {
  postsaveRecruitNews: async (req, res) => {
    try {
      const idRecruitNews = req.params.id;
      //   console.log("recruitNews", idRecruitNews);
      const { idUsers } = req.body;
      const dataRecruitNews = await RecruitNews.findOne({
        _id: idRecruitNews,
      });
      const saveJob = await saveJobs.create({
        idUsers,
        idRecruitNews,
        dataRecruitNews,
      });

      console.log("saved jon", saveJob);
      res.json({ msg: "Đã lưu tin!", data: saveJob });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getsaveRecruitNews: async (req, res) => {
    try {
      //   const idRecruitNews = req.params.id;
      //   console.log("recruitNews", idRecruitNews);
      const idUsers = req.params.id;
      const saveJob = await saveJobs.find({
        idUsers,
      });

      console.log("saved jon", saveJob);

      res.json({ msg: "ok!", data: saveJob });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
module.exports = saverecruitNewsCtrl;
