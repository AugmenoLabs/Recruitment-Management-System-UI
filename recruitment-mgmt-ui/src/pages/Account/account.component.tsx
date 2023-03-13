import React from 'react';
import './Account.style.scss';
import { Box, Typography } from '@mui/material';
import AccountTable from '../../components/Account/AccountTable';
import { AccountInterface } from '../../Interface/AccountInterface';
import AddAccount from '../../components/Account/AddAccount';

const Account: React.FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const users: AccountInterface[] = [];
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
          ACCOUNT(S)
        </Typography>
        <Box className="button-section">
          <AddAccount />
        </Box>
      </Box>
      <AccountTable />
    </div>
  );
};

export default Account;
