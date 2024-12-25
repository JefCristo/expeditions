import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ItineraryDetail = () => {
  const { id } = useParams(); // Get the itinerary ID from the URL
  const [itinerary, setItinerary] = useState(null);

  // Sample itinerary data (this can also be fetched from an API)
  const itinerariesData = [
    {
      id: "1a",
      name: "Mountaineering Adventure",
      price: 1200,
      priceBreakdown: {
        transportation: 500,
        accommodation: 400,
        meals: 200,
        activities: 100,
        guide: 100
      },
      inclusions: [
        "Accommodation",
        "Meals",
        "Transport",
        "Guides",
        "Equipment"
      ],
      exclusions: [
        "Personal expenses",
        "Travel insurance"
      ],
      description: "A thrilling mountaineering adventure across challenging terrains.",
      images: ["image1.jpg", "image2.jpg", "image3.jpg"]
    }
  ];

  // Fetch the specific itinerary based on the id
  useEffect(() => {
    const currentItinerary = itinerariesData.find(it => it.id === id);
    setItinerary(currentItinerary);
  }, [id]);

  // If no itinerary is found, display a loading message
  if (!itinerary) {
    return <div>Loading...</div>;
  }

  return (
    <StyledContainer>
      <StyledHeader>
        <h1>{itinerary.name}</h1>
        <p>{itinerary.description}</p>
      </StyledHeader>

      <StyledImages>
        {itinerary.images.map((image, index) => (
          <img key={index} src={image} alt={`${itinerary.name} image`} />
        ))}
      </StyledImages>

      <StyledSection>
        <h3>Price: ${itinerary.price}</h3>
        <h4>Price Breakdown</h4>
        <ul>
          {Object.entries(itinerary.priceBreakdown).map(([key, value]) => (
            <li key={key}>{key}: ${value}</li>
          ))}
        </ul>
      </StyledSection>

      <StyledSection>
        <h4>Inclusions</h4>
        <ul>
          {itinerary.inclusions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </StyledSection>

      <StyledSection>
        <h4>Exclusions</h4>
        <ul>
          {itinerary.exclusions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </StyledSection>

      <StyledButton>
        <button>Book Now</button>
      </StyledButton>
    </StyledContainer>
  );
};

export default ItineraryDetail;

// Styled-components for the page
const StyledContainer = styled.div`
  margin: 20px;
  font-family: 'Arial', sans-serif;
`;

const StyledHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 3rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }
`;

const StyledImages = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  img {
    width: 30%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const StyledSection = styled.div`
  margin-bottom: 40px;

  h4 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: #333;
  }
`;

const StyledButton = styled.div`
  text-align: center;

  button {
    background-color: #00FF00;
    color: white;
    padding: 15px 30px;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #00cc00;
  }
`;
