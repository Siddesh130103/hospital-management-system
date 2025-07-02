import React, { useState } from 'react';
import axios from 'axios';

const AddPatient = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const patientData = { name, age, gender, address };

    try {
      await axios.post('http://localhost:5001/api/patients', patientData);
      alert('Patient added successfully!');
      // Reset form
      setName('');
      setAge('');
      setGender('');
      setAddress('');
    } catch (error) {
      console.error('Error adding patient:', error);
      alert('Failed to add patient.');
    }
  };

  return (
    <div className="container">
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
};

export default AddPatient;
