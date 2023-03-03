/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Box, Button,  Card, Grid,  TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { clientId } from '../../keycloak/ClientDetails';
import { getToken } from '../../keycloak/GetToken';
import { RoleInterface } from '../../Interface/RoleInterface';
// import { useFormik } from 'formik';


const AddRole: React.FunctionComponent = () => {

  const [role, setRole] = useState<RoleInterface>({
    id:'',
    name: '',
    description: ''
  });

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole({ ...role, [event.target.name]: event.target.value });
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const AddRole =  async (event:React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const token = await getToken();
    await axios.post(`/admin/realms/MyRealm/clients/${clientId}/roles`, role,{
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  // const formik = useFormik({
  //   initialValues: {
  //     Role: '',
  //   description: '',
      
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  //   validate: (values) => {
  //     const errors: any = {};

  //     if (values.Role.length === 0) {
  //       errors.Role = 'Please enter Role';
  //     }
  //     if (values.description.length === 0) {
  //       errors.description = 'Please enter description';
  //     }
     

  //     return errors;
  //   },
  // });
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
          Add Role
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
          {/* <form onSubmit={formik.handleSubmit}> */}
            <Grid
              container
              direction="column"
              style={{ marginLeft: '2rem', marginRight: '2rem' }}
              justifyContent="center"
              alignItems="center"
            >
          <TextField
            margin="normal"
            fullWidth
            label="Role name"
            type="text"
            value={role.name}
            onChange={handleChange}
            name="name"
            style={{ width: '40%' }}
            // value={formik.values.Role}
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
          />
 {/* {formik.touched.Role && formik.errors.Role ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '22rem',
                  }}
                >
                  {formik.errors.Role}
                </Typography>
              ) : null} */}
          <TextField
            margin="normal"
            fullWidth
            label="Description"
            type="text"
            name="description"
            value={role.description}
            onChange={handleChange}
            style={{ width: '40%' }}
            // value={formik.values.description}
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
          />
           {/* {formik.touched.description && formik.errors.description ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '19rem',
                  }}
                >
                  {formik.errors.description}
                </Typography>
              ) : null} */}
          <Button
            type="submit"
            
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={AddRole}
          >
            Add Role
          </Button>
          </Grid>
          {/* </form> */}
        </Card>
      </Grid>
    </Box>
  );
};

export default AddRole;
