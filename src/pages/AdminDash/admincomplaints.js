import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Table } from 'react-bootstrap';
import Navbaradmin from '../../Components/admin/navbaradmin';
import Footer from '../../Components/home/fotter';
import { PDFDownloadLink, Page, View, Document, StyleSheet } from '@react-pdf/renderer';

const ComplaintsListAdmin = () => {
  const [complaints, setComplaints] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState({});
  const [updateId, setUpdateId] = useState('');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/complaints');
      const result = response.data.complaints.filter(complaint =>
        complaint.problem.toLowerCase().includes(filterValue.toLowerCase())
      );
      setComplaints(result);
      // Initialize selectedStatus for each complaint
      const initialStatus = {};
      result.forEach(complaint => {
        initialStatus[complaint.id] = '';
      });
      setSelectedStatus(initialStatus);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleStatusChange = (e, id) => {
    const { value } = e.target;
    setSelectedStatus(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleUpdateStatus = async (id) => {
    try {
      await axios.patch(`http://localhost:5001/complaints/${id}`, {
        status: selectedStatus[id],
      });
      setUpdateId(id); // Set the updated complaint ID to trigger re-fetching data
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  useEffect(() => {
    if (updateId) {
      fetchData(); // Re-fetch data after successful update
      setUpdateId(''); // Reset update ID
    }
  }, [updateId, filterValue]); // Trigger effect when updateId or filterValue changes

  // Create styles for PDF document
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  // Create PDF Document component
  const MyDocument = ({ complaints }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Hostel Name</th>
                <th>Date</th>
                <th>Room Number</th>
                <th>Block ID</th>
                <th>Problem</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint, index) => (
                <tr key={complaint.id}>
                  <td>{index + 1}</td>
                  <td>{complaint.hostel_name}</td>
                  <td>{complaint.date}</td>
                  <td>{complaint.room_number}</td>
                  <td>{complaint.block_id}</td>
                  <td>{complaint.problem}</td>
                  <td>{complaint.description}</td>
                  <td>{complaint.status}</td>
                  <td>
                    <select
                      value={selectedStatus[complaint.id]}
                      onChange={(e) => handleStatusChange(e, complaint.id)}
                    >
                      <option value="">Select Status</option>
                      <option value="Working">Working</option>
                      <option value="Completed">Completed</option>
                    </select>
                    <button
                      onClick={() => handleUpdateStatus(complaint.id)}
                      style={{
                        margin: 10,
                        borderRadius: '5px',
                        maxWidth: '100px',
                        maxHeight: '30px',
                        backgroundColor: 'black',
                        color: 'white',
                        borderColor: 'white',
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </View>
      </Page>
    </Document>
  );

  return (
    <>
      <Navbaradmin />
      <Container>
        <Row>
          <input
            type="text"
            placeholder="Search by problem..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </Row>
        <Row>
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
                <th>Status</th>
                <th>Update Status</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint, index) => (
                <tr key={complaint.id}>
                  <td>{index + 1}</td>
                  <td>{complaint.hostel_name}</td>
                  <td>{complaint.date}</td>
                  <td>{complaint.room_number}</td>
                  <td>{complaint.block_id}</td>
                  <td>{complaint.problem}</td>
                  <td>{complaint.description}</td>
                  <td>{complaint.status}</td>
                  <td>
                    <select
                      value={selectedStatus[complaint.id]}
                      onChange={(e) => handleStatusChange(e, complaint.id)}
                    >
                      <option value="">Select Status</option>
                      <option value="Working">Working</option>
                      <option value="Completed">Completed</option>
                    </select>
                    <button
                      onClick={() => handleUpdateStatus(complaint.id)}
                      style={{
                        margin: 10,
                        borderRadius: '5px',
                        maxWidth: '100px',
                        maxHeight: '30px',
                        backgroundColor: 'black',
                        color: 'white',
                        borderColor: 'white',
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>

      <PDFDownloadLink
        document={<MyDocument complaints={complaints} />}
        fileName="complaints.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>

      <Footer />
    </>
  );
};

export default ComplaintsListAdmin;
