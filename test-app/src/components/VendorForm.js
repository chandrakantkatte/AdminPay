import React, { useState } from 'react';
import axios from 'axios';
import './VendorForm.css'; // Import the CSS file

const VendorForm = () => {
  const [vendor, setVendor] = useState({
    name: '',
    email: '',
    upi: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendor(prevVendor => ({
      ...prevVendor,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation logic to check if all required fields are filled
    if (!vendor.name || !vendor.email || !vendor.upi) {
      setError('All fields are required.');
      setMessage(''); // Clear any previous success messages
      return;
    }

    try {
      const response = await axios.post('http://localhost:8085/admin/vendor', vendor);
      setMessage(response.data); // Use the message from the backend response
      setError(''); // Clear any previous error messages
      setVendor({ name: '', email: '', upi: '' }); // Clear form fields
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setError('Vendor with this email already exists.');
      } else {
        setError('Error adding vendor. Please try again.');
      }
      setMessage(''); // Clear any previous success messages
      console.error('Error adding vendor:', error);
    }
  };

  return (
    <div className="vendor-form-container">
      <div className="vendor-form">
        <div className="title">Add Vendor</div>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={vendor.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={vendor.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div>
            <label>UPI:</label>
            <input
  type="text"
  name="upi"
  value={vendor.upi}
  onChange={handleChange}
  placeholder="UPI"
  required           
  
  title="UPI should be between 4 and 15 characters, containing only letters and numbers"
/>

          </div>
          <div className='sub'><button type="submit">Add Vendor</button></div>
        </form>
      </div>
    </div>
  );
};

export default VendorForm;
