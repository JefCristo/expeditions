import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // Banner Style (same as in Form.js)
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

  const buttonStyle = {
    display: 'block',
    margin: '20px auto',
    padding: '10px 20px',
    fontSize: '24px',
    backgroundColor: '#00FF00',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center',
  };

  return (
    <div>
      {/* Add the Banner Section */}
      <div style={headerStyle}>
        <Link to="/" style={{ color: '#00FF00', textDecoration: 'none' }}>
          JEFCRISTO'S EXPEDITIONS
        </Link>
      </div>

      {/* Home Page Content */}
      <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
        <Link to="/form" style={buttonStyle}>
          Go to Form
        </Link>
      </div>
    </div>
  );
}

export default Home;
