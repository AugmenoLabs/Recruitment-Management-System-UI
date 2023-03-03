/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Box, Button, Card, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useFormik } from 'formik';

import axios from 'axios';
import { API_BASE_PATH } from '../../Config/config';
import { API_URL } from '../../services/AccountApi';

interface AddAccountInterface{
  id:string;
  accountId: string;
    accountName: string;
    accountDetails: string;
    accountManager: string;
}
const AddAccount: React.FunctionComponent = () => {

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const initialValues:AddAccountInterface={
    id:'',
    accountId: '',
    accountName: '',
    accountManager: '',
    accountDetails: '',
  }
  const formik = useFormik({
    initialValues ,
    onSubmit: (values,{ resetForm }) => {
      
      axios.post(`${API_BASE_PATH}${API_URL}`, values)
      .then((response) => {
      resetForm();
      setSuccessMessage('Account added successfully');
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(values);
    },
    validate: (values) => {
      const errors: any = {};

      
      if (values.accountName.length === 0) {
        errors.accountName = 'Please enter name';
      }
      if (values.accountManager.length === 0) {
        errors.accountManager = 'Please enter manager name';
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
              {/* <TextField
                margin="normal"
                size="small"
                label="Account ID"
                type="text"
                name="accountId"
                style={{ width: '40%' }}
                value={formik.values.accountId}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.accountId && formik.errors.accountId ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '22rem',
                  }}
                >
                  {formik.errors.accountId}
                </Typography>
              ) : null} */}
              <TextField
                margin="normal"
                style={{ width: '40%' }}
                size="small"
                label="Account Name"
                type="text"
                name="accountName"
                value={formik.values.accountName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.accountName && formik.errors.accountName ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '20rem',
                  }}
                >
                  {formik.errors.accountName}
                </Typography>
              ) : null}
              <TextField
                margin="normal"
                style={{ width: '40%' }}
                label="Account Manager"
                size="small"
                type="text"
                name="accountManager"
                value={formik.values.accountManager}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.accountManager && formik.errors.accountManager ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '17rem',
                  }}
                >
                  {formik.errors.accountManager}
                </Typography>
              ) : null}
              <TextField
                id="outlined-textarea"
                margin="normal"
                multiline
                rows={3}
                size="small"
                style={{ width: '40%' }}
                label="Account Details"
                type="text"
                name="accountDetails"
                value={formik.values.accountDetails}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.accountDetails && formik.errors.accountDetails ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '20rem',
                  }}
                >
                  {formik.errors.accountDetails}
                </Typography>
              ) : null}

              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Create Account
              </Button>
            </Grid>
          </form>
        </Card>
      </Grid>
    </Box>
  );
};

export default AddAccount;
