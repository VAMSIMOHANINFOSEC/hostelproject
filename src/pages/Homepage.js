import React from "react";
import { useNavigate } from 'react-router-dom';
import "./css/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarhome from "../Components/home/navbarhome";
import Footer from "../Components/home/fotter";
import backgroundimage from "../assets/homebackg.png";
import { Image, Container, Button } from "react-bootstrap";
import { PiStudentDuotone } from "react-icons/pi";
import { RiAdminLine } from "react-icons/ri";

const Home = () => {
  const navigate = useNavigate();

  const handleStudentLogin = () => {
   navigate('/student/auth/login');
  };

  const handleAdminLogin = () => {
    navigate('/admin/auth/login');
  };

  return (
    <>
      <Navbarhome />
      <div className="bg-image">
        <Image
          src={backgroundimage}
          style={{ objectFit: "cover", width: "100%", height: "85vh" }}
        />
        <div className="text-container">
          <p className="text-white mb-0">Welcome to HCMS student portal</p>{" "}
        </div>

        <Container fluid style={{ position: "absolute", top: "50%", left: "40%" }}>
          <Button
            variant="primary"
            style={{
              color: "whitesmoke",
              borderRadius: "30px",
              backgroundColor: "#ef4398",
              borderBlockColor: "white",
            }}
            onClick={handleStudentLogin} // Call handleStudentLogin on button click
          >
            <PiStudentDuotone style={{ marginRight: "5px" }} /> Student Login
          </Button>{" "}
          <Button
            variant="primary"
            style={{
              color: "whitesmoke",
              borderRadius: "30px",
              marginLeft: "20px",
              backgroundColor: "#ef4398",
              borderBlockColor: "white",
            }}
            onClick={handleAdminLogin} // Call handleAdminLogin on button click
          >
            <RiAdminLine style={{ marginRight: "5px" }} /> Admin Login
          </Button>
        </Container>
      </div>
      <div
        style={{
          position: "absolute",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "#ef4398",
          color: "white",
        }}
      >
        <Footer />
      </div>
    </>
  );
};

export default Home;
