// src/pages/Services.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Our Services</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Buy a New Home</Card.Title>
              <Card.Text>
                Find your dream home from our listed properties.
              </Card.Text>
              <Button variant="primary" onClick={() => navigate('/listings?type=sale')}>View Properties</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Sell a Home</Card.Title>
              <Card.Text>
                Post an ad to sell your home.
              </Card.Text>
              <Button variant="primary" onClick={() => navigate('/post-ad')}>Post Ad</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Rent a Property</Card.Title>
              <Card.Text>
                Find rental properties to suit your needs.
              </Card.Text>
              <Button variant="primary" onClick={() => navigate('/listings?type=rent')}>View Rental Properties</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
