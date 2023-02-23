/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import {
 
  Box,
  Button,
  Grid,
  Card,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { AccountInterface } from '../../Interface/AccountInterface';
import { ProjectInterface } from '../../Interface/ProjectInterface';
// import { useEffect } from 'preact/hooks';

// const Accounts = ['Honeywell', 'LG', 'Symphony'];
// const handleAddSkillTags: any = (value: any) => {
//   const skillValue = value.toString();
//   value.setFieldValue('skills', skillValue);
// };
// const handleRemoveSkills: any = (value: any) => {
//   value.setFieldValue('skills', value);
// };

// interface AddProjectInterface{
//   // projectId:string;
//   accountId:string;
//   projectName:string;
//   projectDetails:string;
//   projectManager:string;
//   selectedAccountId: string;
// }
const AddProject: React.FunctionComponent = () => {
  const API_URL="http://localhost:5141/api/v1/Project";
  // const [accountsValue, setaccountsValue] = useState<any>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  // const [names, setNames] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedName, setSelectedName] = useState<string>("");
  const initialValues:ProjectInterface={
    id:'',
    projectName: '',
    projectDetails: '',
    projectManager: '',
    projectId:'',
    selectedAccountId: "",
    accountId: ''
  }
  const formik = useFormik({
    initialValues,
    onSubmit: (values,{ resetForm }) => {
      values.accountId = values.selectedAccountId;
      axios.post(API_URL, values)
      .then((response) => {
      resetForm();
      setSuccessMessage('Project added successfully');
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(values);
    },
    validate: (values) => {
      const errors: any = {};
      
    
      if (values.projectName.length === 0) {
        errors.Pname = 'Please enter name';
      }
      if (values.projectManager.length === 0) {
        errors.Pmanager = 'Please enter manager name';
      }
      return errors;
    },
  });
  const [data, setData] = useState<AccountInterface[]>([]);
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
},[])

useEffect(() => {
  const selectedAccount = data.find((account) => account.id === formik.values.selectedAccountId);
  setSelectedName(selectedAccount?.accountName ?? "");
}, [formik.values.selectedAccountId, data]);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: '2%',
      }}
    >
      <Typography
        component="h1"
        variant="h5"
        style={{ fontWeight: 600, marginTop: '2%' }}
      >
        Add Project
      </Typography>
      <Grid container justifyContent="center" alignItems="center">
      
          <Card
            style={{
              marginBottom: '1%',
              width: '100%',
              marginTop: '1rem',
              backgroundColor: 'lavender',
            }}
          >
             {successMessage && (
      <div style={{ color: 'green', margin: '10px 0' }}>
        {successMessage}
      </div>
    )}
              <form onSubmit={formik.handleSubmit}>
            <Grid
              container
              direction="column"
              style={{ marginLeft: '2rem', marginRight: '2rem' }}
              justifyContent="center"
              alignItems="center"
            >
              {/* <Autocomplete
                multiple
                size="small"
                style={{ width: '40%' }}
                id="accounts"
                options={Accounts}
                value={accountsValue}
                onChange={(e, newval) => {
                  setaccountsValue(newval);
                  handleRemoveSkills(newval);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Accounts"
                    placeholder="Accounts"
                    margin="normal"
                    fullWidth
                    name="Accounts"
                    onKeyDown={(e) => {
                      if (
                        e.code === 'Enter'
                        // && (e.target as HTMLInputElement).value
                      ) {
                        const val = (e.target as HTMLInputElement).value;
                        setaccountsValue(accountsValue.concat(val));
                        const tagslist = accountsValue.concat(val);
                        handleAddSkillTags(tagslist);
                      }
                    }}
                  />
                )}
              /> */}
 
             <FormControl style={{marginTop:'1rem',width:'40%'}}>
              <InputLabel id='name-label'>Account</InputLabel>
              <Select
             fullWidth
    labelId="name-label"
    value={formik.values.selectedAccountId}
      // update the selectedAccountId field in the values object
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onChange={async (event) =>
        await formik.setFieldValue("selectedAccountId", event.target.value)
      }
  >
    {data.map((data) => (
      <MenuItem key={data.id} value={data.id}>
        {data.accountName}
      </MenuItem>
    ))}
  </Select>
             </FormControl>
            
              
              <TextField
                margin="normal"
                style={{ width: '40%' }}
                size="small"
                label="Project Name"
                type="text"
                name="projectName"
                value={formik.values.projectName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              { formik.errors.projectName ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '21rem',
                  }}
                >
                  {formik.errors.projectName}
                </Typography>
              ) : null}
              <TextField
                margin="normal"
                style={{ width: '40%' }}
                size="small"
                label="Project Manager"
                type="text"
                name="projectManager"
                value={formik.values.projectManager}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.errors.projectManager  ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '17rem',
                  }}
                >
                  {formik.errors.projectManager}
                </Typography>
              ) : null}
              <TextField
                id="outlined-textarea"
                margin="normal"
                multiline
                rows={2}
                style={{ width: '40%' }}
                size="small"
                label="Project Details"
                type="text"
                name="projectDetails"
                value={formik.values.projectDetails}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              { formik.errors.projectDetails ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '20rem',
                  }}
                >
                  {formik.errors.projectDetails}
                </Typography>
              ) : null}

              <Button
                type="submit"
                style={{ width: '40%' }}
                size="small"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create Project
              </Button>
            </Grid>
            </form>
          </Card>
       
      </Grid>
    </Box>
  );
};

export default AddProject;
