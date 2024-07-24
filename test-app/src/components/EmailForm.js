// src/components/EmployeeForm.js
import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    designation: '',
    ctc: '',
    email: ''
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8085/admin/employee', employee)
      .then(response => {
        console.log('Employee added successfully');
        // Clear form or handle response
      })
      .catch(error => {
        console.error('Error adding employee:', error);
      });
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder="Name" />
        <input type="text" name="designation" value={employee.designation} onChange={handleChange} placeholder="Designation" />
        <input type="text" name="ctc" value={employee.ctc} onChange={handleChange} placeholder="CTC" />
        <input type="email" name="email" value={employee.email} onChange={handleChange} placeholder="Email" />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
