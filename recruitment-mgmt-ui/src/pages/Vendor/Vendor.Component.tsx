import React from 'react';
import './Vendor.Style.scss';
import { Box, Typography } from '@mui/material';
import AddVendor from '../../components/Vendor/AddVendor';
import VendorTable from '../../components/Vendor/VendorTable';
import { VendorInterface } from '../../Interface/VendorInterface';

const Vendor: React.FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const users: VendorInterface[] = [];
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
          VENDOR(S)
        </Typography>
        <Box className="button-section">
          <AddVendor />
        </Box>
      </Box>
      <VendorTable />
    </div>
  );
};

export default Vendor;
