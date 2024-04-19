import React from "react";
import Navbarstudent from "../../Components/student/navbarstudent";
import Footer from "../../Components/home/fotter";
import "../css/sddb.css";
import studentImage from "../../assets/studentImage.jpg"; 
import { Container, Row , Col} from "react-bootstrap";

const StudentDashboard = () => {
  return (
    <>
      <Navbarstudent />
      <Container style={{}}>
      <Row>
      <Col>
            <div>
          <h1>Welcome to Student Dashboard</h1>
          <p>
            This is the place where you can view your student information,
            courses, grades, and more.
          </p>
        </div> 
      </Col>
      
        <Col>
        <div>
          <img src={studentImage} alt="Student"  style={{maxWidth:"700px", maxHeight:"700px"}}/>
        </div>
      </Col>
      
      </Row>
   
      </Container>
      <Footer />
    </>
  );
};

export default StudentDashboard;
