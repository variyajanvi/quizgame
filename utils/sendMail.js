const nodemailer = require("nodemailer");

const sendMail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "variyajanvii2024.katargam@gmail.com",
      pass: "grwt cnta isjj shdn",
    },
  });

  const mailOptions = {
    from: "variyajanvii2024.katargam@gmail.com",
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
