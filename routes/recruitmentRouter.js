const router = require("express").Router();
const RecruitmentCtrl = require("../controllers/recruitmentCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router.route("/listRecruitment").get(RecruitmentCtrl.getListRecruitment);

router.route("/recruitment").get(RecruitmentCtrl.getRecruitment);

router.route("/applicationHistory").get(RecruitmentCtrl.getRecruitmentHistory);
//
router.route("/updateRecruitMent/:id").patch(RecruitmentCtrl.updateRecuitment); //

router.route("/recruitmentPending").get(RecruitmentCtrl.getRecruitmentPending);

router
  .route("/recruitmentApproved")
  .get(RecruitmentCtrl.getRecruitmentApproved);

// .post(recruitNewsCtrl.createRecruitNews)

// router.route('/recruitNews/:id')
//     .delete(recruitNewsCtrl.deleteRecruitNews)
//     .put(recruitNewsCtrl.updateRecruitNews)

module.exports = router;
