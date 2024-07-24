import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import EmployeeForm from './components/EmployeeForm';
import VendorForm from './components/VendorForm';
import EmailRecords from './components/EmailRecords';
import Home from './components/Home';
import EmailForm from './components/EmailForm';
import EmployeeList from './components/EmployeeList';
import VendorList from './components/VendorList';
import SendEmailsPage from './components/SendEmailsPage'; // Import the new component

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<EmployeeForm />} />
            <Route path="/vendors" element={<VendorForm />} />
            <Route path="/email-records" element={<EmailRecords />} />
            <Route path="/email-form" element={<EmailForm />} />
            <Route path="/employee-list" element={<EmployeeList />} />
            <Route path="/vendor-list" element={<VendorList />} />
            <Route path="/send-emails" element={<SendEmailsPage />} /> {/* Add route for the new page */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
