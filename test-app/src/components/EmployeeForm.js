import React, { useState } from 'react';
import axios from 'axios';
import './EmployeeForm.css'; // Import the CSS file

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    designation: '', // Changed from position to designation
    ctc: '' // Added field for CTC
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation logic to check if all required fields are filled
    if (!employee.name || !employee.email || !employee.designation || !employee.ctc) {
      setError('All fields are required.');
      setMessage(''); // Clear any previous success messages
      return;
    }

    try {
      const response = await axios.post('http://localhost:8085/admin/employee', employee);
      setMessage(response.data); // Use the message from the backend response
      setError(''); // Clear any previous error messages
      setEmployee({
        name: '',
        email: '',
        designation: '',
        ctc: ''
      }); // Clear form fields
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setError('Employee with this email already exists.');
      } else {
        setError('Error submitting employee data. Please try again.');
      }
      setMessage(''); // Clear any previous success messages
      console.error('Error creating employee:', error); 
    }
  };

  return (
    <div className="employee-form-container">
      <div className="employee-form">
        <div className="title1">Create Employee</div>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={employee.name} onChange={handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={employee.email} onChange={handleChange} />
          </div>
          <div>
            <label>Designation:</label>
            <input type="text" name="designation" value={employee.designation} onChange={handleChange} />
          </div>
          <div>
            <label>CTC:</label>
            <input type="number" name="ctc" value={employee.ctc} onChange={handleChange} />
          </div>
          <div className="sub"><button type="submit" className="button">Submit</button></div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;
