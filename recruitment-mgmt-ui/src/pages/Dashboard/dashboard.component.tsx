import React from 'react';
import './Dashboard.style.scss';

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
import JobOpeningTable from '../../components/JobOpening/JobOpeningTable.component';
import GridViewIcon from '@mui/icons-material/GridView';
import { useNavigate } from 'react-router';
import { JobOpeningInterface } from '../../Interface/JobOpeningInterface';


const Dashboard: React.FunctionComponent = () => {
  const IsListView = useSelector((state: RootState) => state.Navbar.IsListView);

  const dispatch = useDispatch();
  const history = useNavigate();
  const navigateform = (): void => {
    history('/requisition');
  };
const users:JobOpeningInterface[]=[];
  return (
    <>
      <Box className="page-header">
        <Typography variant="h6" style={{ fontSize: '24px', fontWeight: 600 ,fontFamily:'sans-serif',marginTop:'1rem'}}>
          JOB OPENINGS
        </Typography>
        <Box className="button-section">
          <Button variant="contained"
          onClick={navigateform}>New Position</Button>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ ml: 4 }}
          >
            <IconButton
              aria-label="delete"
              onClick={() => {
                dispatch(NavbarActions.changeListView(true));
              }}
            >
              <FormatListBulletedIcon
                color={!IsListView ? 'primary' : 'disabled'}
              />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => {
                dispatch(NavbarActions.changeListView(false));
              }}
            >
              <GridViewIcon color={IsListView ? 'primary' : 'disabled'} />
            </IconButton>
          </ButtonGroup>
        </Box>
      </Box>
      {IsListView ?  <JobCards />:<JobOpeningTable users={users} /> }
:    </>
  );
};

export default Dashboard;
