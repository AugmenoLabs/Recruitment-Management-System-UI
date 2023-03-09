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
    <Box sx={{ marginTop: '4rem' } }>
      <Typography
        gutterBottom
       
        sx={{
          paddingLeft: '2rem',
          paddingTop: '1.5rem',
          margin: 0,
          fonFfamily:'sans-serif',
          fontWeight: 600,
          fontSize: '24px',
        }}
        // className="tableheader"
      >
        USER ROLES
      </Typography>
      <Box sx={{ marginTop: '2rem',marginLeft:'2rem'} } justifyContent='center' alignItems='center'>
      <TabContext value={value}>
        <Box  sx={{ borderBottom: 1, borderColor: 'divider', width:'95%'}} justifyContent='center' alignItems='center'>
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
