import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import Listings from './Listings';
import Services from './Services';
import Testimonials from './Testimonials';
import PropertyWithAgent from './PropertyWithAgent';
import OurTeam from './OurTeam'; // Import OurTeam component
import heroImage from '../images/hero-image.jpeg';
import { FaMapMarkerAlt, FaBed, FaBath } from 'react-icons/fa';
import './Home.css'; // Custom styles

const Home = () => {
  // Example property data
  const property = {
    title: "Luxury Villa",
    description: "A beautiful luxury villa with modern amenities.",
    location: { lat: 40.73061, lng: -73.935242 },
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section id="home" className="hero-section position-relative">
        <div className="hero-overlay"></div>
        <div 
          className="hero-bg"
          style={{backgroundImage: `url(${heroImage})`}}
        ></div>
        <div className="container position-relative hero-content">
          {/* Search Bar */}
          <div className="search-bar mb-4">
            <form className="search-form d-flex">
              <div className="input-group">
                <span className="input-group-text"><FaMapMarkerAlt /></span>
                <input type="text" className="form-control" placeholder="Location" />
              </div>
              <div className="input-group">
                <span className="input-group-text"><FaBed /></span>
                <input type="number" className="form-control" placeholder="Bedrooms" />
              </div>
              <div className="input-group">
                <span className="input-group-text"><FaBath /></span>
                <input type="number" className="form-control" placeholder="Bathrooms" />
              </div>
              <button type="submit" className="btn btn-primary">Search</button>
            </form>
          </div>
          <div className="d-flex align-items-center mb-4">
            <div className="red-dot"></div>
            <span className="brand-name">ReHub Real Estate</span>
          </div>
          <h1 className="hero-title">
            Fostering Innovation, Collaboration, and Growth in Real Estate
          </h1>
          <div className="d-flex flex-column flex-sm-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/listings" className="btn btn-danger btn-lg me-2 mb-2 mb-sm-0">
              Explore Listings
            </Link>
            <Link to="/post-ad" className="btn btn-outline-light btn-lg">
              Post Your Ad
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-white">
        <div className="container">
          <AboutUs />
        </div>
      </section>

      {/* Listings Section */}
      <section id="listings" className="py-20 bg-light">
        <div className="container">
          <Listings />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container">
          <Services />
        </div>
      </section>

      {/* Our Team Section */}
      <section id="our-team" className="py-20 bg-light">
        <div className="container">
          <OurTeam />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container">
          <Testimonials />
        </div>
      </section>

      {/* PropertyWithAgent Section */}
      <section id="property-with-agent" className="py-20 bg-light">
        <div className="container">
          <PropertyWithAgent property={property} />
        </div>
      </section>
    </div>
  );
};

export default Home;
