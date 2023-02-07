import { Autocomplete, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { useState } from 'react';

const skills = ['react', 'java', 'dotnet'];
const Candidatejob: React.FunctionComponent = () => {
  const [autoCompleteValue, setAutoCompleteValue] = useState<any>([]);
  const handleAddSkillTags: any = (value: any) => {
    const skillValue = value.toString();
    value.setFieldValue('skills', skillValue);
  };
  const handleRemoveSkills: any = (value: any) => {
    value.setFieldValue('skills', value);
  };
  const [jobType, setjobType] = React.useState('');
  const handleChange: any = (event: SelectChangeEvent) => {
    setjobType(event.target.value);
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
          label="Experience"
          type="text"
          name="experience"
          size="small"
        />

        <Autocomplete
          multiple
          size="small"
          style={{ width: '40%' }}
          id="skills"
          options={skills}
          value={autoCompleteValue}
          onChange={(e, newval) => {
            setAutoCompleteValue(newval);
            handleRemoveSkills(newval);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Skills"
              placeholder="Skills"
              margin="normal"
              fullWidth
              name="skills"
              onKeyDown={(e) => {
                if (
                  e.code === 'Enter'
                  // && (e.target as HTMLInputElement).value
                ) {
                  const val = (e.target as HTMLInputElement).value;
                  setAutoCompleteValue(autoCompleteValue.concat(val));
                  const tagslist = autoCompleteValue.concat(val);
                  handleAddSkillTags(tagslist);
                }
              }}
            />
          )}
        />
<FormControl style={{ width: '40%' ,marginTop:'0.5rem'}} size="small">
          <InputLabel id="demo-simple-select-label">Available to join as</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={jobType}
            label="Available to join as"
            onChange={handleChange}
          >
            <MenuItem value="yes">Full Time</MenuItem>
            <MenuItem value="no">Part Time</MenuItem>
          </Select>
        </FormControl>
       
        <TextField
          margin="normal"
          style={{ width: '40%' }}
          label="Notice Period"
          type="text"
          name="vacancies"
          size="small"
        />
      </Grid>
    </>
  );
};

export default Candidatejob;
