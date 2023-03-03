import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AssignRole from './AssignRole';
import { RoleInterface } from '../../Interfaces/RoleInterface';
import { getToken } from '../../API/GetToken';
import axios from 'axios';
import { clientId } from '../../API/ClientDetails';
// import { UserInterface } from '../../Interfaces/UserInterface';
import { useParams } from 'react-router-dom';

const RoleMapping: React.FunctionComponent = () => {
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Role name', minWidth: 300 },
    { field: 'description', headerName: 'Description', minWidth: 300 },
    {
      field: 'selected',
      headerName: 'Selected',
      width: 100,
      renderCell: (params) => (
        <input
          type="checkbox"
          checked={selectedRows.includes(params.row)}
          onChange={(event) => handleRowSelection(event.target.checked, params.row)}
        />
      ),
    },
  ];
  const [rowdata, setRowdata] = useState<RoleInterface[]>([]);
  const { id } = useParams<{ id: string }>();
  const [selectedRows, setSelectedRows] = useState<RoleInterface[]>([]);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function handleRowSelection(checked: boolean, id:RoleInterface) {
    if (checked) {
      setSelectedRows([...selectedRows,id]);
    } else {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    }
  }

useEffect(() => {
  void GetAssignedRoles();
}, []);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const GetAssignedRoles = async () => {
  try {
    const token = await getToken();
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const response = await axios.get<RoleInterface[]>(`/admin/realms/MyRealm/users/${id}/role-mappings/clients/${clientId}`, {
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        'Authorization': `Bearer ${token}`
      }
    });
    setRowdata(response.data);
    
    console.log("def",response.data);
  } catch (error) {
    
    console.error(error);
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const handleDelete= async () => {
  try {
    const token = await getToken();
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    await axios.delete(`/admin/realms/MyRealm/users/${id}/role-mappings/clients/${clientId}`,{
    data: selectedRows ,
     
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }).then(response =>{
      console.log(response.data);
    });
    void GetAssignedRoles();
  }catch (error) {
    console.error(error);
  }
}

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
              justifyContent={'space-between'}
              // alignItems="center"
              display="flex"
              width={'80%'}
            >
              <Typography variant="h6">Assigned Roles</Typography>
              <Box m={1} display="flex">
                <AssignRole />
                <Button
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={handleDelete}
                  variant="contained"
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 0,
                    mb: 0,
                    ml: 5,
                  }}
                >
                  UnAssign
                </Button>
              </Box>
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
              <DataGrid rows={rowdata} columns={columns} 
              />
            </div>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default RoleMapping;
