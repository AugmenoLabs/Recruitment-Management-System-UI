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
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { addAccount } from '../../services/AccountApi';
import { AddAccountInterface } from '../../Interface/AddAccountInterface';
import './Account.style.scss';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const AddAccount: React.FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  const initialValues: AddAccountInterface = {
    id: '',
    accountId: '',
    accountName: '',
    accountManager: '',
    accountDetails: '',
  };
  const validationSchema = Yup.object().shape({
    accountName: Yup.string().required('Please enter name'),
    accountManager: Yup.string().required('Please enter manager name'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await addAccount(values);
        resetForm();
        handleClose();
        void Swal.fire({
          icon: 'success',
          confirmButtonText: 'OK',
          text: 'Account added Successfully',
        });
        // console.log(response);
      } catch (error) {
        console.log(error);
        void Swal.fire({
          icon: 'error',
          confirmButtonText: 'OK',
          text: 'Error in adding account!! Please add again',
        });
      }
    },
  });

  return (
    <div className="account_css">
      <Button variant="contained" onClick={handleClickOpen}>
        Add Account
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm">
        <DialogTitle className="header" style={{ fontWeight: 600 }}>
          Add Account
        </DialogTitle>
        <DialogContent>
          <Box className="add">
            <form onSubmit={formik.handleSubmit}>
              <Grid container justifyContent="space-between">
                <TextField
                  margin="normal"
                  className="textfield"
                  size="small"
                  fullWidth
                  label="Account Name"
                  type="text"
                  name="accountName"
                  value={formik.values.accountName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={formik.touched.accountName && Boolean(formik.errors.accountName)}
                  helperText={formik.touched.accountName && formik.errors.accountName}
                />
                <TextField
                  margin="normal"
                  className="textfield"
                  label="Account Manager"
                  size="small"
                  type="text"
                  fullWidth
                  name="accountManager"
                  value={formik.values.accountManager}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={formik.touched.accountManager && Boolean(formik.errors.accountManager)}
                  helperText={formik.touched.accountManager && formik.errors.accountManager}
                />
                <TextField
                  id="outlined-textarea"
                  margin="normal"
                  multiline
                  rows={3}
                  size="small"
                  className="textfield"
                  label="Account Details"
                  type="text"
                  fullWidth
                  name="accountDetails"
                  value={formik.values.accountDetails}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.accountDetails &&
                formik.errors.accountDetails ? (
                  <Typography variant="body2" className="error">
                    {formik.errors.accountDetails}
                  </Typography>
                ) : null}
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

export default AddAccount;
