import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import img11 from '../images/img11.jpeg';
import img12 from '../images/img12.jpeg';
import img20 from '../images/img20.jpeg';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: img11,
    testimony: "ReHub Real Estate provided exceptional service. They helped me find my dream home quickly and efficiently.",
    rating: 5
  },
  {
    id: 2,
    name: "Jane Smith",
    image: img20,
    testimony: "I was impressed by the professionalism and knowledge of the ReHub's team. They made selling my property a breeze.",
    rating: 4
  },
  {
    id: 3,
    name: "Mike Johnson",
    image: img12,
    testimony: "ReHub Real Estate goes above and beyond for their clients. I highly recommend their services to anyone in the market.",
    rating: 5
  },
  // Add more testimonials as needed
];

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-warning rating-star" />);
    } else if (i - 0.5 <= rating) {
      stars.push(<FaStarHalfAlt key={i} className="text-warning rating-star" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-warning rating-star" />);
    }
  }
  return <div>{stars}</div>; 
};

const Testimonials = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">Customer Testimonials</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {testimonials.map((testimonial) => (
          <Col key={testimonial.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <div className="text-center mb-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle"
                    width="100"
                    height="100"
                  />
                </div>
                <Card.Title className="text-center">{testimonial.name}</Card.Title>
                <Card.Text className="flex-grow-1">{testimonial.testimony}</Card.Text>
                <div className="text-center mt-3">
                  <Rating rating={testimonial.rating} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
