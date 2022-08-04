const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
 service: "email",
 auth: {
  user: "connect@techstudio9.com",
  pass: "Rishabh@123"
 }
}) 

let name = "RISHABH GOUR"

transport.sendMail({
 from: "gareebminati6@gmail.com",
 to: "rishabhgour157@gmail.com",
 subject: "NODEMAILER",
 html: `<h1> HI ${name} !  </h1>`
}, (err, done) => {
 if (err) {
  console.log(err)
 }
 else {
  console.log(done.messageId)
 }
})