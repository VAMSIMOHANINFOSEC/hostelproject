import React from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "../../assets/logos/jntuaceatp.png";
import "../../pages/css/navbarhome.css";
import { TbPasswordUser } from "react-icons/tb";
import { MdDynamicFeed } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Navbaradmin = () => {

  const navigate = useNavigate();
  function adminlogout(){
    try{
      localStorage.removeItem("admin");
      navigate("/");
    
    }
    catch(error){
      console.error("Local Storage Error", error);
    }
  }
  return (
    <Navbar className="navbarhome">
      <Navbar.Brand as={Link} to="/admin/dashboard">
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
              <h1 style={{ fontSize: "16px",marginBottom:"5px" }}>JNTUACEA, ANANTHAPURAMU</h1>
              <p
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  color: "#7bb697",paddingTop:"3px"
                }}
              >
                HOSTEL COMPLAINT MANAGEMENT SYSTEM
              </p>
            </span>
          </Col>
        </Row>
      </Navbar.Brand>

      <div className="spacer"></div>
      <Nav className="ml-auto">
        <MdDynamicFeed
          style={{
            color: "#5649a9",
            marginTop: "5px",
            fontSize: "25px",
            marginLeft: "5px",
          }}
        />

        <Link
          to="/admin/dashboard/complaintslist"
          className="nav-link"
          style={{
            color: "#5649a9",
            borderRadius: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            fontSize: "14px",
          }}
        >
          Complaints
        </Link>

        <TbPasswordUser
          style={{
            color: "#5649a9",
            marginTop: "4px",
            fontSize: "23px",
            marginLeft: "20px",
            marginRight: "5px",
          }}
        />

        <Link
          to="/admin/dashboard/changepassword-admin"
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
          onClick={adminlogout}
        >
          Logout
        </Link>
      </Nav>
    </Navbar>
  );
};
export default Navbaradmin;
