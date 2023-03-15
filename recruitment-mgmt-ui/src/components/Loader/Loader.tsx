import { CircularProgress } from '@mui/material';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Loader = () => {
  return (
    <div>
      <CircularProgress
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '80px',
          height: '80px',
          margin: '10%',
          marginLeft: '50%',
        }}
      />
    </div>
  );
};

export default Loader;
