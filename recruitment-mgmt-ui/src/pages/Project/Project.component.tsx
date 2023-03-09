import React from 'react';
import './Project.style.scss';


import type { RootState } from './../../redux/store';
import { useSelector, useDispatch } from 'react-redux';

import { NavbarActions } from '../../redux/Navbar/slice';

import {
  Button,
  Box,
  Typography,
  ButtonGroup,
  IconButton,
} from '@mui/material';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import JobCards from '../../components/JobOpening/JobCard';
// import JobOpeningTable from '../../components/JobOpening/JobOpeningTable.component';
import GridViewIcon from '@mui/icons-material/GridView';
import { useNavigate } from 'react-router';
import { JobOpeningInterface } from '../../Interface/JobOpeningInterface';
import JobOpeningReport from '../../components/JobOpening/JobOpeningReport';
import AccountTable from '../../components/Account/AccountTable';
import ProjectTable from '../../components/Project/ProjectTable';
import AddProject from '../../components/Project/AddProject';
// import Example from '../../components/JobOpening/test';


const Project: React.FunctionComponent = () => {
  const IsListView = useSelector((state: RootState) => state.Navbar.IsListView);

  const dispatch = useDispatch();
  const history = useNavigate();
  const navigateform = (): void => {
    history('/AddProject');
  };

const users:JobOpeningInterface[]=[];
  return (
    <div className='page-body'>
      <Box className="page-header">
        <Typography variant="h6" 
            style={
              { 
                fontSize: '20px', 
                fontWeight: 500,                 
              }
              }>
          PROJECT(S)
        </Typography>
        <Box className="button-section">
          <AddProject/>
          {/* <Button variant="contained"
          onClick={navigateform}>Add Project</Button>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{  backgroundColor:'white' }}
          >
          </ButtonGroup> */}
        </Box>
      </Box>
      <ProjectTable/>

  </div>
  );
};

export default Project;
