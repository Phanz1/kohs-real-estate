// src/pages/Listings.js
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropertyContext from '../contexts/PropertyContext';
import { FaBed, FaBath, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { reverseGeocode } from '../utils/reverseGeocode';
import '../styles/common.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Listings = () => {
  const properties = useContext(PropertyContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [locations, setLocations] = useState({});
  const [locationSearch, setLocationSearch] = useState('');

  useEffect(() => {
    const fetchLocations = async () => {
      const locationPromises = properties.map(async (property) => {
        const data = await reverseGeocode(property.location.lat, property.location.lng);
        return { id: property.id, address: data.address };
      });

      const locationsArray = await Promise.all(locationPromises);
      const locationsMap = locationsArray.reduce((acc, curr) => {
        acc[curr.id] = curr.address;
        return acc;
      }, {});

      setLocations(locationsMap);
    };

    fetchLocations();
  }, [properties]);

  const filteredProperties = properties.filter((property) => {
    const matchesTitle = property.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBedrooms = bedrooms ? property.rooms >= parseInt(bedrooms) : true;
    const matchesBathrooms = bathrooms ? property.bathrooms >= parseInt(bathrooms) : true;
    const matchesLocation = locationSearch ? locations[property.id]?.city?.toLowerCase().includes(locationSearch.toLowerCase()) : true;

    return matchesTitle && matchesBedrooms && matchesBathrooms && matchesLocation;
  });

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Property Listings</h1>
      <div className="search-bar mb-4">
        <div className="input-group combined-search">
          <span className="input-group-text"><FaMapMarkerAlt /></span>
          <input
            type="text"
            className="form-control search-input"
            placeholder="Location"
            value={locationSearch}
            onChange={(e) => setLocationSearch(e.target.value)}
          />
          <div className="input-divider" />
          <span className="input-group-text"><FaBed /></span>
          <input
            type="number"
            className="form-control search-input"
            placeholder="Bedrooms"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          />
          <div className="input-divider" />
          <span className="input-group-text"><FaBath /></span>
          <input
            type="number"
            className="form-control search-input"
            placeholder="Bathrooms"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
          />
          <button className="btn btn-primary">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="row">
        {filteredProperties.map((property) => (
          <div key={property.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={property.image}
                className="card-img-top"
                alt={property.title}
                style={{ height: '250px', objectFit: 'contain' }} // Ensuring images are the same size without cropping
              />
              <div className="card-body">
                <h5 className="card-title">{property.title}</h5>
                <p className="card-text">
                  <strong>Price:</strong> N{property.price} <br />
                  <FaBed className="me-1" /> {property.rooms} Bedrooms <br />
                  <FaBath className="me-1" /> {property.bathrooms} Bathrooms <br />
                  <FaMapMarkerAlt className="me-1" /> {locations[property.id]?.city || 'Loading...'}, {locations[property.id]?.state || ''}
                </p>
                <Link to={`/property/${property.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
