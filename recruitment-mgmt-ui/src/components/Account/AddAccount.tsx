import { Box, Button, Card,  Grid,  TextField, Typography } from '@mui/material';
import React from 'react';

const AddAccount: React.FunctionComponent = () => {
  return (
  
     <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginLeft:'2%',
          marginRight:'2%',
          marginTop:'2%',
        }}
      >
       <Typography
          component="h1"
          variant="h5"
          style={{ fontWeight: 600,marginTop:'2%' }}
        >
        Add Account
        </Typography>
        <Grid container justifyContent="center" alignItems="center">
          <Card
            style={{
             marginBottom:'1%',
              width: '100%',
              marginTop: '1rem',
              backgroundColor: 'lavender',
            }}
          >
              <Grid  container
        direction="column" 
        style={{ marginLeft: '2rem', marginRight: '2rem' }}
        justifyContent="center"
        alignItems="center">
      
          <TextField
            margin="normal"
            style={{ width: '40%' }}
            size='small'
            label="Account ID"
            type="text"
            name="ID"
          />

          <TextField
            margin="normal"
            style={{ width: '40%' }}
            size='small'
            label="Account Name"
            type="text"
            name="name"
          />

          <TextField
            margin="normal"
            style={{ width: '40%' }}
            label="Account Manager"
            size='small'
            type="text"
            name="manager"
          />
          <TextField
            id="outlined-textarea"
            margin="normal"
            multiline
            rows={3}
            size='small'
            style={{ width: '40%' }}
            label="Account Details"
            type="text"
            name="Details"
          />
          

          <Button
            type="submit"
           
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Account
          </Button>
          </Grid>
          </Card>
          </Grid>
     
      </Box>
  
  );
};

export default AddAccount;
