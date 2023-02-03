import React from 'react';
import {
  FormControl,
  Typography,
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

          {/* <TextField
            margin="normal"
            fullWidth
            label="Upload Resume"
            type="file"
            name="vacancies"
           
          /> */}
        </Grid>
        <Grid item xs={5.5} direction="column">
          <Typography style={{ marginTop: '0.5rem', marginBottom: '-2.4rem' }}>
            Address
          </Typography>
          <Grid container spacing={3}>
            <Grid item direction="column" xs={6}>
              <TextField
                margin="normal"
                size="small"
                label="House/Block No."
                type="text"
                name="vacancies"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                size="small"
                fullWidth
                label="Area"
                type="text"
                name="vacancies"
              />
            </Grid>
          </Grid>

          <TextField
            margin="normal"
            fullWidth
            label="Street Address"
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
            <FormLabel id="demo-radio-buttons-group-label">
              Marital Status
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="single"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="single"
                control={<Radio size="small" />}
                label="Single"
              />
              <FormControlLabel
                value="married"
                control={<Radio size="small" />}
                label="Married"
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
