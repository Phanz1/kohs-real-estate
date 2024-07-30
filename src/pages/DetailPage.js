import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // Updated to useNavigate
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import PropertyContext from '../contexts/PropertyContext';
import 'leaflet/dist/leaflet.css';
import locationIcon from '../images/location.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

const agents = [
  {
    id: 1,
    name: 'John Doe',
    phone: '(123) 456-7890',
    email: 'john.doe@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    phone: '(987) 654-3210',
    email: 'jane.smith@example.com',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    phone: '(555) 123-4567',
    email: 'alex.johnson@example.com',
  },
  // Add more agents as needed
];

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate hook
  const properties = useContext(PropertyContext);
  const property = properties.find((p) => p.id === parseInt(id));
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (property && property.location) {
      getCityAndCountry(property.location.lat, property.location.lng).then(setLocation);
    }
  }, [property]);

  if (!property) {
    return <div className="container mt-5">Property not found</div>;
  }

  const icon = new L.Icon({
    iconUrl: locationIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  // Get the agent details
  const agent = agents.find((a) => a.id === property.id); // Match agent ID with property ID

  const handleInspection = () => {
    navigate(`/inspection/${property.id}`); // Use navigate instead of useHistory
  };

  const handlePayment = () => {
    navigate(`/payment/${property.id}`); // Use navigate instead of useHistory
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h1 className="mb-4">{property.title}</h1>
          <img src={property.image} alt={property.title} className="img-fluid mb-4" />
          <p>{property.description}</p>
          <p><strong>Price:</strong> N{property.price}</p>
          <p><strong>Bedrooms:</strong> {property.rooms}</p>
          <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
          <p><strong>Garage:</strong> {property.garage}</p>
          {location && (
            <p><strong>Location:</strong> {location.city}, {location.country}</p>
          )}
          {!location && <p>Loading location...</p>}
          <MapContainer center={[property.location.lat, property.location.lng]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[property.location.lat, property.location.lng]} icon={icon} />
          </MapContainer>
          <Link to="/listings" className="btn btn-primary mt-3">
            Back to Listings
          </Link>
          <button onClick={handleInspection} className="btn btn-secondary mt-3 ms-2">
            Proceed to Inspection
          </button>
          <button onClick={handlePayment} className="btn btn-success mt-3 ms-2">
            Proceed to Payment
          </button>
        </div>
        <div className="col-md-4">
          <h3>Agent Details</h3>
          {agent ? (
            <div className="agent-details">
              <p><strong>Name:</strong> {agent.name}</p>
              <p><strong>Email:</strong> <a href={`mailto:${agent.email}`}>{agent.email}</a></p>
              <p><strong>Phone:</strong> {agent.phone}</p>
            </div>
          ) : (
            <p>No agent details available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

async function getCityAndCountry(lat, lng) {
  const apiKey = 'afefa414c8664612b04c76317e72815d'; // Replace with your OpenCage Data API key
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.results.length > 0) {
      const location = data.results[0].components;
      const city = location.city || location.town || location.village;
      const country = location.country;
      return { city, country };
    } else {
      throw new Error('No results found');
    }
  } catch (error) {
    console.error('Error fetching location:', error);
    return null;
  }
}
