/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Button,  Dialog, DialogActions, DialogContent, DialogTitle, Grid,  TextField } from '@mui/material';
// import axios from 'axios';
import React, { useState } from 'react';
// import { clientId } from '../../keycloak/ClientDetails';
import { getToken } from '../../keycloak/GetToken';
import { RoleInterface } from '../../Interface/RoleInterface';
import { addRole } from '../../services/UserApi';
// import { useFormik } from 'formik';


const AddRole: React.FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };
  const [role, setRole] = useState<RoleInterface>({
    id:'',
    name: '',
    description: '',
  });

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole({ ...role, [event.target.name]: event.target.value });
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const AddRole =  async (event:React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const token = await getToken();
    await addRole(role,token)
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
    <div className="account_css">
      <Button
        variant="contained"
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          mt: 0,
          mb: 0,
          marginLeft: 87,
        }}
        onClick={handleClickOpen}
      >
        Add Role
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm">
        <DialogTitle className="header" style={{ fontWeight: 600 }}>
          Add Role
        </DialogTitle>
        <DialogContent>
          {/* <form onSubmit={formik.handleSubmit}> */}
          <Grid justifyContent="space-between">
          <TextField
            margin="normal"
            fullWidth
              size="small"
            label="Role name"
            type="text"
            value={role.name}
            onChange={handleChange}
            name="name"
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
              size="small"
            label="Description"
            type="text"
            name="description"
            value={role.description}
            onChange={handleChange}
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
          </Grid>
          <DialogActions>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit" onClick={AddRole}>
              Save
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddRole;
