import React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ManageUser from './ManageUser' ;
import { Box, Typography } from '@mui/material';
import ManageRoles from './ManageRoles';

  const ManagementPage: React.FunctionComponent = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) :void=> {
    setValue(newValue);
  };

  return (
    <>
    <Box sx={{ marginTop: '4rem', marginLeft:'4rem' } }>
      <Typography
        gutterBottom
        variant="h5"
        sx={{
          paddingLeft: '2rem',
          paddingTop: '0.7rem',
          margin: 0,
          fontWeight: 600,
          fontSize: '30px',
        }}
        className="tableheader"
      >
        User Roles
      </Typography>
      <Box sx={{ marginTop: '2rem', marginLeft:'4rem' } }>
      <TabContext value={value}>
        <Box  sx={{ borderBottom: 1, borderColor: 'divider', width:'80%'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Users" value="1" />
            <Tab label="Roles" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><ManageUser/></TabPanel>
        <TabPanel value="2"><ManageRoles/></TabPanel>
      </TabContext>
      </Box>
      </Box>
    </>
  );
};

export default ManagementPage;