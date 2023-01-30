import React from 'react';

import { Typography } from '@mui/material';

const PageHeader: React.FunctionComponent = () => {
  return (
    <Typography
      variant="h6"
      style={{ fontSize: '24px', fontWeight: 600, marginLeft: '2rem' }}
    >
      JOB OPENINGS
    </Typography>
  );
};

export default PageHeader;
