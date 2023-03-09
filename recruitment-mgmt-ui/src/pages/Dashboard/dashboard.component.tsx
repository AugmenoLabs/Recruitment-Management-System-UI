import React from 'react';
import './Dashboard.style.scss';
import type { RootState } from './../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { NavbarActions } from '../../redux/Navbar/slice';
import { Box, Typography, ButtonGroup, IconButton } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import JobCards from '../../components/JobOpening/JobCard';
// import JobOpeningTable from '../../components/JobOpening/JobOpeningTable.component';
import GridViewIcon from '@mui/icons-material/GridView';
import { JobOpeningInterface } from '../../Interface/JobOpeningInterface';
import JobOpeningReport from '../../components/JobOpening/JobOpeningReport';
import JobOpeningForm from '../../components/CreateOpening/JobOpeningForm';

const Dashboard: React.FunctionComponent = () => {
  const IsListView = useSelector((state: RootState) => state.Navbar.IsListView);

  const dispatch = useDispatch();
  // const history = useNavigate();
  // const navigateform = (): void => {
  //   history('/requisition');
  // };

  const users: JobOpeningInterface[] = [];
  return (
    <div className="page-body">
      <Box className="page-header">
        <Typography
          variant="h6"
          style={{
            fontSize: '20px',
           
            fontWeight: 500,
          }}
        >
          OPEN POSITION(S)
        </Typography>
        <Box className="button-section">
          <JobOpeningForm />
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ ml: 4, backgroundColor: 'white' }}
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
      {/* {IsListView ?  <JobCards />:<JobOpeningTable users={users} /> } */}
      {IsListView ? <JobCards /> : <JobOpeningReport users={users} />}
      {/* <Example></Example> */}:{' '}
    </div>
  );
};

export default Dashboard;
