import React, { useState } from 'react';

const EditEmployeeForm = ({ employee, updateEmployee }) => {
  const [updatedEmployee, setUpdatedEmployee] = useState(employee);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEmployee({ ...updatedEmployee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(updatedEmployee);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        value={updatedEmployee.firstName}
        onChange={handleChange}
        required
      />
      <input
        name="lastName"
        value={updatedEmployee.lastName}
        onChange={handleChange}
        required
      />
      <input
        name="jobTitle"
        value={updatedEmployee.jobTitle}
        onChange={handleChange}
        required
      />
      <input
        name="jobDescription"
        value={updatedEmployee.jobDescription}
        onChange={handleChange}
        required
      />
      <input
        name="jobRole"
        value={updatedEmployee.jobRole}
        onChange={handleChange}
        required
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditEmployeeForm;
