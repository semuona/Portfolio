const mailer = require("nodemailer");
require("dotenv").config();
module.exports = (email, name, message) => {
  // 1. setup smtp
  const smtpTransport = mailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // 2. send email

  const data = {
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_TO,
    subject: "Message from my portfolio website",
    html: `
    <!DOCTYPE html>
    <html>
      <body>
        <p>From: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message:${message}</p>
      </body>
    </html>
  `,
  };

  smtpTransport.sendMail(data, function (err, response) {
    if (err) {
      console.log(err);
    } else {
      cb();
    }
  });

  // 3. close connection
  smtpTransport.close();
};
