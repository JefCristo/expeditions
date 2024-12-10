import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const containerStyle = {
    width: '100%',
    height: '100vh',
    background: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px', // Padding for mobile view
  };

  const textStyle = {
    textAlign: 'center',
    color: '#00FF00',
    fontSize: '8vw', // Use relative font size for responsiveness
    fontFamily: 'Luckiest Guy',
    fontWeight: '400',
    lineHeight: '1.2',
    wordWrap: 'break-word',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '15px 25px',
    fontSize: '18px',
    backgroundColor: '#00FF00',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center',
    maxWidth: '200px',
    width: '100%', // Full width on smaller screens
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>JEFCRISTO'S EXPEDITIONS</div>
      <Link to="/form" style={buttonStyle}>
        Go to Form
      </Link>
    </div>
  );
}

export default Home;
