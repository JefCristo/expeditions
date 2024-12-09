import React, { useState } from 'react';
import Button from './Button';

function Form({ handleRadioChange, selectedTravelPeriod }) {
  const containerBelowStyle = {
    marginTop: '20px',
    textAlign: 'left',
    color: 'black',
    fontSize: '32px',
    fontFamily: 'Hammersmith One , fantasy',
    fontWeight: 400,
    lineHeight: '30px',
    wordWrap: 'break-word',
  };

  const inputStyle = {
    minWidth: '510px',
    fontSize: '30px',
  };

  const radioStyle = {
    marginLeft: '400px',
    marginTop: '-30px',
  };

  const successMessageStyle = {
    color: 'green',
    marginTop: '10px',
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

    // Add selectedTravelPeriod to formData before sending
    const fullFormData = {
      ...formData,
      travelPeriod: selectedTravelPeriod
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
    <form onSubmit={handleSubmit}>
      <div style={containerBelowStyle}>
        Your departing country: <input type='text' name='depart' value={formData.depart} onChange={(e) => setFormData({ ...formData, depart: e.target.value })} />
      </div>
      <div style={containerBelowStyle}>
        City/town you live: <input type='text' name='city' value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
      </div>
      <div style={containerBelowStyle}>
        Your preferred destination: <input type='text' style={inputStyle} name='destination' placeholder='If you have no idea type Anywhere' value={formData.destination} onChange={(e) => setFormData({ ...formData, destination: e.target.value })} />
      </div>
      <div style={containerBelowStyle}>
        Preferred period to travel:
        <div style={radioStyle}>
          <div>
            <label>
              <input
                type='radio'
                name='travelPeriod'
                value='Anytime'
                checked={selectedTravelPeriod === 'Anytime'}
                onChange={() => handleRadioChange('Anytime')}
              /> Anytime (adjusted to cheaper cost)
            </label>
          </div>
          <div>
            <label>
              <input
                type='radio'
                name='travelPeriod'
                value='Specific Dates'
                checked={selectedTravelPeriod === 'Specific Dates'}
                onChange={() => handleRadioChange('Specific Dates')}
              /> Specific Dates
            </label>
          </div>
        </div>
      </div>
      {selectedTravelPeriod === 'Specific Dates' && (
        <div style={containerBelowStyle}>
          Select a date: <input type='date' name='date' value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
        </div>
      )}
      <div style={containerBelowStyle}>
        Number of days (optional): <input type='text' name='day' value={formData.day} onChange={(e) => setFormData({ ...formData, day: e.target.value })} />
      </div>
      <div style={containerBelowStyle}>
        Travel type:
        <div style={radioStyle}>
          <div>
            <label>
              <input
                type='radio'
                name='solo'
                value='solo'
                checked={formData.solo === 'solo'}
                onChange={() => setFormData({ ...formData, solo: 'solo', group: null })}
              /> Solo Travel
            </label>
          </div>
          <div>
            <label>
              <input
                type='radio'
                name='group'
                value='group'
                checked={formData.group === 'group'}
                onChange={() => setFormData({ ...formData, solo: null, group: 'group' })}
              /> Group Travel
            </label>
          </div>
        </div>
      </div>
      {formData.group === 'group' && (
        <div style={containerBelowStyle}>
          Number of Travellers: <input type='text' name='travellers' value={formData.travellers} onChange={(e) => setFormData({ ...formData, travellers: e.target.value })} />
        </div>
      )}
      <div style={containerBelowStyle}>
        Budget:
        <div style={radioStyle}>
          <div>
            <label>
              <input
                type='radio'
                name='low'
                value='low'
                checked={formData.low === 'low'}
                onChange={() => setFormData({ ...formData, low: 'low', mid: null, high: null })}
              /> Low
            </label>
          </div>
          <div>
            <label>
              <input
                type='radio'
                name='mid'
                value='mid'
                checked={formData.mid === 'mid'}
                onChange={() => setFormData({ ...formData, low: null, mid: 'mid', high: null })}
              /> Mid-Range
            </label>
          </div>
          <div>
            <label>
              <input
                type='radio'
                name='high'
                value='high'
                checked={formData.high === 'high'}
                onChange={() => setFormData({ ...formData, low: null, mid: null, high: 'high' })}
              /> High
            </label>
          </div>
          
        </div>
          <div style={containerBelowStyle}>
            Your E-mai: <input type='email' name='email' value={formData.email} onChange={(e)=> setFormData({...formData,email: e.target.value})}/>
          </div>
      </div>
      <div style={containerBelowStyle} >
        <Button type='submit'>Submit</Button>
      </div>
      {isSubmitted && (
        <div style={successMessageStyle}>
          Form submitted successfully!
        </div>
      )}
    </form>
  );
}

export default Form;
