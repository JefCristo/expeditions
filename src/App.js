import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; // Import Home.js
import Form from './Pages/Form'; // Import Form.js
import ItineraryDetail from './Pages/ItineraryDetail'; // Import Itinerary Detail Page

function App() {
  const [selectedTravelPeriod, setSelectedTravelPeriod] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<Home />} />

        {/* Route for Form Page */}
        <Route
          path="/form"
          element={<Form selectedTravelPeriod={selectedTravelPeriod} handleRadioChange={(value) => setSelectedTravelPeriod(value)} />}
        />

        {/* Route for Itinerary Detail Page */}
        <Route path="/itinerary/:id" element={<ItineraryDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
