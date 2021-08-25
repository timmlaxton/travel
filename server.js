const express = require("express");
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

// MiddleWare

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 586,
    auth: {
      user: "audioeverything100@gmail.com",
      pass: "Monkey011!",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "audioeverything100@gmail.com",
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message,
  };

  console.log("before send");

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent " + info.response);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
