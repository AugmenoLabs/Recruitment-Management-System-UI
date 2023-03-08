/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useEffect, useState } from 'react';
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
import { RequisitionInterface } from '../../Interface/RequisitionInterface';
import { GetAccount } from '../../services/AccountApi';
import { addJobOpening } from '../../services/OpenPositionApi';

const skills = ['react', 'java', 'dotnet'];
// const NotRequired = [""];
const handleAddSkillTags: any = (value: any) => {
  const skillValue = value.toString();
  value.setFieldValue('skills', skillValue);
};
const handleRemoveSkills: any = (value: any) => {
  value.setFieldValue('skills', value);
};
const JobOpeningForm: React.FunctionComponent = () => {
  const [autoCompleteValue, setAutoCompleteValue] = useState<any>([]);
  const [position, setPosition] = useState<RequisitionInterface>({
    jobId: '',
    jobTitle: '',
    accountId: '',
    projectId: '',
    skillSet: '',
    yearOfExp: '',
    qualification: '',
    jobDescription: '',
    noOfPositions: 0,
    budget: '',
    location: '',
  });
  const [data, setData] = useState<AccountInterface[]>([]);
  const [selectedAccountId, setSelectedAccountId] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [projects, setProjects] = useState<ProjectInterface[]>([]);
  const [selectedProject, setSelectedProject] = useState<string>('');

  const handleChange = (event: any): void => {
    setPosition({ ...position, [event.target.name]: event.target.value });
  };
  const handleCreate = async (
    event: React.MouseEvent<HTMLElement>
  ): Promise<void> => {
    position.accountId = selectedAccountId;
    position.projectId = selectedProject;

    position.skillSet = autoCompleteValue.join(',');
    await addJobOpening(position)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      try {
        const result = await GetAccount();
        if (result?.data) {
          setData(result.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();

    console.log(data);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchProjects = async () => {
      if (selectedAccountId) {
        try {
          console.log('selectedAccountId:', selectedAccountId);

          const response = await axios.get<ProjectInterface[]>(
            `http://localhost:5141/api/v1/Account/${selectedAccountId}`
          );
          setProjects(response.data);
          console.log('proj', response.data.length);
        } catch (error) {
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
         
          marginTop: '1rem',
          marginLeft: '1rem',
          marginRight:'1rem',
          backgroundColor: 'white',
        }}
      >
        {/* <form onSubmit={formik.handleSubmit}> */}
        <Grid container>
          <Grid
            item
            xs={5.2}
            direction="column"
            style={{ marginLeft: '2rem' }}
          >
            <TextField
              margin="normal"
              size="small"
              fullWidth
              label="Job Id"
              type="text"
              name="jobId"
              value={position.jobId}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              size="small"
              fullWidth
              label="Job Title"
              type="text"
              name="jobTitle"
              value={position.jobTitle}
              onChange={handleChange}
            />
            <FormControl  size="small" style={{ marginTop: '1rem' }} fullWidth>
              <InputLabel id="name-label" >Accounts</InputLabel>
              <Select
                labelId="name-label"
                fullWidth
                label='Accounts'
                value={selectedAccountId}
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
                onChange={(event) => {
                  setSelectedAccountId(event.target.value);
                }}
              >
                {data.map((data) => (
                  <MenuItem key={data.id} value={data.id}>
                    {data.accountName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl size='small' style={{ marginTop: '1rem' }} fullWidth>
              <InputLabel id="project-label">Project</InputLabel>
              <Select
                labelId="project-label"
                value={selectedProject}
                label='Project'
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
                onChange={(event) => setSelectedProject(event.target.value)}
                // disabled={!selectedAccountId}
              >
                {data.map(
                  (account) =>
                    // Check if the account has any projects before mapping over them
                    !!account.projects &&
                    account.projects
                      .filter(
                        (selectedProject) =>
                          selectedProject.accountId === selectedAccountId
                      )
                      .map((project) => (
                        <MenuItem key={project.id} value={project.id}>
                          {project.projectName}
                        </MenuItem>
                      ))
                )}
              </Select>
            </FormControl>

            <TextField
              margin="normal"
              fullWidth
              label="Location"
              type="text"
              size="small"
              name="location"
              value={position.location}
              onChange={handleChange}
            />

            {/* <TextField
              margin="normal"
              size="small"
              fullWidth
              label="skillSet"
              type="text"
              name="skillSet"
              value={position.skillSet}
              onChange={handleChange}
            /> */}

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
          <Grid item xs={5.2} direction="column" style={{marginLeft:'2.5rem',marginRight:'2rem'}}>
            <TextField
              margin="normal"
              fullWidth
              label="Experience"
              type="text"
              name="yearOfExp"
              size="small"
              value={position.yearOfExp}
              onChange={handleChange}
            />

            <TextField
              margin="normal"
              fullWidth
              label="Qualification"
              name="qualification"
              type="text"
              size="small"
              value={position.qualification}
              onChange={handleChange}
            />

            <TextField
              margin="normal"
              fullWidth
              label="no Of Positions"
              type="text"
              size="small"
              name="noOfPositions"
              value={position.noOfPositions}
              onChange={handleChange}
            />

            <TextField
              margin="normal"
              fullWidth
              size="small"
              label="Budget"
              type="text"
              name="budget"
              value={position.budget}
              onChange={handleChange}
            />

            <TextField
              margin="normal"
              fullWidth
              label="Job Decription"
              multiline
              rows={2}
              placeholder="Job Description"
              type="text"
              name="jobDescription"
              value={position.jobDescription}
              onChange={handleChange}
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
        <Grid container justifyContent='center' alignItems='center'>
                 <Button
          // type="submit"
          size="large"
          style={{
            alignItems: 'center',
            justifyContent: 'center',
       
          }}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleCreate}
        >
          Create Opening
        </Button>
        </Grid>
       
 
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

export default JobOpeningForm;
