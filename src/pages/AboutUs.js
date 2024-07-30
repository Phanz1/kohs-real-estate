import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AboutUs.css';
import img13 from '../images/img13.jpeg';
import img14 from '../images/img14.jpeg';
import img15 from '../images/img15.jpeg';
import img16 from '../images/img16.jpeg';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container mt-4">
        <h1 className="text-center mb-4">About Us</h1>
        <div className="row">
          <div className="col-md-6">
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img13}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Beautiful Homes</h3>
                  <p>We offer the most beautiful homes in the city.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img14}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Modern Interiors</h3>
                  <p>Experience modern and stylish living spaces.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img15}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Prime Locations</h3>
                  <p>Our properties are located in prime locations.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img16}
                  alt="Fourth slide"
                />
                <Carousel.Caption>
                  <h3>Luxury Living</h3>
                  <p>Enjoy luxurious living with top-notch amenities.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <p className="about-text">
              Real Estate Hub is designed for a diverse audience, including homebuyers
seeking a streamlined and user-friendly experience in finding properties
that suit their needs. It also caters to realtors and real estate agents looking
to effectively market listings and reach a wider audience. Additionally,
developers and property owners can benefit from the platform by
showcasing their properties and connecting with potential buyers.
Ultimately, Real Estate Hub serves as a comprehensive tool for anyone
involved in the real estate market, aiming to facilitate efficient transactions
and enhance the overall experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
