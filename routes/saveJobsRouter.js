const router = require("express").Router();
const saverecruitNewsCtrl = require("../controllers/saverecruitNewsCtrl");

router
  .route("/saveJobsrecruitNews/create/:id")
  .post(saverecruitNewsCtrl.postsaveRecruitNews);
router
  .route("/getsaveJobsrecruitNews/:id")
  .get(saverecruitNewsCtrl.getsaveRecruitNews);

module.exports = router;
