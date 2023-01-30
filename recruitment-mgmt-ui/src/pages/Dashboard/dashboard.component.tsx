import React from 'react';

import { Button } from '@mui/material';

import PageHeader from "../../components/PageHeader/PageHeader.component";

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <PageHeader />
      <Button
        variant="contained"
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          float: 'right',
          marginLeft: '50rem',
        }}
      >
        New Position
      </Button>
    </>
  );
};

export default Dashboard;
