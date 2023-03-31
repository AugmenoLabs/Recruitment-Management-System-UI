/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import {
    Box,
    Button,
    Grid,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    MenuItem,
    ListItemIcon,
  } from '@mui/material';
  import React, { useState } from 'react';
  import { useFormik } from 'formik';
  import './ChangePassword.style.scss';
  import Swal from 'sweetalert2';
  import LockIcon from '@mui/icons-material/Lock';
import { PasswordInterface } from '../../Interface/PasswordInterface';
import { ResetPassword } from '../../services/PasswordApi';
import { getToken } from '../../keycloak/GetToken';
import keycloak from '../../keycloak/keycloak';

  const ChangePassword: React.FunctionComponent = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = (): void => {
      setOpen(true);
    };
    const handleClose = (): void => {
      setOpen(false);
    };
  
    const initialValues: PasswordInterface = {
        type:'Password',
        value: '',
        temporary: false,
        // current: '',
      };
    
    const formik = useFormik({
      initialValues,
      onSubmit: async (values, { resetForm }) => {
        try {
            const token = await getToken();
            const id = keycloak.subject;
          await ResetPassword(id,values,token);
          resetForm();
          handleClose();
          void Swal.fire({
            icon: 'success',
            confirmButtonText: 'OK',
            text: 'Password Changed Successfully',
          });
          // console.log(response);
        } catch (error) {
          console.log("err",error);
          void Swal.fire({
            icon: 'error',
            confirmButtonText: 'OK',
            text: 'Error in Changing Password !! Please Try Again',
          });
        }
      }
    });
    
  
    return (
      <div>
        <MenuItem onClick={handleClickOpen}>
          <ListItemIcon>
            <LockIcon fontSize="small" />
          </ListItemIcon>
          Change Password
        </MenuItem>
        <Dialog open={open} onClose={handleClose} maxWidth="sm">
          <DialogTitle className="header" style={{ fontWeight: 600 }}>
            Change Pasword
          </DialogTitle>
          <DialogContent>
            <Box >
              <form onSubmit={formik.handleSubmit}>
                <Grid container justifyContent="space-between">
                  <TextField
                    margin="normal"
                    className="textfield"
                    size="small"
                    fullWidth
                    label="Current Password"
                    type="text"
                    name="current" 
                    
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                  />
                  <TextField
                    margin="normal"
                    className="textfield"
                    label="New password"
                    size="small"
                    type="text"
                    fullWidth
                    name="value"
                    // value="newpassword"
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                  />
                  <TextField
                    id="outlined-textarea"
                    margin="normal"
                    size="small"
                    className="textfield"
                    label="Confirm New Password"
                    type="text"
                    fullWidth
                    name="value"
                    value={formik.values.value}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <DialogActions>
                  <Button variant="contained" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="contained" type="submit">
                    Save
                  </Button>
                </DialogActions>
              </form>
            </Box>
          </DialogContent>
        </Dialog>
      </div>
    );
  };
  
  export default ChangePassword;
  