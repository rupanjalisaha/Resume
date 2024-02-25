var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rupanjalisaha2001@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'rupanjalisaha2001@gmail.com',
  to: 'dilipsaha52@gmail.com',
  subject: 'testing message',
  text: `Hello from Node JS!`,
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
