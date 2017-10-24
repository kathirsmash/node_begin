var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kathirprabhakaran007@gmail.com',
    pass: 'Rihtak$007'
  }
});

var mailOptions = {
  from: 'kathirprabhakaran007@gmail.com',
  to: 'prabhakarankathir64@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});