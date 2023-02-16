/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Card,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useFormik } from 'formik';

const Accounts = ['Honeywell', 'LG', 'Symphony'];
const handleAddSkillTags: any = (value: any) => {
  const skillValue = value.toString();
  value.setFieldValue('skills', skillValue);
};
const handleRemoveSkills: any = (value: any) => {
  value.setFieldValue('skills', value);
};
const AddProject: React.FunctionComponent = () => {
  const [accountsValue, setaccountsValue] = useState<any>([]);
  const formik = useFormik({
    initialValues: {
      Accounts: '',
      project_ID: '',
      Pname: '',
      Pmanager: '',
      PDetails: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      const errors: any = {};
      if (values.Accounts.length === 0) {
        errors.Accounts = 'Please enter account';
      }
      if (values.project_ID.length === 0) {
        errors.project_ID = 'Please enter ID';
      }
      if (values.Pname.length === 0) {
        errors.Pname = 'Please enter name';
      }
      if (values.Pmanager.length === 0) {
        errors.Pmanager = 'Please enter manager name';
      }
      if (values.PDetails.length === 0) {
        errors.PDetails = 'Please enter details';
      }

      return errors;
    },
  });

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
        Add Account
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
              <form onSubmit={formik.handleSubmit}>
            <Grid
              container
              direction="column"
              style={{ marginLeft: '2rem', marginRight: '2rem' }}
              justifyContent="center"
              alignItems="center"
            >
              <Autocomplete
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
              />
 {formik.touched.Accounts && formik.errors.Accounts ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '19rem',
                  }}
                >
                  {formik.errors.Accounts}
                </Typography>
              ) : null}
              <TextField
                margin="normal"
                style={{ width: '40%' }}
                size="small"
                label="Project ID"
                type="text"
                name="project_ID"
                value={formik.values.project_ID}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.project_ID && formik.errors.project_ID ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '22rem',
                  }}
                >
                  {formik.errors.project_ID}
                </Typography>
              ) : null}
              <TextField
                margin="normal"
                style={{ width: '40%' }}
                size="small"
                label="Project Name"
                type="text"
                name="Pname"
                value={formik.values.Pname}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.Pname && formik.errors.Pname ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '21rem',
                  }}
                >
                  {formik.errors.Pname}
                </Typography>
              ) : null}
              <TextField
                margin="normal"
                style={{ width: '40%' }}
                size="small"
                label="Project Manager"
                type="text"
                name="Pmanager"
                value={formik.values.Pmanager}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.Pmanager && formik.errors.Pmanager ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '17rem',
                  }}
                >
                  {formik.errors.Pmanager}
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
                name="PDetails"
                value={formik.values.PDetails}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.PDetails && formik.errors.PDetails ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '20rem',
                  }}
                >
                  {formik.errors.PDetails}
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
