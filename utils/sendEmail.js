const nodemailer = require("nodemailer");
const nodemailerConfig = require("./nodemailerConfig");
const sgMail = require("@sendgrid/mail");

const sendEmailEthereal = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(nodemailerConfig);

  return transporter.sendMail({
    from: '"Flavius" <flavius.paltin@yahoo.com>',
    to,
    subject,
    html,
  });
};

const sendEmail = async ({
  to,
  from = "flaviuspaltin299@gmail.com",
  subject,
  html,
}) => {
  console.log(to, from, subject, html);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log(process.env.SENDGRID_API_KEY);
  const msg = {
    to,
    from,
    subject,
    html,
  };
  const info = await sgMail.send(msg);
  return info;
};

module.exports = sendEmail;
