// src/pages/PostAdForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const PostAdForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [rooms, setRooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [garage, setGarage] = useState('');
  const [images, setImages] = useState([]);
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const navigate = useNavigate();

  const handleImageChange = (event) => {
    setImages([...event.target.files]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Construct FormData
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('rooms', rooms);
    formData.append('bathrooms', bathrooms);
    formData.append('garage', garage);
    formData.append('location', JSON.stringify({ lat, lng }));
    formData.append('propertyType', propertyType);
    
    // Append multiple images
    images.forEach((image, index) => {
      formData.append(`image_${index}`, image);
    });

    try {
      const response = await fetch('/api/properties', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Property added successfully!');
        navigate('/listings');
      } else {
        console.error('Error adding property:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Post a New Property Ad</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rooms">Bedrooms:</label>
          <input
            type="number"
            className="form-control"
            id="rooms"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bathrooms">Bathrooms:</label>
          <input
            type="number"
            className="form-control"
            id="bathrooms"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="garage">Garage:</label>
          <input
            type="number"
            className="form-control"
            id="garage"
            value={garage}
            onChange={(e) => setGarage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="propertyType">Property Type:</label>
          <select
            className="form-control"
            id="propertyType"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            required
          >
            <option value="">Select property type</option>
            <option value="rent">Rent</option>
            <option value="sale">Sale</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="lat">Latitude:</label>
          <input
            type="text"
            className="form-control"
            id="lat"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lng">Longitude:</label>
          <input
            type="text"
            className="form-control"
            id="lng"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="images">Images:</label>
          <input
            type="file"
            className="form-control"
            id="images"
            onChange={handleImageChange}
            multiple
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Post Ad
        </button>
      </form>
    </div>
  );
};

export default PostAdForm;
