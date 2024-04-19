import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import Footer from '../home/fotter';
import Navbarstudent from './navbarstudent';
const Changepassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'oldPassword') setOldPassword(value);
    else if (name === 'newPassword') setNewPassword(value);
    else if (name === 'confirmPassword') setConfirmPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('New password and confirmation password do not match');
      return;
    }

    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData || !Array.isArray(userData) || userData.length === 0) {
      setMessage('User data not found or invalid format. Please log in again.');
      return;
    }
      const { username } = userData[0]; 
    try {
      const response = await axios.put(`http://localhost:5001/users/${username}/password`, {
        currentPassword: oldPassword,
        newPassword,
        newPasswordConfirm: confirmPassword,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error changing password:', error);
      setMessage('Error changing password. Please try again.');
    }
  };

  return (
    <>
    <Navbarstudent/>
      <Container style={{justifyContent:"center",maxWidth:"400px"}} >
        <h2 style={{textAlign:"center", marginTop:"10%", fontSize:"20px"}}>Change Password</h2>
        <Form onSubmit={handleSubmit} style={{maxWidth:"400px", marginTop:"30%", fontSize:"16px"}}>
          <Form.Group controlId="oldPassword">
            <Form.Label>Old Password:</Form.Label>
            <Form.Control
              type="password"
              name="oldPassword"
              value={oldPassword}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="newPassword">
            <Form.Label>New Password:</Form.Label>
            <Form.Control
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" style={{marginTop:"20px"}}>
            Change Password
          </Button>
        </Form>
        {message && <p>{message}</p>}
      </Container>
      <div style={{position:"absolute", left:"0", right:"0",bottom:"0"}}>
            <Footer/>

     </div>    </>
  );
};

export default Changepassword;
