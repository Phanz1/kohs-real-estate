// src/pages/Signup.js

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaBuilding } from 'react-icons/fa';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    userType: 'buyer' // default value
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log(formData);
    navigate('/');
  };

  return (
    <Container fluid className="bg-light min-vh-100 d-flex align-items-center justify-content-center py-5">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
          <Card className="shadow-lg border-0 rounded-lg">
            <Card.Header className="bg-primary text-white text-center py-4">
              <h2 className="font-weight-light mb-0">Create Your Account</h2>
            </Card.Header>
            <Card.Body className="px-5 py-4">
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small mb-1">First Name</Form.Label>
                      <InputGroup>
                        <InputGroup.Text><FaUser /></InputGroup.Text>
                        <Form.Control
                          type="text"
                          name="firstName"
                          placeholder="Enter first name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small mb-1">Last Name</Form.Label>
                      <InputGroup>
                        <InputGroup.Text><FaUser /></InputGroup.Text>
                        <Form.Control
                          type="text"
                          name="lastName"
                          placeholder="Enter last name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label className="small mb-1">Email Address</Form.Label>
                  <InputGroup>
                    <InputGroup.Text><FaEnvelope /></InputGroup.Text>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="small mb-1">Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Text><FaLock /></InputGroup.Text>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="small mb-1">Confirm Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Text><FaLock /></InputGroup.Text>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="small mb-1">Phone Number</Form.Label>
                  <InputGroup>
                    <InputGroup.Text><FaPhone /></InputGroup.Text>
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="small mb-1">I am a:</Form.Label>
                  <InputGroup>
                    <InputGroup.Text><FaBuilding /></InputGroup.Text>
                    <Form.Select
                      name="userType"
                      value={formData.userType}
                      onChange={handleChange}
                      required
                    >
                      <option value="buyer">Buyer</option>
                      <option value="seller">Seller</option>
                      <option value="agent">Real Estate Agent</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
                <div className="d-grid">
                  <Button variant="primary" type="submit" size="lg">
                    Sign Up
                  </Button>
                </div>
              </Form>
            </Card.Body>
            <Card.Footer className="text-center py-3 bg-light">
              <div className="small">
                Already have an account? <Link to="/login" className="text-primary">Log in</Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;