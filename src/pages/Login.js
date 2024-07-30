// src/pages/Login.js

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaLock, FaEnvelope } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    navigate('/');
  };

  return (
    <Container fluid className="bg-light min-vh-100 d-flex align-items-center justify-content-center py-5">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
          <Card className="shadow-lg border-0 rounded-lg">
            <Card.Header className="bg-primary text-white text-center py-4">
              <h2 className="font-weight-light mb-0">Welcome Back</h2>
            </Card.Header>
            <Card.Body className="px-5 py-4">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label className="small mb-1">Email Address</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text"><FaEnvelope /></span>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="small mb-1">Password</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text"><FaLock /></span>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-4 d-flex justify-content-between align-items-center">
                  <Form.Check
                    type="checkbox"
                    label="Remember me"
                    className="small"
                  />
                  <Link to="/forgot-password" className="small text-primary">Forgot Password?</Link>
                </Form.Group>
                <div className="d-grid">
                  <Button variant="primary" type="submit" size="lg">
                    Sign In
                  </Button>
                </div>
              </Form>
            </Card.Body>
            <Card.Footer className="text-center py-3 bg-light">
              <div className="small">
                Don't have an account? <Link to="/signup" className="text-primary">Sign up now</Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;