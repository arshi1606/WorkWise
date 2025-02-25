import React from 'react';
import "../style/EmployeeTable.css"

const EmployeeTable = ({ employees, deleteEmployee, setEditingEmployee }) => {
  return (
    <table className='table' >
      <thead style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }} >
        <tr className='tablebody' >
          <th >First Name</th>
          <th >Last Name</th>
          <th >Email ID</th>
          <th >Contact Number</th>
          <th>Job Title</th>
          <th >Job Description</th>
          <th >Job Role</th>
          <th >Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.length > 0 ? (
          employees.map((employee) => (
            <tr className='tablebody' key={employee.id}>
              <td  >{employee.firstName}</td>
              <td >{employee.lastName}</td>
              <td >{employee.emailid}</td>
              <td >{employee.number}</td>
              <td >{employee.jobTitle}</td>
              <td >{employee.jobDescription}</td>
              <td >{employee.jobRole}</td>
              <td >
                <button onClick={() => setEditingEmployee(employee)}>Modify Data</button>
                <button onClick={() => deleteEmployee(employee.id)}>Delete Data</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="8">No Record Found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
