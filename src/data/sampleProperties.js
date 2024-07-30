// src/data/sampleProperties.js
import img10 from '../images/img10.jpeg';
import img7 from '../images/img7.jpeg';
import img9 from '../images/img9.jpeg';
import img17 from '../images/img17.jpeg';
import img18 from '../images/img18.jpeg';
import img19 from '../images/img19.jpeg';

const sampleProperties = [
  {
    id: 1,
    title: "Cozy Cottage",
    description: "A charming cottage in a quiet neighborhood.",
    rooms: 2,
    bathrooms: 1,
    garage: 1,
    price: 250000,
    location: { lat:9.0551 , lng:7.4985}, // Valid location
    image: img10,
    type: "sale",
  },
  {
    id: 2,
    title: "Luxury Villa",
    description: "Spacious villa with a beautiful garden and pool.",
    rooms: 4,
    bathrooms: 3,
    garage: 2,
    price: 750000,
    location: { lat: 9.1939, lng: 12.5001 }, // Valid location
    image: img7,
    type: "sale",
  },
  {
    id: 3,
    title: "Modern Apartment",
    description: "Stylish apartment in a vibrant city center.",
    rooms: 1,
    bathrooms: 1,
    garage: 0,
    price: 300000,
    location: { lat: 8.9905, lng: 7.3937 }, // Valid location
    image: img19,
    type: "rent",
  },
  {
    id: 4,
    title: "Modern Apartment",
    description: "Stylish apartment in a vibrant city center.",
    rooms: 1,
    bathrooms: 1,
    garage: 0,
    price: 300000,
    location: { lat: 8.9905, lng: 7.3937 }, // Valid location
    image: img18,
    type: "rent",
  },
  {
    id: 5,
    title: "Condo",
    description: "Stylish apartment in a vibrant city center.",
    rooms: 1,
    bathrooms: 1,
    garage: 0,
    price: 300000,
    location: { lat: 8.9905, lng: 7.3937 }, // Valid location
    image: img17,
    type: "rent",
  },
  {
    id: 6,
    title: "Modern Apartment",
    description: "Stylish apartment in a vibrant city center.",
    rooms: 1,
    bathrooms: 1,
    garage: 0,
    price: 300000,
    location: { lat: 8.9905, lng: 7.3937 }, // Valid location
    image: img9,
    type: "rent",
  },
];

export default sampleProperties;
