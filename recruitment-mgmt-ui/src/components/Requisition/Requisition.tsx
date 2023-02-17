/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState } from 'react';
// import { useFormik } from 'formik';
import './Requisition.css';
// import { toast } from "react-toastify";
import {
  Box,
  TextField,
  Typography,
  Button,
  Autocomplete,
  Card,
  Grid,
} from '@mui/material';

const skills = ['react', 'java', 'dotnet'];
// const NotRequired = [""];
const handleAddSkillTags: any = (value: any) => {
  const skillValue = value.toString();
  value.setFieldValue('skills', skillValue);
};
const handleRemoveSkills: any = (value: any) => {
  value.setFieldValue('skills', value);
};
const Requisition: React.FunctionComponent = () => {
  const [autoCompleteValue, setAutoCompleteValue] = useState<any>([]);
  // const [autoCompleteKeyword, setAutoCompleteKeyword] = useState<any>([]);
  // const formik = useFormik({
  //   initialValues: {
  //     budget: '',
  //     position: '',
  //     account: '',
  //     team: '',
  //     location: '',
  //     experience: '',
  //     qualification: '',
  //     vacancies: '',
  //     jd: '',
  //     projectdetails: '',
  //     skills: '',
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  //   validate: (values) => {
  //     const errors: any = {};

  //     if (values.budget.length === 0) {
  //       errors.budget = 'Please enter budget';
  //     }
  //     if (values.position.length === 0) {
  //       errors.position = 'Please enter position';
  //     }
  //     if (values.account.length === 0) {
  //       errors.account = 'Please enter account name';
  //     }
  //     if (values.team.length === 0) {
  //       errors.team = 'Please enter team name';
  //     }
  //     if (values.location.length === 0) {
  //       errors.location = 'Please enter the location';
  //     }
  //     if (values.experience.length === 0) {
  //       errors.experience = 'Please enter the length';
  //     }
  //     if (values.qualification.length === 0) {
  //       errors.qualification = 'Please enter the qualification';
  //     }

  //     if (values.vacancies.length === 0) {
  //       errors.vacancies = 'Please enter the no. of vacancies';
  //     }

  //     if (values.skills.length === 0) {
  //       errors.skills = 'Please enter the skills';
  //     }
  //     if (values.jd.length === 0) {
  //       errors.jd = 'Please enter the job description';
  //     }

  //     if (values.projectdetails.length === 0) {
  //       errors.projectdetails = 'Please enter the projectdetails';
  //     }

  //     return errors;
  //   },
  // });

  return (
    <Box
      sx={{
        marginLeft: '2%',
        marginRight: '2%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <Typography
        component="h1"
        variant="h5"
        style={{ marginTop: '2rem', fontWeight: 600, marginLeft: '1rem' }}
      >
        Create Job Openings
      </Typography>
      <Card
        style={{
          width: '97%',
          marginTop: '1rem',
          marginLeft: '1rem',
          backgroundColor: 'lavender',
        }}
      >
        {/* <form onSubmit={formik.handleSubmit}> */}
          <Grid container spacing={5}>
            <Grid
              item
              xs={5.5}
              direction="column"
              style={{ marginLeft: '1rem', marginRight: '2rem' }}
            >
              
              <TextField
                margin="normal"
                size="small"
                fullWidth
                label="Job Title"
                type="text"
                name="position"
             
              />
             
              <TextField
                margin="normal"
                fullWidth
                label="Account"
                type="text"
                name="account"
                size="small"
                // value={formik.values.account}
                // onBlur={formik.handleBlur}
                // onChange={formik.handleChange}
              />
              {/* {formik.touched.account && formik.errors.account ? (
                <Typography
                  variant="body2"
                  sx={{ color: 'red', textAlign: 'start' }}
                >
                  {formik.errors.account}
                </Typography>
              ) : null} */}
              <TextField
                margin="normal"
                fullWidth
                label="Project"
                type="text"
                name="team"
                size="small"
              
              />
              {/* {formik.touched.team && formik.errors.team ? (
                <Typography
                  variant="body2"
                  sx={{ color: 'red', textAlign: 'start' }}
                >
                  {formik.errors.team}
                </Typography>
              ) : null} */}
              <TextField
                margin="normal"
                fullWidth
                label="Location"
                type="text"
                name="location"
                size="small"
              
              />
             
            
              <Autocomplete
                multiple
                size="small"
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
                        e.code === 'Enter' &&
                        (e.target as HTMLInputElement).value
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
                fullWidth
                label="Experience"
                type="text"
                name="experience"
               
                size="small"
              />
              
              <TextField
                margin="normal"
                fullWidth
                label="Qualification"
                name="qualification"
                type="text"
               
                size="small"
              />
              

              <TextField
                margin="normal"
                fullWidth
                label="No. Of Positions"
                type="text"
                size="small"
                name="vacancies"
              
              />
             

<TextField
                margin="normal"
                fullWidth
                size="small"
                label="Budget"
                type="text"
                name="budget"
                
              />
              

              <TextField
                margin="normal"
                fullWidth
                label="Job Decription"
                multiline
                rows={2}
                placeholder="Job Description"
                type="text"
                name="jd"
               
              />
              
              {/* <TextField
                margin="normal"
                fullWidth
                multiline
                rows={2}
                label="Project details"
                type="text"
                name="proejctdetails"
                placeholder="Project Details"
                value={formik.values.position}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.projectdetails && formik.errors.projectdetails ? (
                <Typography
                  variant="body2"
                  sx={{ color: 'red', textAlign: 'start' }}
                >
                  {formik.errors.projectdetails}
                </Typography>
              ) : null} */}
            </Grid>
          </Grid>
          <Button
            type="submit"
            size="large"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '32rem',
            }}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Opening
          </Button>
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Cancel
          </Button> */}
        {/* </form> */}
      </Card>
    </Box>
  );
};

export default Requisition;
