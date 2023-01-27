import React from 'react';
import './App.css';

import {HashRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard/dashboard.component';

import NavBar from './components/Navbar/NavBar.component';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">

      <NavBar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
