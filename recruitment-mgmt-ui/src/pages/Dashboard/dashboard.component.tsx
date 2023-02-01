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

import JobCards from '../../components/Dashboard/JobCard';
import JobOpeningTable from '../../components/JobOpeningTable/JobOpeningTable.component';
import GridViewIcon from '@mui/icons-material/GridView';

const Dashboard: React.FunctionComponent = () => {
  const IsListView = useSelector((state: RootState) => state.Navbar.IsListView);

  const dispatch = useDispatch();
  return (
    <>
      <Box className="page-header">
        <Typography variant="h6" style={{ fontSize: '24px', fontWeight: 600 }}>
          JOB OPENINGS
        </Typography>
        <Box className="button-section">
          <Button variant="contained">New Position</Button>
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
                color={IsListView ? 'primary' : 'disabled'}
              />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => {
                dispatch(NavbarActions.changeListView(false));
              }}
            >
              <GridViewIcon color={!IsListView ? 'primary' : 'disabled'} />
            </IconButton>
          </ButtonGroup>
        </Box>
      </Box>
      {!IsListView ? <JobOpeningTable /> : <JobCards />}
    </>
  );
};

export default Dashboard;
