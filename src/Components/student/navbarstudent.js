import React from "react";
import { Navbar, Nav, Row, Col, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "../../assets/logos/jntuaceatp.png";
import "../../pages/css/navbarhome.css";
import { TbPasswordUser } from "react-icons/tb";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaWpforms } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";

const Navbarstudent = () => {
  const navigate = useNavigate();

  function logout() {
    try {
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.error("Error while clearing local storage:", error);
    }
  }
  

  return (
    <Navbar className="navbarhome">
      <Navbar.Brand as={Link} to="/">
        <Container>
          <Row>
            <Col style={{ marginLeft: "50px" }}>
              <img
                src={logoImage}
                width="80px"
                height="80px"
                className="d-inline-block align-top"
                alt="JNTUACEA, ANANTHAPURAMU HOSTEL COMPLAINT MANAGEMENT SYSTEM"
              />
            </Col>

            <Col
              style={{
                marginLeft: "10px",
                marginTop: "15px",
              }}
            >
              <span className="company-name">
                <h1 style={{ fontSize: "16px", marginBottom: "5px" }}>
                  JNTUACEA, ANANTHAPURAMU
                </h1>
                <p
                  style={{
                    fontSize: "12px",
                    textAlign: "center",
                    color: "#7bb697",
                    paddingTop: "3px",
                  }}
                >
                  HOSTEL COMPLAINT MANAGEMENT SYSTEM
                </p>
              </span>
            </Col>
          </Row>
        </Container>
      </Navbar.Brand>

      <div className="spacer"></div>
      <Nav className="ml-auto">
        <FaWpforms
          style={{
            color: "#5649a9",
            marginTop: "8px",
            fontSize: "18px",
            marginLeft: "5px",
          }}
        />
        <Link
          to="/Student/dashboard/complaintform"
          className="nav-link"
          style={{
            color: "#5649a9",
            borderRadius: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            fontSize: "14px",
          }}
        >
          Complaint Form
        </Link>

        <MdOutlinePendingActions
          style={{
            color: "#5649a9",
            marginTop: "7px",
            fontSize: "20px",
            marginLeft: "20px",
            marginReft: "5px",
          }}
        />
        <Link
          to="/Student/dashboard/complaintlist"
          className="nav-link"
          style={{
            color: "#5649a9",
            borderRadius: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            fontSize: "14px",
          }}
        >
          My Complaints
        </Link>
        <TbPasswordUser
          style={{
            color: "#5649a9",
            marginTop: "4px",
            fontSize: "23px",
            marginLeft: "20px",
            marginReft: "5px",
          }}
        />

        <Link
          to="/student/dashboard/changepassword"
          className="nav-link"
          style={{
            color: "#5649a9",
            borderRadius: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            fontSize: "14px",
          }}
        >
          Change Password
        </Link>
        <RiLogoutCircleRLine
          style={{
            color: "#5649a9",
            marginTop: "5px",
            fontSize: "25px",
            marginLeft: "5px",
          }}
        />
        <Link
          to="/"
          className="nav-link"
          style={{
            color: "#5649a9",
            borderRadius: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            fontSize: "14px",
          }}
          onClick={logout}
        >
          Logout
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Navbarstudent;
