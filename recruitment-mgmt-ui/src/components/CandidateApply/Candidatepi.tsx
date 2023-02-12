import React from 'react';
import {
  
  Grid,
 
  TextField,
} from '@mui/material';

const Candidatepi: React.FunctionComponent = () => {
  return (
    <>
      <Grid  container
        direction="column" 
        style={{ marginLeft: '1rem', marginRight: '2rem' }}
        justifyContent="center"
        alignItems="center">
      
          <TextField
            margin="normal"
            style={{ width: '40%' }}
           
            size="small"
            label="Candidate Name"
            type="text"
            name="role"
          />
          <TextField
            margin="normal"
            size="small"
            style={{ width: '40%' }}
           
            label="Contact No."
            type="text"
            name="role"
          />
          <TextField
            margin="normal"
           
            style={{ width: '40%' }}
           
            label="Email"
            type="text"
            name="job"
            size="small"
          />
          

          <TextField
            margin="normal"
           size='small'
            label="Vendor Name"
            type="text"
            name="vacancies"
            style={{ width: '40%' }}
           
          />
      
        {/* <Grid item xs={5.5} direction="column">
        <TextField
            margin="normal"
           multiline
           fullWidth
           rows={2}
            label="Address"
            size="small"
            type="text"
            name="vacancies"
          />         
         <TextField
          margin="normal"
          fullWidth
          label="Qualification"
          size="small"
          type="text"
          name="vacancies"
        />
        
        </Grid> */}
      </Grid>
    </>
  );
};

export default Candidatepi;
