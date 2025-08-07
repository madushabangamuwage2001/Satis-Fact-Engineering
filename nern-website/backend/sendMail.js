const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "madushdilshan222@gmail.com",
    pass: "btqg fxgr qugd yfjz" // App password
  }
});

module.exports = transporter;
