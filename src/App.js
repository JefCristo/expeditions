import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; // Import Home.js
import Form from './Pages/Form'; // Import Form.js

function App() {
  const [selectedTravelPeriod, setSelectedTravelPeriod] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Form Page */}
        <Route
          path="/form"
          element={
            <Form
              selectedTravelPeriod={selectedTravelPeriod}
              handleRadioChange={(value) => setSelectedTravelPeriod(value)}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
