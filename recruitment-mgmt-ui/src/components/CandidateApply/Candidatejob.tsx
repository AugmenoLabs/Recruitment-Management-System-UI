import { Autocomplete, Grid, TextField } from '@mui/material';
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

        <TextField
          margin="normal"
          style={{ width: '40%' }}
          label="Job ID"
          type="text"
          name="vacancies"
          size="small"
        />
      </Grid>
    </>
  );
};

export default Candidatejob;
