const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Define a route to handle form submissions
app.post('/submit-form', (req, res) => {
  const formData = req.body; // Access the submitted data
  // Process and save the data as needed
  console.log('Received form data:', formData);
  res.json({ message: 'Form data received successfully' });
});

// Define a route to capture and display console logs
app.get('/logs', (req, res) => {
  const logs = captureConsoleOutput();
  res.send(logs);
});

// Function to capture console output
function captureConsoleOutput() {
  const logs = []; // Store console output
  const originalConsoleLog = console.log;

  // Override console.log to capture logs
  console.log = function (message) {
    logs.push(message);
    originalConsoleLog.apply(console, arguments);
  };

  return logs.join('\n');
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
