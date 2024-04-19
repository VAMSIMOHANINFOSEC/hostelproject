import React, { useState, useEffect} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { Navigate } from "react-router-dom";


const AdminLogin = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] =useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = "http://localhost:5001/admin-login";

      const response = await axios.post(apiUrl, { username, password });

      if (response.status === 200) {
        localStorage.setItem("admin", JSON.stringify(response.data));
        setIsLoggedIn(true); 
      } else {
        setError("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  useEffect(()=> {
    const admin = JSON.parse(localStorage.getItem("admin"));
    if (admin){
      setIsLoggedIn(true);
    }
  }, []);

  if (isLoggedIn){
    return <Navigate to ="/admin/dashboard"/>;
  }


    return(
        <Container style={{ position: "absolute", top: "30%" }}>
        <Row>
          <Col md={6} className="lottie-column">
            <h2 style={{ fontSize: "30px", textAlign: "center" }}>
              Welcome back to
            </h2>
            <p style={{ textAlign: "center" }}>Admin Login</p>
          </Col>
          <Col md={6} className="form-column">
           {error && <p style={{ color: "red" }}>{error}</p>}{" "}
            {/* Display error message */}
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicusername">
                <Form.Label style={{ color: "#ef4398" }}>Admin ID</Form.Label>
                <Form.Control
                  type="username"
                  style={{ width: "400px" }}
                  placeholder="Admin ID"
                  value={username}
                   onChange={(e) => setusername(e.target.value)}
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
                  onChange={(e) => setpassword(e.target.value)}
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
           
          </Col>
        </Row>
      </Container>
    )
}
export default AdminLogin;