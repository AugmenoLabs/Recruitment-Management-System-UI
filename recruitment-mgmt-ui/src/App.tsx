import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import type { RootState } from './redux/store';
import { useSelector } from 'react-redux';
import NavBar from './components/Navbar/navbar.component';
import Dashboard from "./pages/Dashboard/dashboard.component";
import Requisition from './components/Requisition/Requisition';
import CandidateTable from './components/CandidateTable/CandidateTable';
import CandidateApply from './components/CandidateApply/CandidateApply';
import { styled } from '@mui/material/styles';
import AddAccount from './components/Account/AddAccount';
import AddProject from './components/Project/AddProject';
import AccountTable from './components/Account/AccountTable';
import InterviewForm from './components/Interview/InterviewForm';
import InterviewFinalTable from './components/Interview/InterviewFinalTable';
import Candidatepi from './components/CandidateApply/Candidatepi';
import Candidatejob from './components/CandidateApply/Candidatejob';
import CandidateCompensation from './components/CandidateApply/CandidateCompensation';
import Candidateresume from './components/CandidateApply/Candidateresume';
import ManagementPage from './components/UserManagement/ManagementPage';
import RoleMapping from './components/UserManagement/RoleMapping';
import FinalJD from './components/Applied Candidates/FinalJD';
import InterviewDetailTable from './components/InterviewDetailTable/InterviewDetails';
import AddRole from './components/UserManagement/AddRole';
import AddUser from './components/UserManagement/AddUser';

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
      <BrowserRouter>
        <NavBar />
      
        <AppBox IsSidebarOpen={IsSidebarOpen}>
          <Routes>
            <Route path="" element={<Dashboard />} />
            <Route path="/jobdescription" element={<FinalJD />} />
            <Route path="/candidatecompensation" element={<CandidateCompensation />} />    
            <Route path="/candidatecompensation" element={<CandidateCompensation />} />
      
            <Route path="/candidatecompensation" element={<CandidateCompensation />} />
            <Route path="/uploadresume" element={<Candidateresume />} />
            <Route path="/candidatepi" element={<Candidatepi />} />
            <Route path="/candidatejob" element={<Candidatejob />} />
            <Route path="/applyforjobs" element={<CandidateApply />} />
            <Route path="/requisition" element={<Requisition />} />
            <Route path="/candidatedetails" element={<CandidateTable />} />
            <Route path="/AddAccount" element={<AddAccount />} />
            <Route path="/AddProject" element={<AddProject />} />
            <Route path="/Accountdetails" element={<AccountTable />} />
            <Route path="/scheduleinterview" element={<InterviewForm />} />
            <Route path="/interviewdetails" element={<InterviewFinalTable />} />
            <Route path="/interviewdetailview" element={<InterviewDetailTable />} />
            <Route path="/UserDetails" element={<ManagementPage />} />
            <Route path="/AddUser" element={<AddUser/>} />
            <Route path="/AddRole" element={<AddRole/>} />
            <Route path="/RoleMapping/:id" element={<RoleMapping/>} />
          </Routes>
        </AppBox>
      </BrowserRouter>
    </div>
  );
};

export default App;