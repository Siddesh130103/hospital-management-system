import React, { useState } from 'react';
import axios from 'axios';

const GenerateBill = () => {
  const [patientId, setPatientId] = useState('');
  const [doctorFee, setDoctorFee] = useState('');
  const [roomCharge, setRoomCharge] = useState('');
  const [medicationCost, setMedicationCost] = useState('');
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const d = parseFloat(doctorFee) || 0;
    const r = parseFloat(roomCharge) || 0;
    const m = parseFloat(medicationCost) || 0;
    setTotal(d + r + m);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    calculateTotal(); // Ensure total is calculated

    const billData = {
      patientId,
      doctorFee: parseFloat(doctorFee),
      roomCharge: parseFloat(roomCharge),
      medicationCost: parseFloat(medicationCost),
      total: parseFloat(doctorFee) + parseFloat(roomCharge) + parseFloat(medicationCost),
    };

    try {
      await axios.post('http://localhost:5001/api/bills', billData);
      alert('Bill generated successfully');

      // Reset form
      setPatientId('');
      setDoctorFee('');
      setRoomCharge('');
      setMedicationCost('');
      setTotal(0);
    } catch (err) {
      console.error('Error generating bill:', err);
      alert('Failed to generate bill');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Generate Bill</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Patient ID"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Doctor Fee"
            value={doctorFee}
            onChange={(e) => setDoctorFee(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Room Charge"
            value={roomCharge}
            onChange={(e) => setRoomCharge(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Medication Cost"
            value={medicationCost}
            onChange={(e) => setMedicationCost(e.target.value)}
            required
          />
        </div>
        <div style={{ margin: '10px 0' }}>
          <strong>Total: ₹{parseFloat(total).toFixed(2)}</strong>
        </div>
        <button type="submit" style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px' }}>
          Generate
        </button>
      </form>
    </div>
  );
};

export default GenerateBill;
