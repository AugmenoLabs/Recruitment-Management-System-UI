import { Box, Button, Container,  TextField, Typography } from '@mui/material';
import React from 'react';

const AddUser: React.FunctionComponent = () => {
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
          />

          <TextField
            margin="normal"
            fullWidth
            label="Email"
            type="text"
            name="email"
          />

          <TextField
            margin="normal"
            fullWidth
            label="First Name"
            type="text"
            name="firstname"
          />
          <TextField
            id="outlined-textarea"
            margin="normal"
            fullWidth
            label="Last Name"
            type="text"
            name="lastname"
          />
          

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add User
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddUser;
