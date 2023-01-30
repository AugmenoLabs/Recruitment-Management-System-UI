import React from 'react';
import './App.css';
import {HashRouter, Route, Routes } from 'react-router-dom';
import MiniDrawer from './components/Navbar/drawer.component';
import JobCards from './components/Dashboard/JobCard';
import Requisition from './components/Requisition/Requisition';
import CandidateTable from './components/CandidateTable/CandidateTable';
// import Navbar from './components/Navbar/navbar.component';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
     
      <HashRouter>
      <MiniDrawer />
        <Routes>
          <Route path="/" element={<JobCards />} />
          <Route path="/requisition" element={<Requisition />} />
          <Route path="/candidatedetails" element={<CandidateTable />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
