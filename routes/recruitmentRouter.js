const router = require("express").Router();
const RecruitmentCtrl = require("../controllers/recruitmentCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router.route("/recruitment").get(RecruitmentCtrl.getRecruitment);
// .post(recruitNewsCtrl.createRecruitNews)

// router.route('/recruitNews/:id')
//     .delete(recruitNewsCtrl.deleteRecruitNews)
//     .put(recruitNewsCtrl.updateRecruitNews)

module.exports = router;
