import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';

function Form({ handleRadioChange, selectedTravelPeriod }) {
  // Banner Style
  const headerStyle = {
    backgroundColor: 'black',
    color: '#00FF00', // Green text
    textAlign: 'center',
    padding: '40px 20px', // Increased padding for more space between the banner and form
    fontSize: '3rem',
    fontFamily: 'Luckiest Guy', // Custom font
    fontWeight: '400',
    lineHeight: '1.5',
    wordWrap: 'break-word',
    marginBottom: '20px', // Add spacing below the banner
  };

  // Form Container Style - Properly centered without overlap
  const formContainerStyle = {

    display: 'flex',
    justifyContent: 'center', // Center the form horizontally
    alignItems: 'center', // Keep the form aligned to the top
    flexDirection: 'column', // Stack form fields vertically
    padding: '0 20px', // Add padding for the form fields
    minHeight: '80vh', // Take 80% of the viewport height to ensure proper space
    marginTop: '30px', // Space between the banner and the form
  };

  // Styling for form fields container (visual design for highlight)
  const formFieldsStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: '600px', // Max width for the form
    width: '100%',
    backgroundColor: '#f4f4f4', // Light background for the form to stand out
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', // Soft shadow to highlight the form
    textAlign: 'left', // Align text to the left inside the form
  };

  const containerBelowStyle = {
    marginTop: '20px',
    textAlign: 'left',
    color: 'black',
    fontSize: '18px',
    fontFamily: 'Hammersmith One, fantasy',
    fontWeight: 400,
    lineHeight: '30px',
    wordWrap: 'break-word',
    width: '100%',
  };

  const inputStyle = {
    width: '100%',
    fontSize: '16px',
    padding: '10px',
    marginBottom: '10px',
    boxSizing: 'border-box', // Ensure padding is included in width calculation
  };

  const radioStyle = {
    marginTop: '10px',
  };

  const successMessageStyle = {
    color: 'green',
    marginTop: '10px',
    textAlign: 'center',
  };

  const [formData, setFormData] = useState({
    depart: '',
    city: '',
    destination: '',
    date: '',
    day: '',
    solo: null,
    group: null,
    travellers: '',
    low: null,
    mid: null,
    high: null,
    email: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fullFormData = {
      ...formData,
      travelPeriod: selectedTravelPeriod,
    };

    try {
      const response = await fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fullFormData),
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
        setIsSubmitted(true); // Set isSubmitted to true upon successful submission
      } else {
        console.error('Form data submission failed');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div>
      {/* Banner Section */}
      <div style={headerStyle}>
      <Link to="/" style={{ color: '#00FF00', textDecoration: 'none' }}>
          JEFCRISTO'S EXPEDITIONS
        </Link>
      </div>

      {/* Centered Form Container (without overlap) */}
      <div style={formContainerStyle}>
        {/* Form Fields Container */}
        <div style={formFieldsStyle}>
          <form onSubmit={handleSubmit}>
            <div style={containerBelowStyle}>
              Your departing country:
              <input
                type="text"
                name="depart"
                value={formData.depart}
                onChange={(e) => setFormData({ ...formData, depart: e.target.value })}
                style={inputStyle}
              />
            </div>
            <div style={containerBelowStyle}>
              City/town you live:
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                style={inputStyle}
              />
            </div>
            <div style={containerBelowStyle}>
              Your preferred destination:
              <input
                type="text"
                style={inputStyle}
                name="destination"
                placeholder="If you have no idea type Anywhere"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              />
            </div>
            <div style={containerBelowStyle}>
              Preferred period to travel:
              <div style={radioStyle}>
                <label>
                  <input
                    type="radio"
                    name="travelPeriod"
                    value="Anytime"
                    checked={selectedTravelPeriod === 'Anytime'}
                    onChange={() => handleRadioChange('Anytime')}
                  />
                  Anytime (adjusted to cheaper cost)
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="travelPeriod"
                    value="Specific Dates"
                    checked={selectedTravelPeriod === 'Specific Dates'}
                    onChange={() => handleRadioChange('Specific Dates')}
                  />
                  Specific Dates
                </label>
              </div>
            </div>
            {selectedTravelPeriod === 'Specific Dates' && (
              <div style={containerBelowStyle}>
                Select a date:
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  style={inputStyle}
                />
              </div>
            )}
            <div style={containerBelowStyle}>
              Number of days (optional):
              <input
                type="text"
                name="day"
                value={formData.day}
                onChange={(e) => setFormData({ ...formData, day: e.target.value })}
                style={inputStyle}
              />
            </div>
            <div style={containerBelowStyle}>
              Travel type:
              <div style={radioStyle}>
                <label>
                  <input
                    type="radio"
                    name="solo"
                    value="solo"
                    checked={formData.solo === 'solo'}
                    onChange={() => setFormData({ ...formData, solo: 'solo', group: null })}
                  />
                  Solo Travel
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="group"
                    value="group"
                    checked={formData.group === 'group'}
                    onChange={() => setFormData({ ...formData, solo: null, group: 'group' })}
                  />
                  Group Travel
                </label>
              </div>
            </div>
            {formData.group === 'group' && (
              <div style={containerBelowStyle}>
                Number of Travellers:
                <input
                  type="text"
                  name="travellers"
                  value={formData.travellers}
                  onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                  style={inputStyle}
                />
              </div>
            )}
            <div style={containerBelowStyle}>
              Budget:
              <div style={radioStyle}>
                <label>
                  <input
                    type="radio"
                    name="low"
                    value="low"
                    checked={formData.low === 'low'}
                    onChange={() => setFormData({ ...formData, low: 'low', mid: null, high: null })}
                  />
                  Low
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="mid"
                    value="mid"
                    checked={formData.mid === 'mid'}
                    onChange={() => setFormData({ ...formData, low: null, mid: 'mid', high: null })}
                  />
                  Mid-Range
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="high"
                    value="high"
                    checked={formData.high === 'high'}
                    onChange={() => setFormData({ ...formData, low: null, mid: null, high: 'high' })}
                  />
                  High
                </label>
              </div>
            </div>
            <div style={containerBelowStyle}>
              Your Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={inputStyle}
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Button type="submit">Submit</Button>
            </div>
            {isSubmitted && <div style={successMessageStyle}>Form submitted successfully!</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
