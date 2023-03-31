import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import type { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import NavBar from '../components/Navbar/navbar.component';
import { styled } from '@mui/material';
import Dashboard from '../pages/Dashboard/dashboard.component';
import CandidateApply from '../components/CandidateForm/CandidateForm';
import CandidateTable from '../components/CandidateTable/CandidateTable';
import AddAccount from '../components/Account/AddAccount';
import AddProject from '../components/Project/AddProject';
// import AccountTable from '../components/Account/AccountTable';
import InterviewForm from '../components/InterviewCalendar/InterviewForm';
import AddUser from '../components/UserManagement/AddUser';
// import ProjectTable from '../components/Project/ProjectTable';
import AddVendor from '../components/Vendor/AddVendor';
import FinalJD from '../pages/FinalJD';
import JobOpeningForm from '../components/CreateOpening/JobOpeningForm';
import InterviewFinalTable from '../components/InterviewCalendar/InterviewFinalTable';
import InterviewDetailTable from '../components/InterviewDetailTable/InterviewDetailTable';
import AddRole from '../components/UserManagement/AddRole';
import RoleMapping from '../components/UserManagement/RoleMapping';
import Account from '../pages/Account/account.component';
import Project from '../pages/Project/Project.component';
import Vendor from '../pages/Vendor/Vendor.Component';
import UserRoles from '../pages/UserRoles/UserRoles.Component';

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

const Approutes:React.FunctionComponent=()=>{
    const IsSidebarOpen = useSelector(
        (state: RootState) => state.Navbar.IsSidebarOpen
      );
return(
    <>
     <BrowserRouter>
        <NavBar />
      
        <AppBox IsSidebarOpen={IsSidebarOpen}>
          <Routes>
            <Route path="" element={<Dashboard />} />
            <Route path="/jobdescription/:id" element={<FinalJD />} />
            {/* <Route path="/candidatecompensation" element={<CandidateCompensation />} />    
            <Route path="/candidatecompensation" element={<CandidateCompensation />} />
      
            <Route path="/candidatecompensation" element={<CandidateCompensation />} />
            <Route path="/uploadresume" element={<Candidateresume />} />
            <Route path="/candidatepi" element={<Candidatepi />} />
            <Route path="/candidatejob" element={<Candidatejob />} /> */}
            <Route path="/applyforjobs/:id" element={<CandidateApply />} />
            <Route path="/requisition" element={<JobOpeningForm />} />
            <Route path="/candidatedetails" element={<CandidateTable />} />
            <Route path="/AddAccount" element={<AddAccount />} />
            <Route path="/AddProject" element={<AddProject />} />
            <Route path="/Accountdetails" element={<Account />} />
            <Route path="/scheduleinterview" element={<InterviewForm />} />
            <Route path="/interviewdetails" element={<InterviewFinalTable />} />
            <Route path="/interviewdetailview" element={<InterviewDetailTable />} />
            <Route path="/UserDetails" element={<UserRoles />} />
            <Route path="/AddUser" element={<AddUser/>} />
            <Route path="/AddRole" element={<AddRole/>} />
            <Route path="/ProjectDetails" element={<Project/>} />
            <Route path="/VendorDetails" element={<Vendor/>} />
            <Route path="/AddVendor" element={<AddVendor/>} />
            <Route path="/RoleMapping/:id" element={<RoleMapping/>} />
          </Routes>
        </AppBox>
      </BrowserRouter>
    </>
)
}

export default Approutes;