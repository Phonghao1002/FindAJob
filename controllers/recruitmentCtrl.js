const Recruitment = require("../models/recruitmentModel");
const User = require("../models/userModel");
const Mailer = require("../routes/emailService");
const mailer = new Mailer();

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {
    const queryObj = { ...this.queryString }; //queryString = req.query
    // console.log({defore: queryObj}) //truoc khi delete page

    const excludedFields = ["page", "sort", "limit"];
    excludedFields.forEach((el) => delete queryObj[el]);

    // console.log({after: queryObj}) //sau khi delete page no chi log ra id

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );

    // console.log({queryStr})
    // //    gte = greater than or equal
    // //    lte = lesser than or equal
    // //    lt = lesser than
    // //    gt = greater than
    this.query.find(JSON.parse(queryStr));
    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      // console.log(sortBy)
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }
}
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
      const features = new APIfeatures(
        Recruitment.find({
          idJob: req.query.idJob,
        }),
        req.query
      )
        .filtering()
        .sorting();

      const recruitNews = await features.query;

      return res
        .status(200)
        .json({ status: "Đã được duyệt", data: recruitNews });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getRecruitmentHistory: async (req, res) => {
    try {
      const features = new APIfeatures(
        Recruitment.find({
          idUser: req.query.idUser,
        }),
        req.query
      )
        .filtering()
        .sorting();
      // const recruitmentHistory = await Recruitment.find({
      //   idUser: req.query.idUser,
      // });

      const recruitmentHistory = await features.query;

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
        "Xin chào bạn ",
        `<div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
      <h2 style="text-align: center; text-transform: uppercase;color: teal;">Cảm ơn bạn đã ứng tuyển vào Công Ty</h2>
      <p>Hiện tại chúng tôi đã xét duyệt hồ sơ cho bạn. bạn đã đủ các tiêu chuẩn để trở thành một thành viên trong Công Ty chúng tôi.
          Cảm ơn bạn đã tin tưỡng để ứng tuyển vào Công Ty. Hẹn gặp bạn vào ngày 30/7 vào luc 7h30 tại Công Ty.
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
