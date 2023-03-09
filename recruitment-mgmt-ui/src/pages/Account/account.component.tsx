import React from 'react';
import './Account.style.scss';


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
// import Example from '../../components/JobOpening/test';


const Account: React.FunctionComponent = () => {
  const IsListView = useSelector((state: RootState) => state.Navbar.IsListView);

  const dispatch = useDispatch();
  const history = useNavigate();
  const navigateform = (): void => {
    history('/AddAccount');
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
          ACCOUNT(S)
        </Typography>
        <Box className="button-section">
          <Button variant="contained"
          onClick={navigateform}>Add Account</Button>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{  backgroundColor:'white' }}
          >
          </ButtonGroup>
        </Box>
      </Box>
      <AccountTable/>

  </div>
  );
};

export default Account;
