// src/pages/EditPatient.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPatient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    name: '',
    age: '',
    gender: '',
    address: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:5001/api/patients/${id}`)
      .then(res => setPatient(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5001/api/patients/${id}`, patient)
      .then(() => navigate('/patients'))
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      <h2>Edit Patient</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={patient.name} onChange={handleChange} placeholder="Name" required />
        <input name="age" value={patient.age} onChange={handleChange} placeholder="Age" type="number" required />
        <input name="gender" value={patient.gender} onChange={handleChange} placeholder="Gender" required />
        <input name="address" value={patient.address} onChange={handleChange} placeholder="Address" required />
        <button type="submit">Update Patient</button>
      </form>
    </div>
  );
};

export default EditPatient;
