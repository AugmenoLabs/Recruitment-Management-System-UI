import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar.component';
import JobCards from './components/Dashboard/JobCard';
import Requisition from './components/Requisition/Requisition';
// import CandidateTable from './components/CandidateTable/CandidateTable';
import CandidateFinalTable from './components/CandidateTable/CandidateFinalTable';
import CandidateApply from './components/CandidateApply/CandidateApply';
import JobDescription from './components/Dashboard/JobDescription';
// import Navbar from './components/Navbar/navbar.component';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<JobCards />} />
          <Route path="/jobdescription" element={<JobDescription />} />          
          <Route path="/applyforjobs" element={<CandidateApply />} />
          <Route path="/requisition" element={<Requisition />} />
          <Route path="/candidatedetails" element={<CandidateFinalTable />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
