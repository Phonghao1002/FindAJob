require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Routes
app.use("/user", require("./routes/userRouter"));
app.use("/api", require("./routes/categoryRouter"));
app.use("/api", require("./routes/upload"));
app.use("/api", require("./routes/recruitNewsRouter"));
app.use("/api", require("./routes/recruitmentRouter"));

//-----------------------sendmail-------------------//
// app.use((request, response, next) => {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

// const transporter = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "phamphonghao1002@gmail.com",
//     pass: "phao405393",
//   },
// });

// transporter.verify(function (error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages");
//   }
// });
// app.post("/contact_us", (req, res, next) => {
//   var name = req.body.name;
//   var email = req.body.email;
//   var subject = req.body.subject;
//   var message = req.body.message;

//   var mail = {
//     from: "hào phạm",
//     to: "phamphonghao10022000@gmail.com",
//     subject: "Test Nodemailer",
//     text: "You recieved message from " + req.body.email,
//     html:
//       "<b>Hello</b>"
//   };

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       console.log("failed");
//       res.json({
//         status: "fail",
//       });
//     } else {
//       console.log("successful");
//       res.json({
//         status: "success",
//       });
//     }
//   });
// });
// Connect to mongodb
const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);

// app.use('/', (req, res) => {
//     res.json({ msg: "Wellcome to Phong Hao" })
// })

const PORT = process.env.PORT || 4110;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
