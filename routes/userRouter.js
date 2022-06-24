const router = require("express").Router();
const pdfkit = require("pdfkit");
const fs = require("fs");
const userCtrl = require("../controllers/userCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router.post("/register", userCtrl.register);

router.post("/create-resume", (req, res) => {
  const { fullname, phone, description, email } = req.body;
  console.log(fullname, phone, description, email);
  const pdfDocument = new pdfkit();
  pdfDocument.pipe(fs.createWriteStream("./resume.pdf"));
  pdfDocument
    .text(`User Name: ${fullname}`, {
      align: "center",
    })
    .fontSize(25);
  pdfDocument.text(`Description: ${description}`);
  pdfDocument.text(`Phone: ${phone}`);
  pdfDocument.text(`Email: ${email}`);
  pdfDocument.end();
  const fileStream = fs.createReadStream("./resume.pdf");
  fileStream.pipe(res);
  //   res.json(req.body);
});

router.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/resume.pdf`);
});

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

router.patch("/update_status/:id", userCtrl.updateUsersStatus);

router.patch("/addsaveJobs", auth, userCtrl.addCart);

// router.post('/activation', userCtrl.activateEmail)

module.exports = router;
