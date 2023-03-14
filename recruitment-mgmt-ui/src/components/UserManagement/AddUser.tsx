/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState } from 'react';
// import { useFormik } from 'formik';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material';
// import axios from 'axios';
import { getToken } from '../../keycloak/GetToken';
import { UserInterface } from '../../Interface/UserInterface';
import { addUser } from '../../services/UserApi';
import Swal from 'sweetalert2';

const AddUser: React.FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  const [user, setUser] = useState<UserInterface>({
    id: '',
    username: '',
    email: '',
    firstName: '',
    lastName: '',
  });

  const handleReset = (): void => {
    setUser({
      id: '',
      username: '',
      email: '',
      firstName: '',
      lastName: '',
    });
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSubmit = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const token = await getToken();
    await addUser(user, token)
      .then((response) => {
        console.log(response.data);
        handleReset();
        void Swal.fire({
          icon: 'success',
          confirmButtonText: 'OK',
          text: 'User Created Successfully',
        });
      })
      .catch((error) => {
        console.error('err', error);
        void Swal.fire({
          icon: 'error',
          confirmButtonText: 'OK',
          text: 'Failed to add role',
        });
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
    <div className="account_css">
      <Button
        variant="contained"
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          mt: 0,
          mb: 0,
          marginLeft: 95,
        }}
        onClick={handleClickOpen}
      >
        Add User
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm">
        <DialogTitle className="header" style={{ fontWeight: 600 }}>
          Add User
        </DialogTitle>
        <DialogContent>
          {/* <form onSubmit={formik.handleSubmit}> */}
          <Grid justifyContent="space-between">
            <TextField
              margin="normal"
              className="textfield"
              fullWidth
              size="small"
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
              fullWidth
              size="small"
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
              fullWidth
              size="small"
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
              fullWidth
              size="small"
              label="Last Name"
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
            />

            {/* <Button
            type="submit"
           
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={handleSubmit}
          >
            Add User
          </Button>
          </Grid> */}
            {/* </form> */}
          </Grid>
          <DialogActions>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit" onClick={handleSubmit}>
              Save
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddUser;
