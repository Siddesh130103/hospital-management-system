import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewBills = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/bills')
      .then(res => setBills(res.data))
      .catch(err => console.error('Error fetching bills:', err));
  }, []);
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>All Bills</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Doctor Fee</th>
            <th>Room Charge</th>
            <th>Medication Cost</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill._id}>
              <td>{bill.patientId}</td>
              <td>₹{bill.doctorFee}</td>
              <td>₹{bill.roomCharge}</td>
              <td>₹{bill.medicationCost}</td>
              <td>₹{bill.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBills;
