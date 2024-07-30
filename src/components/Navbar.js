// src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../images/img1.jpeg'; // Ensure the correct path to the image

const NavBar = () => {
  return (
    <div className="navbar">
       <Link to="/" className="navbar-logo-link">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>
      <div className="menu-item schedule-inspection">SCHEDULE AN INSPECTION</div>
      <div className="menu-item properties">PROPERTIES</div>
      <div className="menu-item about">ABOUT</div>
      <div className="menu-item brochure">Brochure</div>
      <Link to="/login" className="menu-item login-button">Login</Link> {/* Add login link */}
    </div>
  );
};

export default NavBar;
