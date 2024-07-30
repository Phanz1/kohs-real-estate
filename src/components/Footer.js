import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Info */}
          <div className="mb-4 md:mb-0">
            <h5>ReHub Real Estate</h5>
            <p>1234 Main St, Anytown, Nigeria</p>
            <p>Email: info@kohsrealestate.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
            <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-gray-400">Terms of Service</a>
            <a href="/contact-us" className="hover:text-gray-400">Contact Us</a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.twitter.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center mt-4">&copy; 2024 ReHub Real Estate. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
