/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Box, Button, Card, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';


const AddUser: React.FunctionComponent = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      firstname: '',
     
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      const errors: any = {};

      if (values.username.length === 0) {
        errors.username = 'Please enter username';
      }
      if (values.email.length === 0) {
        errors.email = 'Please enter email';
      }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email";
      }
      if (values.firstname.length === 0) {
        errors.firstname = 'Please enter firstname';
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
          Add User
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
          <TextField
            margin="normal"
            style={{ width: '40%' }}
            label="Username"
            type="text"
            name="username"
            value={formik.values.username}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
 {formik.touched.username && formik.errors.username ? (
                <Typography
                  variant="body2"
                  sx={{ color: 'red', textAlign: 'start',marginRight:'19rem' }}
                >
                  {formik.errors.username}
                </Typography>
              ) : null}
          <TextField
            margin="normal"
            style={{ width: '40%' }}
            label="Email"
            type="text"
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
           {formik.touched.email && formik.errors.email ? (
                <Typography
                  variant="body2"
                  sx={{ color: 'red', textAlign: 'start',marginRight:'21rem' }}
                >
                  {formik.errors.email}
                </Typography>
              ) : null}

          <TextField
            margin="normal"
            style={{ width: '40%' }}
            label="First Name"
            type="text"
            name="firstname"
            value={formik.values.firstname}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
          />
            {formik.touched.firstname && formik.errors.firstname ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '20rem',
                  }}
                >
                  {formik.errors.firstname}
                </Typography>
              ) : null}
          <TextField
            id="outlined-textarea"
            margin="normal"
            style={{ width: '40%' }}
            label="Last Name"
            type="text"
            name="lastname"
          />
          

          <Button
            type="submit"
           
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add User
          </Button>
          </Grid>
          </form>
        </Card>
      </Grid>
    </Box>
  );
};

export default AddUser;
