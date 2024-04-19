import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const ComplaintForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate();

  

  const handleChange = (e) => {
    setValue(e.target.name, e.target.value);
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }

      const response = await axios.post(
        "http://localhost:5001/complaintform",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("Complaint submitted successfully");
        navigate("/student/dashboard");
      } else {
        alert("Failed to submit complaint. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting complaint:", error);
      alert("Internal server error. Please try again later.");
    }
  };

  const goToHomePage = () => {
    navigate("/student/dashboard");
  };

  return (
    <Container
      style={{
        backgroundColor: "#ef4398",
        borderRadius: "100px",
        maxHeight: "900px",
        maxWidth: "800px",
      }}
    >
      <Row style={{ marginBottom: "2%" }}>
        <Col
          style={{
            marginLeft: "80%",
            marginRight: "10%",
            fontSize: "37px",
            color: "#ef4398",
          }}
        >
          <button
            onClick={goToHomePage}
            style={{
              backgroundColor: "#ef4398",
              border: "none",
              color: "white",
            }}
          >
            <MdCancel />
          </button>
        </Col>
        <Col style={{ textAlign: "center", marginTop: "10px" }}>
          <h3>Complaint Form</h3>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            align: "center",
            marginBottom: "100px",
            marginTop: "10px",
            width: "auto",
          }}
        >
         
          <Form.Group className="mb-3">
            <Form.Label htmlFor="hostel_name">Hostel Name</Form.Label>
            <Form.Control
              as="select"
              id="hostel_name"
              name="hostel_name"
              {...register("hostel_name", { required: true })}
              onChange={handleChange}
            >
              <option value="">Select Hostel</option>
              <option value="AJANTA">AJANTA</option>
              <option value="SHILPA">SHILPA</option>
              <option value="ELLORA">ELLORA</option>
            </Form.Control>
            {errors.hostel_name && <p>Please select a hostel</p>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="mobile_number">Mobile Number</Form.Label>
            <Form.Control
              id="mobile_number"
              name="mobile_number"
              type="text"
              {...register("mobile_number", { required: true })}
              onChange={handleChange}
            />
            {errors.mobile_number && <p>Please enter your mobile number</p>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="date">Date</Form.Label>
            <Form.Control
              id="date"
              name="date"
              type="date"
              {...register("date", { required: true })}
              onChange={handleChange}
            />
            {errors.date && <p>Please select a date</p>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="room_number">Room Number</Form.Label>
            <Form.Control
              id="room_number"
              name="room_number"
              type="text"
              {...register("room_number", { required: true })}
              onChange={handleChange}
            />
            {errors.room_number && <p>Please enter your room number</p>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="block_id">Block ID</Form.Label>
            <Form.Control
              id="block_id"
              name="block_id"
              type="text"
              {...register("block_id", { required: true })}
              onChange={handleChange}
            />
            {errors.block_id && <p>Please enter the block ID</p>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="problem">Problem</Form.Label>
            <Form.Control
              as="select"
              id="problem"
              name="problem"
              {...register("problem", { required: true })}
              onChange={handleChange}
            >
              <option value="">Select Problem</option>
              <option value="ELECTRICAL">ELECTRICAL</option>
              <option value="PLUMBING">PLUMBING</option>
              <option value="MESS">MESS</option>
              <option value="OTHERS">OTHERS</option>
            </Form.Control>
            {errors.problem && <p>Please select a problem</p>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              id="description"
              name="description"
              {...register("description", { required: true })}
              onChange={handleChange}
            />
            {errors.description && <p>Please provide a description</p>}
          </Form.Group>
          <Button
            type="submit"
            style={{ backgroundColor: "white", border: "none", color: "blue" }}
          >
            Submit
          </Button>{" "}
        </Form>
      </Row>
    </Container>
  );
};

export default ComplaintForm;
