import {  FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { useState } from 'react';

// const skills = ['react', 'java', 'dotnet'];
// 
//   const [autoCompleteValue, setAutoCompleteValue] = useState<any>([]);
//   const handleAddSkillTags: any = (value: any) => {
//     const skillValue = value.toString();
//     value.setFieldValue('skills', skillValue);
//   };
//   const handleRemoveSkills: any = (value: any) => {
//     value.setFieldValue('skills', value);
//   };
const Candidatejob: React.FunctionComponent = () => {
  const [jobType, setjobType] = useState('');
  const handleChange: any = (event: SelectChangeEvent) => {
    setjobType(event.target.value);
  };

  const [noticePeriod, setnoticePeriod] = React.useState('');
  const handleChangeNotice: any = (event: SelectChangeEvent) => {
    setnoticePeriod(event.target.value);
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

        {/* <Autocomplete
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
        /> */}
<FormControl style={{ width: '40%' ,marginTop:'0.5rem'}} size="small">
          <InputLabel id="demo-simple-select-label">Employment Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={jobType}
            label="Employment Type"
            onChange={handleChange}
          >
            <MenuItem value="yes">Full Time</MenuItem>
            <MenuItem value="no">Contracter</MenuItem>
          </Select>
        </FormControl>
       
        <FormControl style={{ width: '40%' ,marginTop:'1rem'}} size="small">
          <InputLabel id="demo-simple-select-label">Notice Period</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={noticePeriod}
            label="Notice Period"
            onChange={handleChangeNotice}
          >
            <MenuItem value="yes">Immediate</MenuItem>
            <MenuItem value="no">Serving NoticePeriod</MenuItem>
            <MenuItem value="yes">Yet to Ressign</MenuItem>
 
            <MenuItem value="yes">Unemployed</MenuItem>         </Select>
        </FormControl>
        {/* {noticePeriod==='yes'?(
          <>
          
           
          <TextField
           style={{ width: '40%'}}
            label='Duration '
           
          
            variant="outlined"
            size='small'
            margin="normal"
          />
         
           <TextField
            style={{ width: '40%' }}
            label='Availabe to join '
            
            size='small'
         
            variant="outlined"
            margin="normal"
          />
      </>):(
        '')}
    
     */}

      </Grid>
    </>
  );
};

export default Candidatejob;
