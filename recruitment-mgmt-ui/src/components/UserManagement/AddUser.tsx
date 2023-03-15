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
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddUser: React.FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  const initialValues: UserInterface ={
    id: '',
    username: '',
    email: '',
    firstName: '',
    lastName: '',
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Please enter user name'),
    email: Yup.string()
      .required('Please enter email')
      .email('Invalid email'),
    firstName: Yup.string().required('Please enter First name'),
  });

  // const [user, setUser] = useState<UserInterface>({
  //   id: '',
  //   username: '',
  //   email: '',
  //   firstName: '',
  //   lastName: '',
  // });

  // const handleReset = (): void => {
  //   setUser({
  //     id: '',
  //     username: '',
  //     email: '',
  //     firstName: '',
  //     lastName: '',
  //   });
  // };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setUser({ ...user, [event.target.name]: event.target.value });
  // };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  // const handleSubmit = async (event: React.MouseEvent<HTMLElement>) => {
  //   event.preventDefault();
  //   const token = await getToken();
  //   await addUser(user, token)
  //     .then((response) => {
  //       console.log(response.data);
  //       handleReset();
  //       void Swal.fire({
  //         icon: 'success',
  //         confirmButtonText: 'OK',
  //         text: 'User Created Successfully',
  //       });
  //     })
  //     .catch((error) => {
  //       console.error('err', error);
  //       void Swal.fire({
  //         icon: 'error',
  //         confirmButtonText: 'OK',
  //         text: 'Failed to add role',
  //       });
  //     });
  // };
   const formik = useFormik({
     initialValues,
     validationSchema,
     onSubmit: async (values, { resetForm }) => {
        const token = await getToken();
        await addUser(values, token)
      .then((response) => {
        console.log(response.data);
        resetForm();
        handleClose();
        void Swal.fire({
          icon: 'success',
          confirmButtonText: 'OK',
          text: 'User Created Successfully',
        });
      })
      .catch((error) => {
        console.error('err', error);
        handleClose();
        void Swal.fire({
          icon: 'error',
          confirmButtonText: 'OK',
          text: 'Failed to add user !! User exists with same Username or Email',
        });
      });
    }
  });

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
           <form onSubmit={formik.handleSubmit}> 
          <Grid justifyContent="space-between">
            <TextField
              margin="normal"
              className="textfield"
              fullWidth
              size="small"
              label="Username"
              type="text"
              name="username"
               value={formik.values.username}
               onBlur={formik.handleBlur}
               onChange={formik.handleChange}
               error={formik.touched.username && Boolean(formik.errors.username)}
               helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
              margin="normal"
              fullWidth
              size="small"
              label="Email"
              type="text"
              name="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
           />
            
            <TextField
              margin="normal"
              fullWidth
              size="small"
              label="First Name"
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            
            <TextField
              id="outlined-textarea"
              margin="normal"
              fullWidth
              size="small"
              label="Last Name"
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
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
            <Button variant="contained" type="submit" >
              Save
            </Button>
          </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddUser;
