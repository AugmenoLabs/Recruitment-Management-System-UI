/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Box, Button, Card, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useFormik } from 'formik';

import axios from 'axios';
import { VendorInterface } from '../../Interface/VendorInterface';

// interface AddAccountInterface{
//   id:string;
//   accountId: string;
//     accountName: string;
//     accountDetails: string;
//     accountManager: string;
// }
const AddVendor: React.FunctionComponent = () => {
  const API_URL="http://localhost:5141/api/v1/Vendor";
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const initialValues:VendorInterface={
    vendorId:'',
    vendorName: '',
    spocName: '',
    spocContactNumber: 0,
    spocEmail: '',
  }
  const formik = useFormik({
    initialValues ,
    onSubmit: (values,{ resetForm }) => {
      
      axios.post(API_URL, values)
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

     
      if (values.vendorName.length === 0) {
        errors.vendorName = 'Please enter vendor name';
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
        Add Vendor
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
              <TextField
                margin="normal"
                size="small"
                label="Vendor Name"
                type="text"
                name="vendorName"
                style={{ width: '40%' }}
                value={formik.values.vendorName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.vendorName && formik.errors.vendorName ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '22rem',
                  }}
                >
                  {formik.errors.vendorName}
                </Typography>
              ) : null}
              <TextField
                margin="normal"
                style={{ width: '40%' }}
                size="small"
                label="Spoc Name"
                type="text"
                name="spocName"
                value={formik.values.spocName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
             
              <TextField
                margin="normal"
                style={{ width: '40%' }}
                label="SPOC Contact"
                size="small"
                type="text"
                name="spocContactNumber"
                value={formik.values.spocContactNumber}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
             
              <TextField
                id="outlined-textarea"
                margin="normal"
                size="small"
                style={{ width: '40%' }}
                label="SPOC Email"
                type="email"
                name="spocEmail"
                value={formik.values.spocEmail}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
             

              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Submit
              </Button>
            </Grid>
          </form>
        </Card>
      </Grid>
    </Box>
  );
};

export default AddVendor;
