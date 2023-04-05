/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Autocomplete,
  Grid,
  IconButton,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close'
import { AccountInterface } from '../../Interface/AccountInterface';
import { ProjectInterface } from '../../Interface/ProjectInterface';
import { RequisitionInterface } from '../../Interface/RequisitionInterface';
import { GetAccount } from '../../services/AccountApi';
import { addJobOpening } from '../../services/OpenPositionApi';
import './CreateOpening.style.scss';
import { Form,Formik } from 'formik';
import Swal from 'sweetalert2';
import * as Yup from 'yup';



const JobOpeningForm: React.FunctionComponent = () => {
  const [autoCompleteValue, setAutoCompleteValue] = useState<any>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [position, setPosition] = useState<RequisitionInterface | any>({
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

  const initialValues:RequisitionInterface={
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
    selectedAccountId:'',
    selectedProject:'',
  }

  const [data, setData] = useState<AccountInterface[]>([]);
  const [selectedAccountId, setSelectedAccountId] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [projects, setProjects] = useState<ProjectInterface[]>([]);
  const [selectedProject, setSelectedProject] = useState<string>('');
  const [open, setOpen] = useState(false);
  const handleClickOpen = (): void => {
    setOpen(true);
  };
 
  const handleClose = (): void => {
    setOpen(false);
  };

  const [skills,setSkills] =useState( [
    {label:'React', value: 1},
  {label:'Java', value: 2},
  {label:'.Net', value: 3},
  ]);
  const [account, setAccount] = useState<string | undefined>();
  // const handleSearch = (event:any, value:any) => {
  //   if (value === '') {
  //     setSkills([
  //       {label:'react', value: 1},
  // {label:'java', value: 2},
  // {label:'.Net', value: 3},
  //     ]);
  //   } else {
  //     const filteredOptions = skills.filter(option =>
  //       option.label.toLowerCase().includes(value.toLowerCase())
  //     );
  //     setSkills(filteredOptions);
  //   }
  // };
  // const NotRequired = [""];
  const handleAddSkillTags: any = (value: any) => {
    const skillValue = value.toString();
    value.setFieldValue('skills', skillValue);
  };
  
  const handleRemoveSkills: any = (value: any) => {
    value.setFieldValue('skills', value);
  };

  const handleInputChange = (event:any, value:any) => {
    if (!skills.find(option => option.label === value)) {
      setSkills([...skills, { label: value, value }]);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const handleChange = (event: any): void => {
  //   setPosition({ ...position, [event.target.name]: event.target.value });
  // };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

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

  const validationSchema = Yup.object({
    // jobId: Yup.string().required('Job Id is required'),
    jobTitle: Yup.string().required('Job Title is required'),
    // accountId: Yup.string().required('Account is required'),
    // projectId: Yup.string().required('Project is required'),
    // skillSet: Yup.string().required('Skill Set is required'),
    yearOfExp: Yup.string().required('Year of Experience is required'),
    qualification: Yup.string().required('Qualification is required'),
    // jobDescription: Yup.string().required('Job Description is required'),
    noOfPositions: Yup.number()
      .typeError('No of Positions must be a number')
      .required('No of Positions is required')
      .min(1, 'No of Positions must be greater than 0'),
    // budget: Yup.string().required('Budget is required'),
    location: Yup.string().required('Location is required'),
  });

 
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Post Job
      </Button>
      <Dialog
        open={open}
        BackdropProps={{ invisible: true }}
        maxWidth="sm"
        PaperProps={{ sx: { m: 0, height: '80%' } }}
        sx={{
          '&::-webkit-scrollbar': {
            width: '6px',
            backgroundColor: '#F7F7F7',
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
            backgroundColor: '#F7F7F7',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#000000',
          },
        }}
      >
        <DialogTitle className="header" style={{ fontWeight: 600 }}>
          Post Jobs
          <IconButton onClick={handleClose}><CloseIcon/></IconButton>
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              marginLeft: '2%',
              marginRight: '2%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={async (values, { resetForm }) => {
  
    try {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      values.jobId = `${Math.random().toString().slice(2, 8)}${account?.toLocaleUpperCase()}`;
      values.accountId = selectedAccountId;
      values.projectId = selectedProject;
      values.skillSet = autoCompleteValue.join(',');
      await addJobOpening(values);
      setTimeout(()=>{
      handleClose();
      window.location.reload();
      resetForm();
      void Swal.fire({
        icon: 'success',
        confirmButtonText: 'OK',
        text: 'Job Created Successfully',
      });
    },2000);
    } 
     catch (error) {
      console.error(error);
      handleClose();
      void Swal.fire({
        icon: 'error',
        confirmButtonText: 'OK',
        text: 'Error in creating job!! Please create again',
      });
    }
  }}
>
  {({ errors, touched, values, handleChange, handleBlur }) => (
    <Form>
            {/* <form onSubmit={formik.handleSubmit}> */}
              <Grid container justifyContent="space-between">
                <TextField
                  margin="normal"
                  size="small"
                  fullWidth
                  label="Job Title"
                  type="text"
                  name="jobTitle"
                  value={values.jobTitle}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={
                  touched.jobTitle && Boolean(errors.jobTitle)
                  }
                  helperText={touched.jobTitle && errors.jobTitle}
                />
                <FormControl
                  size="small"
                  style={{ marginTop: '1rem' }}
                  fullWidth
                >
                  <InputLabel id="name-label">Accounts</InputLabel>
                  <Select
                    labelId="name-label"
                    fullWidth
                    label="Accounts"                
                    value={selectedAccountId}
                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
                    onChange={(event) => {
                      const selectedAccount = data.find(option => option.id === event.target.value);
                      setSelectedAccountId(event.target.value);
                      setAccount(selectedAccount?.accountName?.slice(0,2));
                    }}
                  >
                    {data.map((data) => (
                      <MenuItem key={data.id} value={data.id}>
                        {data.accountName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl
                  size="small"
                  style={{ marginTop: '1rem' }}
                  fullWidth
                >
                  <InputLabel id="project-label">Project</InputLabel>
                  <Select
                    labelId="project-label"
                    value={selectedProject}
                    label="Project"
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
                  value={values.location}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={
                    touched.location && Boolean(errors.location)
                  }
                  helperText={touched.location && errors.location}
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
                  fullWidth
                  id="skills"
                  options={skills}
                  // getOptionLabel={option => option.label}
                  value={autoCompleteValue}
                  onChange={(e: any, newval: any) => {
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
                  onInputChange={handleInputChange}
                  // onOpen={() => setSkills(skills)}
                  // onClose={() => handleSearch(null, '')}
                  // filterOptions={(options) => options}
                  freeSolo
                  includeInputInList
                />

                {/* <TextField
            margin="normal"
            fullWidth
            label="Upload Resume"
            type="file"
            name="vacancies"
           
          /> */}

                <TextField
                  margin="normal"
                  fullWidth
                  label="Experience"
                  type="text"
                  name="yearOfExp"
                  size="small"
                  value={values.yearOfExp}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={
                    touched.yearOfExp && Boolean(errors.yearOfExp)
                  }
                  helperText={
                    touched.yearOfExp && errors.yearOfExp
                  }
                />

                <TextField
                  margin="normal"
                  fullWidth
                  label="Qualification"
                  name="qualification"
                  type="text"
                  size="small"
                  value={values.qualification}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={
                   touched.qualification &&
                    Boolean(errors.qualification)
                  }
                  helperText={
                  touched.qualification && errors.qualification
                  }
                />

                <TextField
                  margin="normal"
                  fullWidth
                  label="No Of Positions"
                  type="text"
                  size="small"
                  name="noOfPositions"
                  // value={position.noOfPositions}
                  // onChange={handleChange}
                  value={values.noOfPositions}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={
                    touched.noOfPositions &&
                    Boolean(errors.noOfPositions)
                  }
                  helperText={
                   touched.noOfPositions && errors.noOfPositions
                  }
                />

                <TextField
                  margin="normal"
                  fullWidth
                  size="small"
                  label="Budget"
                  type="text"
                  name="budget"
                  value={values.budget}
                  onBlur={handleBlur}
                  onChange={handleChange}
                //   error={
                //   touched.budget && Boolean(errors.budget)
                //   }
                //   helperText={
                // touched.budget && errors.budget
                //   }
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
                  value={values.jobDescription}
                  onBlur={handleBlur}
                  onChange={handleChange}
//                   error={
//               touched.jobDescription && Boolean(errors.jobDescription)
//                   }
//                   helperText={
// touched.jobDescription && errors.jobDescription
//                   }
                />

               
              </Grid>

              <DialogActions>
                <Button variant="contained" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="contained" type="submit">
                  Save
                </Button>
              </DialogActions>
              </Form>
  )}
  </Formik>
            {/* </form> */}
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JobOpeningForm;