/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useEffect, useState } from 'react';
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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import axios from 'axios';
import { AccountInterface } from '../../Interface/AccountInterface';
import { ProjectInterface } from '../../Interface/ProjectInterface';

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

  const [data, setData] = useState<AccountInterface[]>([]);
  const [selectedAccountId, setSelectedAccountId] = useState<string>('');
  const [projects, setProjects] = useState<ProjectInterface[]>([]);
  const [selectedProject, setSelectedProject] = useState<string>('');

  useEffect(()=>{
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData=async()=>{
      try {
        const result = await axios.get<AccountInterface[]>('http://localhost:5141/api/v1/Account');
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
    console.log('selectedAccountId:', selectedAccountId);

    console.log(data)
  },[])
  
  useEffect(() => {
    // Filter the projects based on the selected account ID and update the state
    const filteredProjects = data.find(
      (account) => account.id === selectedAccountId
    )?.projects;
    setProjects(filteredProjects ?? []);
  }, [selectedAccountId, data]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchProjects = async () => {
      if (selectedAccountId) {
        try{
        const response = await axios.get<ProjectInterface[]>(`http://localhost:5141/api/v1/Account/${selectedAccountId}`);
        setProjects(response.data);
      }catch(error){
        console.error(error);
      }
      }
      
    };
// console.log("selectedprojects",projects);
     // eslint-disable-next-line @typescript-eslint/no-floating-promises
     fetchProjects();
  }, [selectedAccountId]);

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
          <FormControl fullWidth>
  <InputLabel id="my-select-label">Accounts</InputLabel>
  <Select
    labelId="my-select-label"
    fullWidth
    id="data"
    value={selectedAccountId}
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    onChange={(event) => {setSelectedAccountId(event.target.value as string);
      setSelectedProject('');
    }}
  >
    {data.map((data) => (
      <MenuItem key={data.id} value={data.id}>
        {data.accountName}
      </MenuItem>
    ))}
  </Select>
</FormControl>




        <FormControl fullWidth>
          <InputLabel id="project-label">Project</InputLabel>
          {projects.length>0?(
          <Select labelId="project-label"
           value={selectedProject}
         // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
         onChange={(event) => setSelectedProject(event.target.value as string)}
         disabled={!selectedAccountId}>
            {projects.map((project) => (
              <MenuItem key={project.id} value={project.id}>
      {project.projectName}      
              </MenuItem>
            ))}
          </Select>
          ):(<Select disabled>
            <MenuItem value="">No projects available</MenuItem>
          </Select>
          )}
        </FormControl>
    

            
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


