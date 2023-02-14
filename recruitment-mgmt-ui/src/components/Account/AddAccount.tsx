/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Box, Button, Card, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';

const AddAccount: React.FunctionComponent = () => {
  const formik = useFormik({
    initialValues: {
      ID: '',
      name: '',
      manager: '',
      Details: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      const errors: any = {};

      if (values.ID.length === 0) {
        errors.ID = 'Please enter ID';
      }
      if (values.name.length === 0) {
        errors.name = 'Please enter name';
      }
      if (values.manager.length === 0) {
        errors.manager = 'Please enter manager name';
      }
      if (values.Details.length === 0) {
        errors.Details = 'Please enter details';
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
              <TextField
                margin="normal"
                size="small"
                label="Account ID"
                type="text"
                name="ID"
                style={{ width: '40%' }}
                value={formik.values.ID}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.ID && formik.errors.ID ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '22rem',
                  }}
                >
                  {formik.errors.ID}
                </Typography>
              ) : null}
              <TextField
                margin="normal"
                style={{ width: '40%' }}
                size="small"
                label="Account Name"
                type="text"
                name="name"
                value={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name ? (
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
                style={{ width: '40%' }}
                label="Account Manager"
                size="small"
                type="text"
                name="manager"
                value={formik.values.manager}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.manager && formik.errors.manager ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '17rem',
                  }}
                >
                  {formik.errors.manager}
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
                name="Details"
                value={formik.values.Details}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.Details && formik.errors.Details ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '20rem',
                  }}
                >
                  {formik.errors.Details}
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
