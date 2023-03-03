/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React,{useState} from 'react';
// import { useFormik } from 'formik';
import { Box, Button,Card, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { getToken } from '../../keycloak/GetToken';
import { UserInterface } from '../../Interface/UserInterface';


const AddUser: React.FunctionComponent = () => {
  const [user, setUser] = useState<UserInterface>({
    id:'',
    username: '',   
    email: '',
    firstName: '',
    lastName: ''
  });

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSubmit =  async (event:React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const token = await getToken();
    await axios.post('/admin/realms/MyRealm/users', user,{
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
  //     user:user
     
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  //   validate: (values) => {
  //     const errors: any = {};

  //     if (values.user.username.length === 0) {
  //       errors.user.username = 'Please enter username';
  //     }
  //     if (values.user.email.length === 0) {
  //       errors.user.email = 'Please enter email';
  //     }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.user.email)) {
  //       errors.user.email = "Invalid email";
  //     }
  //     if (values.user.firstName.length === 0) {
  //       errors.user.firstName = 'Please enter firstname';
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
            style={{ width: '40%' }}
            label="Username"
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            // value={formik.values.user.username}
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
          />
    {/* {formik.touched.user?.username && formik.errors.user?.username ? (
                <Typography
                  variant="body2"
                  sx={{ color: 'red', textAlign: 'start',marginRight:'19rem' }}
                >
                  {formik.errors.user.username}
                </Typography>
              ) : null} */}
          <TextField
            margin="normal"
            style={{ width: '40%' }}
            label="Email"
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            // value={formik.values.user.email}
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
          />
           {/* {formik.touched.user?.email && formik.errors.user?.email ? (
                <Typography
                  variant="body2"
                  sx={{ color: 'red', textAlign: 'start',marginRight:'21rem' }}
                >
                  {formik.errors.user?.email}
                </Typography>
              ) : null} */}

          <TextField
            margin="normal"
            style={{ width: '40%' }}
            label="First Name"
            type="text"
            name="firstName"
             value={user.firstName}
             onChange={handleChange}
            // name="firstname"
            // value={formik.values.user.firstName}
            //     onBlur={formik.handleBlur}
            //     onChange={formik.handleChange}
          />
            {/* {formik.touched.user?.firstName && formik.errors.user?.firstName ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                    marginRight: '20rem',
                  }}
                >
                  {formik.errors.user.firstName}
                </Typography>
              ) : null} */}
          <TextField
            id="outlined-textarea"
            margin="normal"
            style={{ width: '40%' }}
            label="Last Name"
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />

          <Button
            type="submit"
           
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={handleSubmit}
          >
            Add User
          </Button>
          </Grid>
           {/* </form> */}
        </Card> 
      </Grid>
    </Box>
  );
};

export default AddUser;
