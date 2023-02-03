import { Autocomplete, Box, Button, Container,  TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
const Accounts = ["Honeywell", "LG", "Symphony"];
const AddProject:React.FunctionComponent = () => {
    const [accountsValue, setaccountsValue] = useState<any>([]);
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 19,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4" style={{ marginTop: '-5rem' }}>
          Add Project
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>

        <Autocomplete
            multiple
            id="Account"
            options={Accounts}
            value={accountsValue}
            onChange={(e, newval) => {
              setaccountsValue(newval);
           
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Account Name"
                placeholder="Account"
                margin="normal"
                fullWidth
                name="skills"
              
              />
            )}
          />  
          <TextField
            margin="normal"
            fullWidth
            label="Project ID"
            type="text"
            name="project_ID"
          />

          <TextField
            margin="normal"
            fullWidth
            label="Project Name"
            type="text"
            name="Pname"
          />

          <TextField
            margin="normal"
            fullWidth
            label="Project Manager"
            type="text"
            name="Pmanager"
          />
          <TextField
            id="outlined-textarea"
            margin="normal"
            multiline
            rows={2}
            fullWidth
            label="Project Details"
            type="text"
            name="PDetails"
          />
          

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Project
          </Button>
        </Box>
      </Box>
    </Container>
  );
 
}

export default AddProject