import { Box, Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { getToken } from '../../API/GetToken';
import { UserInterface } from '../../Interfaces/UserInterface';


const AddUser: React.FunctionComponent = () => {
  const [user, setUser] = useState<UserInterface>({
    id:'',
    username: '',   
    email: '',
    firstName: '',
    lastName: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit =  async (event:React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const token = await getToken();
    await axios.post('/admin/realms/MyRealm/users', user,{
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
          Add User
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            label="Username"
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />

          <TextField
            margin="normal"
            fullWidth
            label="Email"
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <TextField
            margin="normal"
            fullWidth
            label="First Name"
            type="text"
            name="firstName"
             value={user.firstName}
             onChange={handleChange}
          />
          <TextField
            id="outlined-textarea"
            margin="normal"
            fullWidth
            label="Last Name"
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Add User
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddUser;
