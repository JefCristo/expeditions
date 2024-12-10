import React, { useState } from 'react';
import Button from '../Components/Button';

function Form({ handleRadioChange, selectedTravelPeriod }) {
  const headerStyle = {
    backgroundColor: 'black',
    color: '#00FF00', // Green text
    textAlign: 'center',
    padding: '20px',
    fontSize: '3rem',
    fontFamily: 'Luckiest Guy', // Custom font
    fontWeight: '400',
    lineHeight: '1.5',
    wordWrap: 'break-word',
    marginBottom: '30px', // Space below the header
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9', // Light background for better visibility
    padding: '20px', // Padding for mobile view
  };

  const formStyle = {
    width: '100%',
    maxWidth: '500px', // Limit form width for mobile view
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    boxSizing: 'border-box', // Include padding in the width
  };

  const containerBelowStyle = {
    marginTop: '20px',
    textAlign: 'left',
    color: 'black',
    fontSize: '18px', // Smaller font size for mobile
    fontFamily: 'Hammersmith One, fantasy',
    fontWeight: 400,
    lineHeight: '1.5',
    wordWrap: 'break-word',
  };

  const inputStyle = {
    width: '100%', // Full width for input fields
    fontSize: '16px', // Smaller font for mobile
    padding: '10px',
    marginBottom: '10px',
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
        setIsSubmitted(true);
      } else {
        console.error('Form data submission failed');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
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
        {isSubmitted && (
          <div style={successMessageStyle}>Form submitted successfully!</div>
        )}
      </form>
    </div>
  );
}

export default Form;
