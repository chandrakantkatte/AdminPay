import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure this path is correct

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/employees">Add Employee</Link>
          </li>
          <li>
            <Link to="/vendors">Add Vendor</Link>
          </li>
          <li>
            <Link to="/email-records">Email Records</Link>
          </li>
          <li>
            <Link to="/send-emails">Send Emails</Link> {/* Link to Send Emails Page */}
          </li>
          <li>
            <Link to="/employee-list">Employee List</Link>
          </li>
          <li>
            <Link to="/vendor-list">Vendor List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
