/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import {
  
  Grid,
 
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';

const Candidatepi: React.FunctionComponent = () => {
 
  const formik = useFormik({
    initialValues: {
    
      name: '',
      contact: '',
      email: '',
      vendor:''
    },
    onSubmit: (values) => {
      
    },
    validate: (values) => {
      const errors: any = {};

     
      if (values.name.length === 0) {
        errors.name = 'Please enter name';
      }
      if (values.contact.length === 0) {
        errors.contact = 'Please enter contact no.';
      }
      if (values.email.length === 0 ) {
        errors.email = 'Please enter your email';
      }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email";
      }
      if (values.vendor.length === 0) {
        errors.vendor = 'Please enter vendor details';
      }

      return errors;
    },
  });

  return (
    <>
     <form onSubmit={formik.handleSubmit}> 
      <Grid  container
        direction="column" 
        style={{ marginLeft: '1rem', marginRight: '2rem' }}
        justifyContent="center"
        alignItems="center">
   
          <TextField
            margin="normal"
            style={{ width: '40%' }}
           
            size="small"
            label="Candidate Name"
            type="text"
            name="name"
            value={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
          /> {formik.touched.name && formik.errors.name ? (
            <Typography
              variant="body2"
              sx={{
                color: 'red',
                textAlign: 'start',
                marginRight: '20rem',
              }}
            >
              {formik.errors.name}
            </Typography>
          ) : null}
          <TextField
            margin="normal"
            size="small"
            style={{ width: '40%' }}
           
            label="Contact No."
            type="text"
            name="contact"
            value={formik.values.contact}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.contact && formik.errors.contact ? (
            <Typography
              variant="body2"
              sx={{
                color: 'red',
                textAlign: 'start',
                marginRight: '20rem',
              }}
            >
              {formik.errors.contact}
            </Typography>
          ) : null}
          <TextField
            margin="normal"
           
            style={{ width: '40%' }}
           
            label="Email"
            type="text"
            name="email"
            size="small"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <Typography
              variant="body2"
              sx={{
                color: 'red',
                textAlign: 'start',
                marginRight: '20rem',
              }}
            >
              {formik.errors.email}
            </Typography>
          ) : null}

          <TextField
            margin="normal"
           size='small'
            label="Vendor Name"
            type="text"
            name="vendor"
            style={{ width: '40%' }}
            value={formik.values.vendor}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
           
          />
      {formik.touched.vendor && formik.errors.vendor ? (
            <Typography
              variant="body2"
              sx={{
                color: 'red',
                textAlign: 'start',
                marginRight: '20rem',
              }}
            >
              {formik.errors.vendor}
            </Typography>
          ) : null}
        {/* <Grid item xs={5.5} direction="column">
        <TextField
            margin="normal"
           multiline
           fullWidth
           rows={2}
            label="Address"
            size="small"
            type="text"
            name="vacancies"
          />         
         <TextField
          margin="normal"
          fullWidth
          label="Qualification"
          size="small"
          type="text"
          name="vacancies"
        />
        
        </Grid> */}
      
      </Grid>
      </form> 
    </>
  );
};

export default Candidatepi;
