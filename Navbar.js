import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Hospital Management</h2>
      <div>
        <Link to="/">Add Patient</Link>
        <Link to="/patients">View Patients</Link>
        <Link to="/generate-bill">Generate Bill</Link>
        <Link to="/view-bills">View Bills</Link>

      </div>
    </nav>
  );
}

export default Navbar;
