import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewPatients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/patients');
        setPatients(res.data); // ✅ Now defined
      } catch (err) {
        console.error('Error fetching patients:', err);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Patient List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Age</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Gender</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Address</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, idx) => (
            <tr key={idx}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{patient.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{patient.age}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{patient.gender}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{patient.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewPatients;
