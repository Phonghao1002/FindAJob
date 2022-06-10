// require("dotenv").config();
// const nodemailer = require("nodemailer");
// let sendSimpleEmail = async (dataSend) => {
//   let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.EMAIL_APP,
//       pass: process.env.EMAIL_APP_PASSWORD,
//     },
//   });

//   // thats the key part, without all these it didn't work for me
//   let info = transporter.sendMail({
//     from: '"hào phạm" <phamphonghao1002@gmail.com>',
//     to: dataSend.reciverEmail,
//     subject: "Test Nodemailer",
//     text: "You recieved message from ",
//     html: "<b>Hello</b>",
//   });
// };

// module.exports = { sendSimpleEmail: sendSimpleEmail };
