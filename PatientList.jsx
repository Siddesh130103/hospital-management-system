import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/patients')
      .then(res => setPatients(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      axios.delete(`http://localhost:5001/api/patients/${id}`)
        .then(() => setPatients(patients.filter(p => p._id !== id)))
        .catch(err => console.error(err));
    }
  };

  return (
    <div className="container">
      <h2>Patient List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Age</th><th>Gender</th><th>Address</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient._id}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.address}</td>
              <td>
                <Link to={`/patients/view/${patient._id}`}>View</Link>{" | "}
                <Link to={`/patients/edit/${patient._id}`}>Edit</Link>{" | "}
                <button onClick={() => handleDelete(patient._id)}>Delete</button>{" | "}
                <Link to={`/bills/generate/${patient._id}`}>Generate Bill</Link>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
