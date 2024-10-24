const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Your email
    pass: 'your-email-password',  // Your email password
  }
});

app.post('/submit-form', (req, res) => {
  const { email, depart, city, destination, date, day, solo, group, travellers, low, mid, high, travelPeriod } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Form Submission Confirmation',
    text: `Hello,

Thank you for submitting your form! Here's a summary of your submission:

- Departing country: ${depart}
- City: ${city}
- Preferred destination: ${destination}
- Travel period: ${travelPeriod === 'Anytime' ? 'Anytime (adjusted to cheaper cost)' : `Specific Dates: ${date || 'Not specified'}`}
- Number of days: ${day || 'Not specified'}
- Travel type: ${solo ? 'Solo' : group ? 'Group' : 'Not specified'}
${group ? `- Number of travellers: ${travellers || 'Not specified'}` : ''}
- Budget preference: ${low ? 'Low' : mid ? 'Mid-range' : high ? 'High' : 'Not specified'}

We will get back to you shortly.
`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Form data received and email sent successfully');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
