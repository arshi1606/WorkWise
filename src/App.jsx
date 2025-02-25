import React, { useState } from "react";
import AddEmployeeForm from "./components/AddEmployeeForm.jsx";
import EmployeeTable from "./components/EmployeeTable.jsx";
import EditEmployeeForm from "./components/EditEmployeeForm.jsx";
import { Container, Row, Col, Button } from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./assets/logo.svg"
const App = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const addEmployee = (employee) => {
    setEmployees([...employees, { id: Date.now(), ...employee }]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );
    setEditingEmployee(null);
  };

  return (
    <Container fluid className="py-4 d-flex justify-content-center align-items-center">
      <Row>
        <Col md={4} className="d-flex justify-content-center align-items-center">
          {/* Left Side (Logo) */}
          <img src={Logo} alt="Logo" className="logo" />
        </Col>
        <Col md={8}>
          {/* Right Side (Content) */}
          <h1 className="text-center mb-4">WorkWise</h1>
          <h3 className="text-center mb-2"> A Employee Management App</h3>
          <Row className="mb-4">
            <Col>
              <AddEmployeeForm addEmployee={addEmployee} />
            </Col>
          </Row>
          <Row>
            <Col>
              <EmployeeTable
                employees={employees}
                deleteEmployee={deleteEmployee}
                setEditingEmployee={setEditingEmployee}
              />
            </Col>
          </Row>
          
          <Row>
            <Col>
              {editingEmployee && (
                <EditEmployeeForm
                  employee={editingEmployee}
                  updateEmployee={updateEmployee}
                />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
