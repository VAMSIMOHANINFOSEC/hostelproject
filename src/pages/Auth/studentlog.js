import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

const StudentLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = "http://localhost:5001/student-login";
      const response = await axios.post(apiUrl, { username, password });

      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));

        setIsLoggedIn(true); 
      } else {
        setError("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };
  

  useEffect(() => {
const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setIsLoggedIn(true); 
    }
  }, []);

  
  if (isLoggedIn) {
    return <Navigate to="/Student/dashboard" />;
  }

  return (
    <Container style={{ position: "absolute", top: "30%" }}>
      <Row>
        <Col md={6} className="lottie-column">
          <h2 style={{ fontSize: "30px", textAlign: "center" }}>
            Welcome back to
          </h2>
          <p style={{ textAlign: "center" }}>Student Login</p>
        </Col>
        <Col md={6} className="form-column">
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label style={{ color: "#ef4398" }}>Username</Form.Label>
              <Form.Control
                type="text"
                style={{ width: "400px" }}
                placeholder="Student Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label style={{ color: "#ef4398" }}>Password</Form.Label>
              <Form.Control
                type="password"
                style={{ width: "400px" }}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{
                marginTop: "20px",
                color: "white",
                background: "black",
                height: "40px",
                width: "200px",
                alignItems: "center",
              }}
            >
              Login
            </Button>
          </Form>
          <p style={{ marginTop: "15px" }}>
            Forgot your password? Reach out to the admin to reset.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentLogin;
