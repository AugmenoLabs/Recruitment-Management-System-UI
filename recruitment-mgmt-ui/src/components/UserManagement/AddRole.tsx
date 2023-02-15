import { Box, Button, Container,  TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { clientId } from '../../API/ClientDetails';
import { getToken } from '../../API/GetToken';
import { RoleInterface } from '../../Interfaces/RoleInterface';

const AddRole: React.FunctionComponent = () => {

  const [role, setRole] = useState<RoleInterface>({
    id:'',
    name: '',
    description: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole({ ...role, [event.target.name]: event.target.value });
  };

  const AddRole =  async (event:React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const token = await getToken();
    await axios.post(`/admin/realms/MyRealm/clients/${clientId}/roles`, role,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 18,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }} 
      >
        <Typography component="h1" variant="h4" style={{ marginTop: '-5rem' }}>
          Add Role
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            label="Role name"
            type="text"
            name="name"
            value={role.name}
            onChange={handleChange}
          />

          <TextField
            margin="normal"
            fullWidth
            label="Description"
            type="text"
            name="description"
            value={role.description}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={AddRole}
          >
            Add Role
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddRole;
