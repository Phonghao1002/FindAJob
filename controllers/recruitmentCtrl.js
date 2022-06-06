// const recruitNewsCtrl = {
//   getRecruitNews: async (req, res) => {
//     try {
//       // const recruitNews = await RecruitNews.find()
//       // console.log(req.query)

//       // res.json(recruitNews)
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },
//   createRecruitNews: async (req, res) => {
//     try {
//       const {
//         recruitNews_id,
//         title,
//         price,
//         description,
//         content,
//         images,
//         category,
//         rank,
//         address,
//       } = req.body;
//       if (!images) return res.status(400).json({ msg: "No image upload" });

//       const recruitNew = await RecruitNews.findOne({ recruitNews_id });
//       if (recruitNew)
//         return res.status(400).json({ msg: "This product already exists." });

//       const newRecruitNew = new RecruitNews({
//         recruitNews_id,
//         title: title.toLowerCase(),
//         price,
//         description,
//         content,
//         images,
//         category,
//         rank,
//         address,
//         status: "pending",
//       });
//       // res.json(newRecruitNew)
//       await newRecruitNew.save();
//       res.json({ msg: "Created a recruit News!" });
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },
//   deleteRecruitNews: async (req, res) => {
//     try {
//       await RecruitNews.findByIdAndDelete(req.params.id);
//       res.json({ msg: "Deleted a recruit News!" });
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },
//   updateRecruitNews: async (req, res) => {
//     try {
//       const {
//         title,
//         price,
//         description,
//         content,
//         images,
//         category,
//         rank,
//         address,
//       } = req.body;
//       if (!images) return res.status(400).json({ msg: "No image upload" });

//       await RecruitNews.findOneAndUpdate(
//         { _id: req.params.id },
//         {
//           title: title.toLowerCase(),
//           price,
//           description,
//           content,
//           images,
//           category,
//           rank,
//           address,
//         }
//       );

//       res.json({ msg: "Updated a recruit News!" });
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   },
// };
// module.exports = recruitNewsCtrl;
