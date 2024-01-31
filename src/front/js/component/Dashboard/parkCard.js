import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sunset from "../../../img/Sunset.jpg";
import Heart from "../../../img/heart.png"
import '../../../styles/parkCard.css';

const truncateText = (text, limit) => {
  const words = text.split(' ');
  if (words.length > limit) {
    return words.slice(0, limit).join(' ') + '...';
  }
  return text;
};

const ParkCard = ({ title, text, buttonText, imageUrl, state }) => {
  const truncatedText = truncateText(text, 10);
  return (
    <Card className="park-card">
      <Card.Img className="park-card-image" variant="top" src={imageUrl} />
      <Card.Body className="park-card-body">
        <div>
          <Card.Title className="park-card-title">{title}</Card.Title>
          <Card.Text className="park-card-title"> State: {state}</Card.Text>
          <Card.Text className="park-card-text">{truncatedText}</Card.Text>
        </div>
        <div className='buttons'>
          <Button className="park-card-button" variant="primary">{buttonText}</Button>
          <Button className="park-card-heart-button" variant="primary">{Heart}</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

const ParkCardList = () => {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const apiKey = '512wN5Ol0eTdyS4E6KexHiCdDezf6hpcCbbsnPcn';
  const apiUrl = 'https://developer.nps.gov/api/v1/parks';

  const fetchData = async () => {
    const params = {
      api_key: apiKey,
    };

    const queryParams = new URLSearchParams(params);
    const fullUrl = `${apiUrl}?${queryParams}`;

    try {
      const response = await fetch(fullUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setCardsData(data.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredCards = cardsData.filter((park) =>
    park.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by Park Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Row>
        {filteredCards.map((park, index) => (
          <Col key={index} xs={12} md={3}>
            <ParkCard
              title={park.fullName}
              text={park.description}
              buttonText="Learn More"
              Heart={Heart}
              imageUrl={Sunset}
              state={park.states} // Add the 'states' property from the API response
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ParkCardList;