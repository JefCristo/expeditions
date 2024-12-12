import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const headerStyle = {
    backgroundColor: 'black',
    color: '#00FF00',
    textAlign: 'center',
    padding: '40px 20px',
    fontSize: '3rem',
    fontFamily: 'Luckiest Guy',
    fontWeight: '400',
    lineHeight: '1.5',
    marginBottom: '20px',
  };

  const pageContainerStyle = {
    margin: '0 auto',
    maxWidth: '900px',
    padding: '20px',
  };

  const categoriesContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '20px',
  };

  const categoryStyle = {
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
    padding: '10px 15px',
    marginBottom: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    width: '200px',
    textAlign: 'left',
    cursor: 'pointer',
    position: 'relative',
    transition: 'background-color 0.3s ease', // Smooth transition for background color
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '0',
    left: '210px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    zIndex: 10,
    padding: '10px',
    minWidth: '200px',
    opacity: 0,
    visibility: 'hidden', // Hidden by default
    transition: 'opacity 0.3s ease, visibility 0.3s ease', // Smooth fade-in/fade-out effect
  };

  const dropdownItemStyle = {
    padding: '8px 12px',
    fontSize: '16px',
    color: 'black',
    textDecoration: 'none',
    display: 'block',
  };

  const buttonContainerStyle = {
    textAlign: 'center',
    marginTop: '30px',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '15px 30px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#00FF00',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const categories = [
    {
      id: 1,
      name: 'Adventure Trips',
      itineraries: [
        { id: '1a', name: 'Mountaineering Adventure', link: '/itinerary/1a' },
        { id: '1b', name: 'Safari Experience', link: '/itinerary/1b' },
      ],
    },
    {
      id: 2,
      name: 'Beach Vacations',
      itineraries: [
        { id: '2a', name: 'Tropical Island Getaway', link: '/itinerary/2a' },
        { id: '2b', name: 'Luxury Beach Resort', link: '/itinerary/2b' },
      ],
    },
    {
      id: 3,
      name: 'Cultural Experiences',
      itineraries: [
        { id: '3a', name: 'Historical City Tour', link: '/itinerary/3a' },
        { id: '3b', name: 'Local Food Tasting', link: '/itinerary/3b' },
      ],
    },
    {
      id: 4,
      name: 'Luxury Escapes',
      itineraries: [
        { id: '4a', name: 'Exclusive Spa Retreat', link: '/itinerary/4a' },
        { id: '4b', name: 'Private Island Stay', link: '/itinerary/4b' },
      ],
    },
  ];

  return (
    <div>
      <div style={headerStyle}>JEFCRISTO'S EXPEDITIONS</div>
      <div style={pageContainerStyle}>
        <div style={categoriesContainerStyle}>
          {categories.map((category) => (
            <div
              key={category.id}
              style={categoryStyle}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {category.name}
              <div
                style={{
                  ...dropdownStyle,
                  visibility: hoveredCategory === category.id ? 'visible' : 'hidden',
                  opacity: hoveredCategory === category.id ? 1 : 0,
                }}
                onMouseEnter={() => setHoveredCategory(category.id)} // Keep dropdown open
                onMouseLeave={() => setHoveredCategory(null)} // Close dropdown when mouse leaves
              >
                {category.itineraries.map((itinerary) => (
                  <Link
                    to={itinerary.link}
                    key={itinerary.id}
                    style={dropdownItemStyle}
                  >
                    {itinerary.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Form Button at the Bottom */}
        <div style={buttonContainerStyle}>
          <Link to="/form" style={buttonStyle}>
            Go to Form
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
