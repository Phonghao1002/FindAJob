const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router.post("/register", userCtrl.register);

router.post("/login", userCtrl.login);

router.get("/refresh_token", userCtrl.refreshToken);

router.post("/reset", auth, userCtrl.resetPassword);

router.get("/infor", auth, userCtrl.getUser);

router.get("/users", userCtrl.getUsers);

router.get("/recruiter", userCtrl.getRecruit);

router.get("/logout", userCtrl.logout);

router.post("/registerRecruit", userCtrl.createUsers);

router.patch("/update/:id", userCtrl.updateUser);

router.patch("/update_role/:id", userCtrl.updateUsersRole);

router.patch("/addsaveJobs", auth, userCtrl.addSaveJobs);

// router.post('/activation', userCtrl.activateEmail)

module.exports = router;
