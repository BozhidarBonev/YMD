const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");


const app = express();
app.use(cors({ origin: "*" }));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.listen(3000, () => {
  console.log("Server started on 3000");
});

app.get("/sendMail", (req, res) => {
    
  res.send(
    "<h1 style='text-align: center'>I kurvata spira da e gengsta</h1>"
  );
});

app.post("/sendMail", (req, res) => {
  console.log("request came");
  console.log(req.body);
  let mail = req.body;
  sendMail(mail, info => {
    console.log(`Mail Sent ${mail.mailname}`);
    res.send(info);
  });
});

async function sendMail(mail, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "bozhidarbonev@gmail.com",
      pass: "bogidar_98"
    }
  });

  let mailOptions = {
    from: "bozhidarbonev@gmail.com", // sender address
    to: "bojidarbonev98@gmail.com", // list of receivers
    subject: mail.mailemail, // Subject line
    html: `<h1>${mail.mailname}</h1>
    <p>${mail.mailmessage}</p>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}
