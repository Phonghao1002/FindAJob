const Category = require("../models/categoryModel");
const RecruitNews = require("../models/recruitNewsModel");

const categoryCtrl = {
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createCategory: async (req, res) => {
    try {
      // if user have role = 1 ---> admin
      // only admin can create , delete and update category

      const { name } = req.body;
      const category = await Category.findOne({ name });
      if (category)
        return res.status(400).json({ msg: "Danh mục này đã tồn tại." });

      const newCategory = new Category({ name });

      await newCategory.save();
      res.json({ msg: "Đã tạo mới một danh mục" });

      // res.json('Check admin success')
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const recruitNews = await RecruitNews.findOne({
        category: req.params.id,
      });
      if (recruitNews)
        return res.status(400).json({
          msg: "vui lòng xóa tất cả các mối quan hệ của tin tuyển dụng",
        });

      await Category.findByIdAndDelete(req.params.id);
      res.json({ msg: "Đã xóa một danh mục" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateCategory: async (req, res) => {
    try {
      const { name } = req.body;
      await Category.findOneAndUpdate({ _id: req.params.id }, { name });

      res.json({ msg: "Đã cập nhật một danh mục" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = categoryCtrl;
