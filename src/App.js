import React, { useState } from 'react';
import Form from './Form'; // Import your Form component

function App() {
  const containerStyle = {
    width: '100%',
    height: 'auto',
    background: 'black',
  };

  const textStyle = {
    textAlign: 'center',
    color: '#00FF00',
    fontSize: 96,
    fontFamily: 'Luckiest Guy',
    fontWeight: '400',
    lineHeight: '1.5',
    wordWrap: 'break-word',
  };


  const [selectedTravelPeriod, setSelectedTravelPeriod] = useState(null);

  return (
    <div>
      <div style={containerStyle}>
        <div style={textStyle}>
          JEFCRISTO'S EXPEDITIONS
        </div>
      </div>
      <div className='container'>
        <Form
          selectedTravelPeriod={selectedTravelPeriod}
          handleRadioChange={(value) => setSelectedTravelPeriod(value)}
        />
      </div>
    </div>
  );
}

export default App;
