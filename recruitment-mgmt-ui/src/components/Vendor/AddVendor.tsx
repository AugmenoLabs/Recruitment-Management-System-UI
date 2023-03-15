/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { VendorInterface } from '../../Interface/VendorInterface';
import { addVendor } from '../../services/VendorApi';
import Swal from 'sweetalert2';
// interface AddAccountInterface{
//   id:string;
//   accountId: string;
//     accountName: string;
//     accountDetails: string;
//     accountManager: string;
// }
const AddVendor: React.FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };
  
  const initialValues:VendorInterface={
    vendorId:'',
    vendorName: '',
    spocName: '',
    spocContactNumber: 0,
    spocEmail: '',
    id: '',
    selectedVendorId: ''
  }
  const formik = useFormik({
    initialValues ,
    onSubmit: async (values, { resetForm }) => {
      try {
        await addVendor(values);
        resetForm();
        handleClose();
        void Swal.fire({
          icon: 'success',
          confirmButtonText: 'OK',
          text: 'Vendor added Successfully',
        });
      } catch (error) {
        console.log(error);
        void Swal.fire({
          icon: 'error',
          confirmButtonText: 'OK',
          text: 'Error in adding account!! Please add again',
        });
      }
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
    <div className="account_css">
      <Button variant="contained" onClick={handleClickOpen}>
        Add Vendor
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm">
        <DialogTitle className="header" style={{ fontWeight: 600 }}>
          Add Vendor
        </DialogTitle>
        <DialogContent>
          <Box className="add">
          <form onSubmit={formik.handleSubmit}>
          <Grid container justifyContent="space-between">
              <TextField
                margin="normal"
                className="textfield"
                size="small"
                label="Vendor Name"
                type="text"
                name="vendorName"
                fullWidth
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
                className="textfield"
                fullWidth
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
                fullWidth
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
                fullWidth
                label="SPOC Email"
                type="email"
                name="spocEmail"
                value={formik.values.spocEmail}
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

export default AddVendor;
