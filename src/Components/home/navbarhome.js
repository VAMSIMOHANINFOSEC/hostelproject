import React from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoImage from "../../assets/logos/jntuaceatp.png";
import "../../pages/css/navbarhome.css";
import { RiAdminLine } from "react-icons/ri";
import { PiStudentDuotone } from "react-icons/pi";

const Navbarhome = () => {
  return (
    <Navbar className="navbarhome">
      <Navbar.Brand as={Link} to="/">
        <Row>
          <Col style={{ marginLeft: "50px", marginTop:"3px" }}>
            <img
              src={logoImage}
              width="40px"
              height="40px"
              className="d-inline-block align-top"
              alt="JNTUACEA, ANANTHAPURAMU HOSTEL COMPLAINT MANAGEMENT SYSTEM"
            />
          </Col>
          <Col className="company"
            style={{
              marginLeft: "10px"
            }}
          >
            <span className="company-name">
              <h1
                style={{
                  fontSize: "16px",
                  position: "relative",
                  marginBottom: "0.1px",
                  marginTop: "5px",
                }}
              >
                JNTUACEA, ANANTHAPURAMU
              </h1>
              <p
                style={{
                  fontSize: "14px",
                  textAlign: "center",
                  color: "#7bb697",
                  position: "relative",
                  marginTop: "0px",
                }}
              >
                HOSTEL COMPLAINT MANAGEMENT SYSTEM
              </p>
            </span>
          </Col>
        </Row>
      </Navbar.Brand>

      {/* <div className="spacer"></div>
      <Nav className="ml-auto">
        <PiStudentDuotone
          style={{
            color: "#5649a9",
            marginTop: "5px",
            fontSize: "25px",
            marginLeft: "5px",
          }}
        />

        <Link
          to="/student/auth/login"
          className="nav-link"
          style={{
            color: "#5649a9",
            borderRadius: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            fontSize: "14px",
          }}
        >
          Student Login
        </Link>

        <RiAdminLine
          style={{
            color: "#5649a9",
            marginTop: "4px",
            fontSize: "23px",
            marginLeft: "20px",
            marginRight: "5px",
          }}
        />
        <Link
          to="/admin/auth/login"
          className="nav-link"
          style={{
            color: "#5649a9",
            borderRadius: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            fontSize: "14px",
          }}
        >
          Admin Login
        </Link> */}
      {/* </Nav> */}
    </Navbar>
  );
};
export default Navbarhome;
