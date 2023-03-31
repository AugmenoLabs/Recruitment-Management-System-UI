/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import {
  Box,
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { AccountInterface } from '../../Interface/AccountInterface';
import { ProjectInterface } from '../../Interface/ProjectInterface';
import { GetAccount } from '../../services/AccountApi';
import { addProject } from '../../services/ProjectApi';
import '../Account/Account.style.scss';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

// const Accounts = ['Honeywell', 'LG', 'Symphony'];
// const handleAddSkillTags: any = (value: any) => {
//   const skillValue = value.toString();
//   value.setFieldValue('skills', skillValue);
// };
// const handleRemoveSkills: any = (value: any) => {
//   value.setFieldValue('skills', value);
// };

const AddProject: React.FunctionComponent = () => {
  // const [accountsValue, setaccountsValue] = useState<any>([]);

  // const [names, setNames] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedName, setSelectedName] = useState<string>('');
  const [open, setOpen] = useState(false);
  const handleClickOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
    
  };
  const initialValues: ProjectInterface = {
    id: '',
    projectName: '',
    projectDetails: '',
    projectManager: '',
    projectId: '',
    selectedAccountId: '',
    accountId: '',
  };

  const validationSchema = Yup.object().shape({
    projectName: Yup.string().required('Please enter name'),
    projectManager: Yup.string().required('Please enter manager name'),
    // selectedAccountId: Yup.number().required('Account is required'),
  });


  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      values.accountId = values.selectedAccountId;
      try {
        await addProject(values);
        resetForm();
        handleClose();
        void Swal.fire({
          icon: 'success',
          confirmButtonText: 'OK',
          text: 'Project added Successfully',
        });
        // console.log(response);
      } catch (error) {
        console.log(error);
        handleClose();
        void Swal.fire({
          icon: 'error',
          confirmButtonText: 'OK',
          text: 'Error in adding project!! Please add again',
        });
      }
    },
  });
  const [data, setData] = useState<AccountInterface[]>([]);
  useEffect(() => {
    GetAccount()
      .then((response: any) => {
        setData(response.data);
      })
      .catch((error: any) => console.log('error', error));
  }, []);

  useEffect(() => {
    const selectedAccount = data.find(
      (account) => account.id === formik.values.selectedAccountId
    );
    setSelectedName(selectedAccount?.accountName ?? '');
  }, [formik.values.selectedAccountId, data]);
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Project
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm">
        <DialogTitle className="header" style={{ fontWeight: 600 }}>
          Add Project
        </DialogTitle>
        <DialogContent>
          {/* <Box
      sx={{
        marginLeft: '2%',
        marginRight: '2%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >

    </Box> */}
          <Box className="add">
            {/* <Grid container justifyContent="center" alignItems="center">
        <Card
          className='cardstyle'
        > */}

            <form onSubmit={formik.handleSubmit}>
              <Grid container justifyContent="space-between">
                {/* <Autocomplete
                multiple
                size="small"
                style={{ width: '40%' }}
                id="accounts"
                options={Accounts}
                value={accountsValue}
                onChange={(e, newval) => {
                  setaccountsValue(newval);
                  handleRemoveSkills(newval);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Accounts"
                    placeholder="Accounts"
                    margin="normal"
                    fullWidth
                    name="Accounts"
                    onKeyDown={(e) => {
                      if (
                        e.code === 'Enter'
                        // && (e.target as HTMLInputElement).value
                      ) {
                        const val = (e.target as HTMLInputElement).value;
                        setaccountsValue(accountsValue.concat(val));
                        const tagslist = accountsValue.concat(val);
                        handleAddSkillTags(tagslist);
                      }
                    }}
                  />
                )}
              /> */}

                <FormControl style={{ marginTop: '1rem', width: '100%' }}>
                  <InputLabel id="name-label">Account</InputLabel>
                  <Select
                    fullWidth
                    labelId="name-label"
                    label="Account"
                    value={formik.values.selectedAccountId}
                    // update the selectedAccountId field in the values object
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onChange={async (event) =>
                      await formik.setFieldValue(
                        'selectedAccountId',
                        event.target.value
                      )
                    } 
                  >
                    {data.map((data) => (
                      <MenuItem key={data.id} value={data.id}>
                        {data.accountName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  margin="normal"
                  className="textfield"
                  size="small"
                  label="Project Name"
                  type="text"
                  name="projectName"
                  fullWidth
                  value={formik.values.projectName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                   error={formik.touched.projectName && Boolean(formik.errors.projectName)}
                   helperText={formik.touched.projectName && formik.errors.projectName}
                />
                <TextField
                  margin="normal"
                  className="textfield"
                  size="small"
                  label="Project Manager"
                  type="text"
                  name="projectManager"
                  fullWidth
                  value={formik.values.projectManager}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                   error={formik.touched.projectManager && Boolean(formik.errors.projectManager)}
                   helperText={formik.touched.projectManager && formik.errors.projectManager}
                />
                <TextField
                  id="outlined-textarea"
                  margin="normal"
                  multiline
                  rows={2}
                  className="textfield"
                  size="small"
                  label="Project Details"
                  type="text"
                  name="projectDetails"
                  fullWidth
                  value={formik.values.projectDetails}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </Grid>
            {/* </Card>
      </Grid> */}
          
          <DialogActions>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit" >
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

export default AddProject;
