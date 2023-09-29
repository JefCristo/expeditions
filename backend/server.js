// In your Express.js server's app.js or server.js file
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// Define a route to handle form submissions
app.post('/submit-form', (req, res) => {
  const formData = req.body; // Access the submitted data
  // Process and save the data as needed
  console.log('Received form data:', formData);
  res.json({ message: 'Form data received successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
