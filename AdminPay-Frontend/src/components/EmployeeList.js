import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EmployeeList.css'; 

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8085/admin/employees')
      .then(response => {
        console.log(response.data); // Check the data structure
        setEmployees(response.data);
        setError(''); // Clear any previous error messages
      })
      .catch(error => {
        setError('Error fetching employee data.');
        console.error('Error fetching employee data:', error);
      });
  }, []);

  return (
    <div className="employee-list-container">
      <h2 className="list-title">Employee List</h2>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      {employees.length > 0 ? (
        <div className="table-wrapper">
          <table className="employee-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Designation</th> {/* Update to match backend field */}
                <th>CTC</th> {/* Add CTC column if needed */}
              </tr>
            </thead>
            <tbody>
              {employees.map(employee => (
                <tr key={employee.email}>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.designation || 'N/A'}</td> {/* Use 'designation' */}
                  <td>{employee.ctc || 'N/A'}</td> {/* Display CTC if available */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeList;
