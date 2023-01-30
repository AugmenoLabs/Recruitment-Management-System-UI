import React from 'react';
import './App.css';
import {HashRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard/dashboard.component';

import MiniDrawer from './components/Navbar/drawer.component';
// import Navbar from './components/Navbar/navbar.component';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <MiniDrawer />
      <HashRouter>
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
