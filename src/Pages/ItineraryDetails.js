import React from 'react';
import { useParams } from 'react-router-dom';

function ItineraryDetail() {
  const { id } = useParams();

  const itineraries = {
    1: {
      name: 'Adventure Trips',
      price: '$2000',
      breakdown: {
        transport: '$500',
        accommodation: '$800',
        activities: '$700',
      },
      inclusions: ['Flights', 'Hotels', 'Guided Tours'],
      pictures: ['image1.jpg', 'image2.jpg'],
      description: 'Explore thrilling adventure destinations...',
    },
    2: {
      name: 'Beach Vacations',
      price: '$1500',
      breakdown: {
        transport: '$400',
        accommodation: '$700',
        activities: '$400',
      },
      inclusions: ['Resort Stay', 'Beach Activities'],
      pictures: ['beach1.jpg', 'beach2.jpg'],
      description: 'Relax on serene beaches...',
    },
    // Add more itineraries as needed
  };

  const itinerary = itineraries[id];

  if (!itinerary) {
    return <div>Itinerary not found!</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{itinerary.name}</h1>
      <p>{itinerary.description}</p>
      <h2>Price: {itinerary.price}</h2>
      <h3>Breakdown:</h3>
      <ul>
        {Object.entries(itinerary.breakdown).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <h3>Inclusions:</h3>
      <ul>
        {itinerary.inclusions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Pictures:</h3>
      <div>
        {itinerary.pictures.map((pic, index) => (
          <img
            key={index}
            src={pic}
            alt={itinerary.name}
            style={{ width: '200px', marginRight: '10px' }}
          />
        ))}
      </div>
    </div>
  );
}

export default ItineraryDetail;
