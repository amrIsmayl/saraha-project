const nodemailer = require("nodemailer");

// let testAccount = await nodemailer.sendEmail();

module.exports.sendEmail = async (option) => {



  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amrismayl40@gmail.com", // generated ethereal user
      pass: "joejqxtpqxdkamdn", // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"amr ismayl" <amrismayl40@gmail.com>', // sender address
    to: option.email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `
    <b>Hello world?</b>
    <h1>${option.message}</h1>
<a href="http://localhost:3000/users/verify/${option.token}">verify</a>
    `, // html body
  }, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

}