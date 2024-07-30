import React from 'react';
import './PropertyWithAgent.css';
import img24 from '../images/img24.jpeg';
import img25 from '../images/img25.jpeg';
import img26 from '../images/img26.jpeg';

const agents = [
  {
    name: 'John Doe',
    phone: '(123) 456-7890',
    location: 'New York, NY',
    email: 'john.doe@example.com',
    image: img24
  },
  {
    name: 'Jane Smith',
    phone: '(987) 654-3210',
    location: 'Los Angeles, CA',
    email: 'jane.smith@example.com',
    image: img25
  },
  {
    name: 'Alex Johnson',
    phone: '(555) 123-4567',
    location: 'Chicago, IL',
    email: 'alex.johnson@example.com',
    image: img26
  },
  // Add more agents as needed
];

const PropertyWithAgent = ({ property }) => {
  return (
    <div className="property-with-agent">
      <h2>Property: {property.title}</h2>
      <p>{property.description}</p>

      <h3>Agents Near This Property</h3>
      <div className="agents-grid">
        {agents.map((agent, index) => (
          <div key={index} className="agent-card">
            <img src={agent.image} alt={agent.name} className="agent-image" />
            <h4>{agent.name}</h4>
            <p>Phone: {agent.phone}</p>
            <p>Location: {agent.location}</p>
            <p>Email: <a href={`mailto:${agent.email}`}>{agent.email}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyWithAgent;
