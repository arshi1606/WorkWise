import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

const AddEmployeeForm = ({ addEmployee }) => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    emailid: '',
    number: '',
    jobTitle: '',
    jobDescription: '',
    jobRole: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee);
    setEmployee({
      firstName: '',
      lastName: '',
      emailid: '',
      number: '',
      jobTitle: '',
      jobDescription: '',
      jobRole: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>Email ID</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="emailid"
          value={employee.emailid}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridNumber">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter contact number"
          name="number"
          value={employee.number}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridJobTitle">
        <Form.Label>Job Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter job title"
          name="jobTitle"
          value={employee.jobTitle}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridJobDescription">
        <Form.Label>Job Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter job description"
          name="jobDescription"
          value={employee.jobDescription}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridJobRole">
        <Form.Label>Job Role</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter job role"
          name="jobRole"
          value={employee.jobRole}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Information
      </Button>
    </Form>
  );
};

export default AddEmployeeForm;
