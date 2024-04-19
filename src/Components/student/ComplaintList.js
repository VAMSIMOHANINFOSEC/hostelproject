import React, { useState, useEffect, useContext } from "react";
import Navbarstudent from "./navbarstudent";
import Footer from "../../Components/home/fotter";
import Table from 'react-bootstrap/Table';
import { UserContext } from "../../usercontext_service";

const ComplaintsList = () => {
  const [data, setData] = useState(null);
  const [rowNumber] = useState(1); 

  const user = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []); // Empty array ensures the effect runs once on mount

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5001/complaints/' + user.studentid
    
    );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <>
      <Navbarstudent />

      <div style={{ marginTop: "20px", textAlign: "center", borderColor:"black", marginBottom:"20px" }}>
        <h1 style={{fontSize:"20px", marginBottom:"20px"}}>Complaints List</h1>
        {data && data.complaints ? (
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Hostel Name</th>
                  <th>Date</th>
                  <th>Room Number</th>
                  <th>Block ID</th>
                  <th>Problem</th>
                  <th>Description</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {data.complaints.map((complaint, index) => (
                  <tr key={index}>
                    <td>{rowNumber + index}</td>
                    <td>{complaint.hostel_name}</td>
                    <td>{complaint.date}</td>
                    <td>{complaint.room_number}</td>
                    <td>{complaint.block_id}</td>
                    <td>{complaint.problem}</td>
                    <td>{complaint.description}</td>
                    <td>{complaint .status}</td>

                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div style={{position:"absolute", left:"0", right:"0",bottom:"0"}}>
            <Footer/>

     </div>
    </>
  );
};

export default ComplaintsList;
