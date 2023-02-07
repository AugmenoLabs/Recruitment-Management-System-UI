import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';

const Candidatepi: React.FunctionComponent = () => {
  return (
    <>
      <Grid container spacing={5}>
        <Grid
          item
          xs={5.5}
          direction="column"
          style={{ marginLeft: '1rem', marginRight: '2rem' }}
        >
          <TextField
            margin="normal"
            fullWidth
            size="small"
            label="Candidate Name"
            type="text"
            name="role"
          />
          <TextField
            margin="normal"
            size="small"
            fullWidth
            label="Contact No."
            type="text"
            name="role"
          />
          <TextField
            margin="normal"
            fullWidth
            label="Email"
            type="text"
            name="job"
            size="small"
          />
          

          {/* <TextField
            margin="normal"
            fullWidth
            label="Upload Resume"
            type="file"
            name="vacancies"
           
          /> */}
        </Grid>
        <Grid item xs={5.5} direction="column">
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
        <FormControl style={{ marginLeft: '0.4rem', marginTop: '0.4rem' }}>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio size="small" />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio size="small" />}
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={<Radio size="small" />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

        
        </Grid>
      </Grid>
    </>
  );
};

export default Candidatepi;
