const nodemailer = require("nodemailer");
require("dotenv").config();

class Mailer {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "phamphonghao1002@gmail.com",
        pass: "rumahncogzoobuuu",
      },
    });
  }

  // eslint-disable-next-line class-methods-use-this
  message = (to, subject, html) => ({
    from: "phamphonghao1002@gmail.com",
    to,
    subject,
    html,
  });

  sendMail(mail) {
    this.transporter.sendMail(mail, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Message sent: ${info.response}`);
      }
    });
  }
}

module.exports = Mailer;
