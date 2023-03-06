/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Box, Button, Card, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { addAccount } from '../../services/AccountApi';
import { AddAccountInterface } from '../../Interface/AddAccountInterface';
import './Account.style.scss';

const AddAccount: React.FunctionComponent = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const initialValues: AddAccountInterface = {
    id: '',
    accountId: '',
    accountName: '',
    accountManager: '',
    accountDetails: '',
  };
  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      try {
        await addAccount(values);
        resetForm();
        setSuccessMessage('Account added successfully');
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
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
   className="add"
    >
      <Typography
        component="h1"
        variant="h5"
        className="addheader"
      >
        Add Account
      </Typography>

      <Grid container justifyContent="center" alignItems="center">
        <Card
          className='cardstyle'
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
              className="girdstyle"
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                margin="normal"
                className='textfield'
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
                  className="error"
                >
                  {formik.errors.accountName}
                </Typography>
              ) : null}
              <TextField
                margin="normal"
                className='textfield'
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
                  className="error"
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
                className='textfield'
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
                  className="error"
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
