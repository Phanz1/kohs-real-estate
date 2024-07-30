// src/components/AgentDetails.js

import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AgentDetails = ({ agent }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{agent.name}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item><strong>Phone:</strong> {agent.phone}</ListGroup.Item>
          <ListGroup.Item><strong>Email:</strong> {agent.email}</ListGroup.Item>
          <ListGroup.Item><strong>Location:</strong> {agent.location.lat}, {agent.location.lng}</ListGroup.Item>
          <ListGroup.Item><strong>Other Details:</strong> {agent.otherDetails}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default AgentDetails;
