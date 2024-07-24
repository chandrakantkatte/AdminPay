import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmailRecords.css'; // Ensure this path is correct

const EmailRecords = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8085/admin/email-records')
      .then(response => {
        setRecords(response.data);
      })
      .catch(error => {
        console.error('Error fetching email records:', error);
      });
  }, []);

  return (
    <div>
      <h2>Email Records</h2>
      {records.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Vendor Name</th>
              <th>UPI</th>
              <th>Message</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>{record.vendorName}</td>
                <td>{record.upi}</td>
                <td>{record.message}</td>
                <td>{record.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No email records found.</p>
      )}
    </div>
  );
};

export default EmailRecords;
