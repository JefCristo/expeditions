import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
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
      <div style={containerStyle}>
        <div style={textStyle}>JEFCRISTO'S EXPEDITIONS</div>
      </div>
      <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
        <Link to="/form" style={buttonStyle}>
          Go to Form
        </Link>
      </div>
    </div>
  );
}

export default Home;
