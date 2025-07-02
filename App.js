import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddPatient from './pages/AddPatient';
import ViewPatients from './pages/ViewPatients';
import GenerateBill from './pages/GenerateBill';
import ViewBills from './pages/ViewBills';
import PatientList from './pages/PatientList';
import EditPatient from './pages/EditPatient';



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddPatient />} />
        <Route path="/patients" element={<ViewPatients />} />
        <Route path="/generate-bill" element={<GenerateBill />} />
        <Route path="/view-bills" element={<ViewBills />} />

        <Route path="/patients" element={<PatientList />} />
        <Route path="/patients/edit/:id" element={<EditPatient />} />

      </Routes>
    </div>
  );
}

export default App;
