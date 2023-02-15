import { Box, Button, Container,  TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import keycloak from '../../Auth/keycloak';

interface AccountTableDatatype {
  accountId: string;
  accountName: string;
  accountDetail: string;
  accountManager: string;
  createdBy: string,
  updatedBy: string,
}


const AddAccount: React.FunctionComponent = () => {

  const API_URL = 'https://localhost:7267/api/Account';
  
  const [formData, setFormData] = useState<AccountTableDatatype>({ 
    accountId: '',
    accountName: '',
    accountDetail: '',
    accountManager: '',
    createdBy:'',
     updatedBy: ''
   });

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event:React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    axios.post(API_URL, formData)
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
          Add Account 
        </Typography>
        <Box component="form" sx={{ mt: 1 }}
        >
          
          <TextField
            margin="normal"
            fullWidth
            label="Account ID"
            type="text"
            name="accountId"
            value={formData.accountId}
            onChange={handleChange}
            
          />

          <TextField
            margin="normal"
            fullWidth
            label="Account Name"
            type="text"
            name="accountName"
            value={formData.accountName}
            onChange={handleChange}
          />

          <TextField
            margin="normal"
            fullWidth
            label="Account Manager"
            type="text"
            name="accountManager"
            value={formData.accountManager}
            onChange={handleChange}
            
          />
          <TextField
            id="outlined-textarea"
            margin="normal"
            multiline
            rows={3}
            fullWidth
            label="Account Details"
            type="text"
            name="accountDetail"
            value={formData.accountDetail}
            onChange={handleChange}           
          />

          <TextField
            margin="normal"
            fullWidth
            label="created by"
            type="text"
            name="createdBy"
            value={formData.createdBy}
            onChange={handleChange}
            />
            <TextField
            margin="normal"
            fullWidth
            label="updated by"
            type="text"
            name="updatedBy"
            value={formData.updatedBy}
            onChange={handleChange}
            />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
            >
            Create Account
          </Button>          
        </Box>       
      </Box>
    </Container>
  );
};

export default AddAccount;
