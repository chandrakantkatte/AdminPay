import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VendorListPage = () => {
  const [vendors, setVendors] = useState([]);
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [message, setMessage] = useState('');
  const [emailStatus, setEmailStatus] = useState('');

  useEffect(() => {
    // Fetch vendors with unsent emails
    axios.get('/api/vendors-unsent-emails')
      .then(response => {
        setVendors(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the vendors!", error);
      });
  }, []);

  const handleCheckboxChange = (email) => {
    setSelectedVendors(prevSelected =>
      prevSelected.includes(email)
        ? prevSelected.filter(e => e !== email)
        : [...prevSelected, email]
    );
  };

  const handleSelectAll = () => {
    setSelectedVendors(vendors.map(v => v.email));
  };

  const handleDeselectAll = () => {
    setSelectedVendors([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/send-emails', { emails: selectedVendors, message })
      .then(response => {
        setEmailStatus('Emails sent successfully!');
        setSelectedVendors([]); // Clear selection after sending
      })
      .catch(error => {
        setEmailStatus('Error sending emails. Please try again.');
        console.error("There was an error sending the emails!", error);
      });
  };

  return (
    <div>
      <h1>Vendors with Unsent Emails</h1>
      <button onClick={handleSelectAll}>Select All</button>
      <button onClick={handleDeselectAll}>Deselect All</button>
      <ul>
        {vendors.map(vendor => (
          <li key={vendor.email}>
            <input
              type="checkbox"
              checked={selectedVendors.includes(vendor.email)}
              onChange={() => handleCheckboxChange(vendor.email)}
            />
            {vendor.name} - {vendor.email}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Email</button>
      </form>
      {emailStatus && <p>{emailStatus}</p>}
    </div>
  );
};

export default VendorListPage;
