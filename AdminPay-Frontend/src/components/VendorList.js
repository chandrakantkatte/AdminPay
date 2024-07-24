import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './VendorList.css'; 

const VendorList = () => {
  const [vendors, setVendors] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8085/admin/vendors')
      .then(response => {
        setVendors(response.data);
        setError(''); // Clear any previous error messages
      })
      .catch(error => {
        setError('Error fetching vendor data.');
        console.error('Error fetching vendor data:', error);
      });
  }, []);

  return (
    <div className="vender-Layout">
      <div className='listVendor'>Vendor List</div>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
      {vendors.length > 0 ? (
        <div className='tablealignment'>
        <table className="vendor-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>UPI</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map(vendor => (
              <tr key={vendor.email}>
                <td>{vendor.name}</td>
                <td>{vendor.email}</td>
                <td>{vendor.upi}</td>
                <td>{vendor.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      ) : (
        <p>No vendors found.</p>
      )}
    </div>
  );
};

export default VendorList;
