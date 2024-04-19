import React, { useState } from 'react';
import Footer from '../../Components/home/fotter';
import axios from 'axios';
const Passwordchg = ()=>{


  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmNewPassword) {
      alert('New passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/change-password', formData);
      alert(response.data.message);
      setFormData({
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      });
    } catch (error) {
      console.error('Error:', error.response.data.message);
      alert(error.response.data.message); 
    }
  };

  return (
        <>

    <form onSubmit={handleSubmit}>
      <input
        type="password"
        name="oldPassword"
        value={formData.oldPassword}
        onChange={handleChange}
        placeholder="Old Password"
      />
      <input
        type="password"
        name="newPassword"
        value={formData.newPassword}
        onChange={handleChange}
        placeholder="New Password"
      />
      <input
        type="password"
        name="confirmNewPassword"
        value={formData.confirmNewPassword}
        onChange={handleChange}
        placeholder="Confirm New Password"
      />
      <button type="submit">Change Password</button>
    </form>    
    <div style={{position:"absolute", left:"0", right:"0",bottom:"0"}}>
            <Footer/>

     </div>
    </>
  );




}

export default Passwordchg;