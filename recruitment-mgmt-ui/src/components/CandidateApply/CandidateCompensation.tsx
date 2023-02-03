import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React from 'react';

const CandidateCompensation: React.FunctionComponent = () => {
  const [offer, setoffer] = React.useState('');

  const handleChange: any = (event: SelectChangeEvent) => {
    setoffer(event.target.value);
  };

  return (
    <>
      <Grid
        container
        direction="column"
        style={{ marginLeft: '1rem', marginRight: '2rem' }}
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          margin="normal"
          style={{ width: '40%' }}
          label="Current Ctc"
          type="text"
          name="experience"
          size="small"
        />

        <TextField
          margin="normal"
          style={{ width: '40%' }}
          label="Expected Ctc"
          type="text"
          name="vacancies"
          size="small"
        />

        <FormControl style={{ width: '40%' }} size="small">
          <InputLabel id="demo-simple-select-label">Has Any Offer</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={offer}
            label="Has Any Offer"
            onChange={handleChange}
          >
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
          </Select>
        </FormControl>

        {offer === 'yes' ? (
          <>
            <TextField
              margin="normal"
              style={{ width: '40%' }}
              label="Offered Company Name"
              type="text"
              name="vacancies"
              size="small"
            />
            <TextField
              margin="normal"
              style={{ width: '40%' }}
              label="Offered Ctc"
              type="text"
              name="vacancies"
              size="small"
            />
          </>
        ) : (
          ''
        )}
      </Grid>
    </>
  );
};

export default CandidateCompensation;
