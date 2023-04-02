import React from 'react';
import './UserRoles.style.scss';
import { Box, Typography } from '@mui/material';
import ManagementPage from '../../components/UserManagement/ManagementPage';
import { UserInterface } from '../../Interface/UserInterface';

const UserRoles: React.FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const users: UserInterface[] = [];
  return (
    <div className="page-body">
      <Box className="page-header">
        <Typography
          variant="h6"
          style={{
            fontSize: '20px',
            fontWeight: 600,
          }}
        >
          USER ROLE(S)
        </Typography>
        <Box className="button-section">
          {/* <ManagementPage /> */}
        </Box>
      </Box>
      <ManagementPage />
    </div>
  );
};

export default UserRoles;
