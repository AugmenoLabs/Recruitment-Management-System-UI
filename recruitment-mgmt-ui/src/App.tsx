import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import type { RootState } from './redux/store';
import { useSelector } from 'react-redux';

import Navbar from './components/Navbar/navbar.component';
import JobCards from './components/Dashboard/JobCard';
import Requisition from './components/Requisition/Requisition';
import CandidateFinalTable from './components/CandidateTable/CandidateFinalTable';
import CandidateApply from './components/CandidateApply/CandidateApply';
import JobDescription from './components/Dashboard/JobDescription';

import { styled } from '@mui/material/styles';
interface IProps {
  IsSidebarOpen: boolean;
}
const AppBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})<IProps>(({ theme, IsSidebarOpen }) => ({
  marginLeft: 64,
  marginTop: 64,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...((IsSidebarOpen ?? true) && {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const App: React.FunctionComponent = () => {
  const IsSidebarOpen = useSelector(
    (state: RootState) => state.Navbar.IsSidebarOpen
  );
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <AppBox IsSidebarOpen={IsSidebarOpen}>
          <Routes>
            <Route path="/" element={<JobCards />} />
            <Route path="/jobdescription" element={<JobDescription />} />
            <Route path="/applyforjobs" element={<CandidateApply />} />
            <Route path="/requisition" element={<Requisition />} />
            <Route path="/candidatedetails" element={<CandidateFinalTable />} />
          </Routes>
        </AppBox>
      </HashRouter>
    </div>
  );
};

export default App;
