import { Box, Button, Container,  TextField, Typography } from '@mui/material';
import React from 'react';

const AddRole: React.FunctionComponent = () => {
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
            name="Rolename"
          />

          <TextField
            margin="normal"
            fullWidth
            label="Description"
            type="text"
            name="description"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Role
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddRole;
