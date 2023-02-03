import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import type { RootState } from './redux/store';
import { useSelector } from 'react-redux';

import NavBar from './components/Navbar/navbar.component';

import Dashboard from "./pages/Dashboard/dashboard.component";

import Requisition from './components/Requisition/Requisition';
import CandidateFinalTable from './components/CandidateTable/CandidateFinalTable';
import CandidateApply from './components/CandidateApply/CandidateApply';
import JobDescription from './components/Dashboard/JobDescription';

import { styled } from '@mui/material/styles';
import AddAccount from './components/Account/AddAccount';
import AddProject from './components/Project/AddProject';
import AccountTable from './components/Account/AccountTable';
import InterviewForm from './components/Interview/InterviewForm';
import InterviewFinalTable from './components/Interview/InterviewFinalTable';
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
        <NavBar />
        <AppBox IsSidebarOpen={IsSidebarOpen}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/jobdescription" element={<JobDescription />} />
            <Route path="/applyforjobs" element={<CandidateApply />} />
            <Route path="/requisition" element={<Requisition />} />
            <Route path="/candidatedetails" element={<CandidateFinalTable />} />
            <Route path="/AddAccount" element={<AddAccount />} />
            <Route path="/AddProject" element={<AddProject />} />
            <Route path="/Accountdetails" element={<AccountTable/>} />
            <Route path="/scheduleinterview" element={<InterviewForm />} />
            <Route path="/interviewdetails" element={<InterviewFinalTable />} />
          </Routes>
        </AppBox>
      </HashRouter>
    </div>
  );
};

export default App;
