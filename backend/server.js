require('dotenv').config(); // Ensure dotenv is loaded first

const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

app.use(json());
app.use(cors());

// Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Your email
    pass: process.env.EMAIL_PASS,  // Your app password (Not Gmail password)
  },
});

// Verifying transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error('Error verifying transporter:', error);
  } else {
    console.log('Transporter is ready to send emails');
  }
});

// Handle form submission and send email
app.post('/submit-form', (req, res) => {
  const { email, depart, city, destination, date, day, solo, group, travellers, low, mid, high, travelPeriod } = req.body;

  const mailOptions = {
    from: email || process.env.EMAIL_USER,  // Use `process.env.EMAIL_USER` if email is missing
    to: process.env.EMAIL_USER,  // Send to the email in the .env file
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
    - Inquirer's E-Mail: ${email}

    We will get back to you shortly.`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Form data received and email sent successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
