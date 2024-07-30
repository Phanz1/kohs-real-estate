// src/components/PropertyCard.js

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <div className="card h-100">
      <img src={property.image} className="card-img-top" alt={property.title} />
      <div className="card-body">
        <h5 className="card-title">{property.title}</h5>
        <p className="card-text">{property.description}</p>
        <ul className="list-unstyled">
          <li>Rooms: {property.rooms}</li>
          <li>Bathrooms: {property.bathrooms}</li>
          <li>Garage: {property.garage}</li>
        </ul>
        <p className="fw-bold">Price: ${property.price.toLocaleString()}</p>
        <Link to={`/property/${property.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    garage: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default PropertyCard;