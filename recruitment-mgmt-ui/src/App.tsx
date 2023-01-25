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
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
