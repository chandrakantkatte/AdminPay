import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SendEmailsPage.css'; // Ensure this path is correct

const SendEmailsPage = () => {
  const [vendors, setVendors] = useState([]);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    // Fetch vendors with unsent emails when the component mounts
    axios.get('http://localhost:8085/admin/vendors-unsent-emails')
      .then(response => {
        setVendors(response.data);
      })
      .catch(error => {
        console.error('Error fetching vendors:', error);
        setStatusMessage('Error fetching vendors.');
      });
  }, []);

  const handleCheckboxChange = (email) => {
    setSelectedEmails(prevState =>
      prevState.includes(email)
        ? prevState.filter(e => e !== email)
        : [...prevState, email]
    );
  };

  const handleSelectAll = () => {
    const allEmails = vendors.map(vendor => vendor.email);
    setSelectedEmails(allEmails);
  };

  const handleDeselectAll = () => {
    setSelectedEmails([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8085/admin/send-emails', { emails: selectedEmails })
      .then(response => {
        setStatusMessage('Emails sent successfully!');
        // Optionally refresh vendor list or handle success
        axios.get('/api/vendors-unsent-emails')
          .then(response => setVendors(response.data))
          .catch(error => console.error('Error fetching updated vendors:', error));
      })
      .catch(error => {
        setStatusMessage('Error sending emails.');
        console.error('Error sending emails:', error);
      });
  };

  return (
    <div className="send-emails-page">
      <h1>Send Emails</h1>
      {statusMessage && <p className={statusMessage.startsWith('Error') ? 'error' : 'success'}>{statusMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="checkbox-container">
          <button type="button" onClick={handleSelectAll}>Select All</button>
          <button type="button" onClick={handleDeselectAll}>Deselect All</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Select</th>
              <th>Name</th>
              <th>Email</th>
              <th>UPI</th>
            </tr>
          </thead>
          <tbody>
            {vendors.length > 0 ? (
              vendors.map(vendor => (
                <tr key={vendor.email}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedEmails.includes(vendor.email)}
                      onChange={() => handleCheckboxChange(vendor.email)}
                    />
                  </td>
                  <td>{vendor.name}</td>
                  <td>{vendor.email}</td>
                  <td>{vendor.upi}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No vendors with unsent emails.</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className='btnSubmit'><button type="submit" >Send Emails</button></div>
      </form>
    </div>
  );
};

export default SendEmailsPage;
