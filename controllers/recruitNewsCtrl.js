const RecruitNews = require("../models/recruitNewsModel");

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

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 9;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}
const recruitNewsCtrl = {
  getRecruitNews: async (req, res) => {
    try {
      // const recruitNews = await RecruitNews.find()
      // console.log(req.query)
      const features = new APIfeatures(RecruitNews.find(), req.query)
        .filtering()
        .sorting()
        .paginating();
      const recruitNews = await features.query;

      res.json({
        status: "Đã được duyệt",
        result: recruitNews.length,
        recruitNews: recruitNews,
      });
      // res.json(recruitNews)
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createRecruitNews: async (req, res) => {
    try {
      const {
        recruitNews_id,
        title,
        price,
        description,
        content,
        images,
        requirements,
        category,
        rank,
        address,
        dayApply,
      } = req.body;
      if (!images)
        return res.status(400).json({ msg: "Không có hình ảnh tải lên" });

      const recruitNew = await RecruitNews.findOne({ recruitNews_id });
      if (recruitNew)
        return res.status(400).json({ msg: "Tin tuyển dụng này đã tồn tại." });

      const newRecruitNew = new RecruitNews({
        recruitNews_id,
        title: title.toLowerCase(),
        price,
        description,
        content,
        images,
        requirements,
        category,
        rank,
        address,
        dayApply,
        status: "Chưa duyệt",
      });
      // res.json(newRecruitNew)
      await newRecruitNew.save();
      res.json({ msg: "Đã tạo mới một Tin  tuyển dụng!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteRecruitNews: async (req, res) => {
    try {
      await RecruitNews.findByIdAndDelete(req.params.id);
      res.json({ msg: "Đã xóa một tin tuyển dụng!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateRecruitNews: async (req, res) => {
    try {
      const {
        title,
        price,
        description,
        content,
        images,
        requirements,
        category,
        rank,
        address,
        dayApply,
      } = req.body;
      if (!images)
        return res.status(400).json({ msg: "Không có hình ảnh tải lên" });

      await RecruitNews.findOneAndUpdate(
        { _id: req.params.id },
        {
          title: title.toLowerCase(),
          price,
          description,
          content,
          images,
          requirements,
          category,
          rank,
          address,
          dayApply,
        }
      );

      res.json({ msg: "Đã cập nhật một tin tuyển dụng!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getpagination: async (req, res) => {
    try {
      let { page, size, sort } = req.query;

      // If the page is not applied in query
      if (!page) {
        // Make the Default value one
        page = 1;
      }

      if (!size) {
        size = 10;
      }

      //  We have to make it integer because
      // the query parameter passed is string
      const limit = parseInt(size);

      // We pass 1 for sorting data in
      // descending order using ids
      const user = await RecruitNews.find()
        .sort({ votes: 1, _id: -1 })
        .limit(limit);

      res.send({
        page,
        size,
        Info: user,
      });
    } catch (error) {
      res.sendStatus(500);
    }
  },
};
module.exports = recruitNewsCtrl;
