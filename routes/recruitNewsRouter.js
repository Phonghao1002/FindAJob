const router = require('express').Router()
const recruitNewsCtrl = require('../controllers/recruitNewsCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/recruitNews')
    .get(recruitNewsCtrl.getRecruitNews)
    .post(recruitNewsCtrl.createRecruitNews)


router.route('/recruitNews/:id')
    .delete(recruitNewsCtrl.deleteRecruitNews)
    .put(recruitNewsCtrl.updateRecruitNews)



module.exports = router