import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Role name', minWidth: 300 },
  { field: 'Description', headerName: 'Description', minWidth: 300 },
];
interface AccountTableDatatype {
  id: string;
  Description: string;
}
const rowdata: AccountTableDatatype[] = [
  {
    id: 'HR',
    Description: 'role_HR',
  },
  {
    id: 'Manager',
    Description: 'role_Manager',
  },
  {
    id: 'Super Admin',
    Description: 'role_Admin',
  },
];

const RoleMapping: React.FunctionComponent = () => {
  return (
    <>
      <Box sx={{ marginTop: '4rem', marginLeft: '4rem' }}>
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
          Role Mapping
        </Typography>
        <Box sx={{ marginTop: '2rem', marginLeft: '4rem' }}>
          <div>
            <Box
              // justifyContent="center"
              // alignItems="center"
              display="flex"
              width={'80%'}
            >
              <h4>Assigned Roles</h4>
              <Button
                variant="contained"
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  mt: 0,
                  mb: 0,
                  marginLeft: 75,
                }}
              >
                UnAssign
              </Button>
            </Box>
          </div>
          <Paper
            sx={{
              width: '80%',
              overflow: 'hidden',
              marginLeft: '0rem',
              marginTop: '1rem',
            }}
          >
            <div style={{ height: 300, width: '100%' }}>
              <DataGrid rows={rowdata} columns={columns} checkboxSelection />
            </div>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default RoleMapping;
