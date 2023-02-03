import { Box, Button, Container,  TextField, Typography } from '@mui/material';
import React from 'react';

const AddAccount: React.FunctionComponent = () => {
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
          Add Account
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            label="Account ID"
            type="text"
            name="ID"
          />

          <TextField
            margin="normal"
            fullWidth
            label="Account Name"
            type="text"
            name="name"
          />

          <TextField
            margin="normal"
            fullWidth
            label="Account Manager"
            type="text"
            name="manager"
          />
          <TextField
            id="outlined-textarea"
            margin="normal"
            multiline
            rows={3}
            fullWidth
            label="Account Details"
            type="text"
            name="Details"
          />
          

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Account
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddAccount;
