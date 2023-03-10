/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useCallback, useEffect, useState } from 'react';
import { useFormik } from 'formik';
// import { toast } from "react-toastify";
import {
  Box,
  TextField,
  Typography,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Card,
  Grid,
  FormControl,
  SelectChangeEvent,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import uploadImg from '../../assets/cloud-upload-regular-240 (1).png';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { CandidateInterface } from '../../Interface/CandidateInterface';
import { useParams } from 'react-router-dom';
import { addCandidate } from '../../services/CandidateApi';
import { GetVendor } from '../../services/VendorApi';
import { GetOpenPositionById } from '../../services/OpenPositionApi';
import Swal from 'sweetalert2';

const CandidateApply: React.FunctionComponent = () => {
  const [noticePeriod, setnoticePeriod] = React.useState('');
  const handleChangeNotice: any = (event: SelectChangeEvent) => {
    setnoticePeriod(event.target.value);
  };
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string>('');
  const [data, setData] = useState<CandidateInterface[]>([]);
  const [jobType, setjobType] = useState<string>('');
  // const handleChange: any = (event: SelectChangeEvent) => {
  //   const selectedJobtype = event.target.value;
  //   setjobType(selectedJobtype);
  //   formik.setFieldValue('employment', selectedJobtype);
  // };
  const [offer, setoffer] = useState('');
  const handleChangeOffer: any = (event: SelectChangeEvent) => {
    setoffer(event.target.value);
  };
  const { id } = useParams<{ id: string | undefined }>();
  const [positions, setPositions] = useState({
    jobId: '',
    id: '',
    jobTitle: '',
    accountId: '',
    projectId: '',
    skillSet: '',
    yearOfExp: '',
    qualification: '',
    jobDescription: '',
    noOfPositions: 0,
    budget: '',
    location: '',
    account: '',
    project: '',
    totalcandidate: '',
    hired: '',
    status: '',
    screening: '',
    L1: '',
    L2: '',
    Managerial: '',
    HR: '',
  });
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchProjects = async () => {
      try {
        const response = await GetOpenPositionById(id);
        if (response?.data) {
          setPositions(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    // console.log("selectedprojects",projects);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchProjects();
  }, [id]);
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);

  async function fileToBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const binaryStr = reader.result as string;
        const base64Str = btoa(binaryStr);
        resolve(base64Str);
      };
      reader.onerror = () => {
        reject(reader.error);
      };
      reader.readAsBinaryString(file);
    });
  }

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      // Get the first accepted file
      setSelectedFiles([...selectedFiles, ...acceptedFiles]);
      const file = acceptedFiles[0];

      // Set the fileName and fileExt fields in the formik form
      formik.setFieldValue('fileName', file.name);
      formik.setFieldValue('fileExt', file.name.split('.').pop());
      // Convert the file to a byte array
      fileToBase64(file)
        .then((base64Str) => {
          // Set the resume field in the formik form to the base64-encoded string
          formik.setFieldValue('resume', base64Str);
          console.log('arr', base64Str);
        })
        .catch((error) => {
          console.log('err', error);
        });
    },
    [selectedFiles, setSelectedFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const initialValues: CandidateInterface = {
    candidateName: '',
    email: '',
    project: '',
    yearOfExperience: '',
    employment: '',
    noticeperiod: '',
    fileName: '',
    fileExt: '',
    resume: '',
    hasoffer: false,
    contactNumber: 0,
    residentialAddress: '',
    permanenetAddress: '',
    position: 'string',
    primarySkills: '',
    secondarySkills: '',
    account: '',
    status: '',
    Hired: '',
    gender: '',
    selectedJobtype: '',
    currentctc: 0,
    expectedctc: 0,
    vendorId: '',
    vendorName: '',
    selectedVendorId: '',
    id: '',
    qualification: '',
    openPositionId: id,
  };
  const formik = useFormik({
    initialValues,
    // onSubmit: (values) => {
    //   values.vendorId = values.selectedVendorId;
    //   axios
    //     .post(API_URL, values)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   console.log(values);
    // },
    onSubmit: async (values, { resetForm }) => {
      values.vendorId = values.selectedVendorId;
      try {
        await addCandidate(values);
        resetForm();
        void Swal.fire({
          icon: 'success',
          confirmButtonText: 'OK',
          text: 'Candidate Uploaded Successfully',
        });
        // console.log(response);
      } catch (error) {
        console.log(error);
        void Swal.fire({
          icon: 'error',
          confirmButtonText: 'OK',
          text: 'Error in adding candidate!! Please add again',
        });
      }
    },
    validate: (values) => {
      const errors: any = {};

      if (values.candidateName.length === 0) {
        errors.name = 'Please enter name';
      }

      if (values.email.length === 0) {
        errors.email = 'Please enter your email';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email';
      }

      if (values.yearOfExperience.length === 0) {
        errors.experience = 'Please enter your experience';
      }

      return errors;
    },
  });
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      try {
        const result = await GetVendor();
        if (result?.data) {
          setData(result.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
  }, []);

  useEffect(() => {
    const selectedVendor = data.find(
      (Vendor) => Vendor.id === formik.values.selectedVendorId
    );
    setSelectedName(selectedVendor?.vendorName ?? '');
  }, [formik.values.selectedVendorId, data]);
  return (
    <Box
      sx={{
        marginLeft: '2%',
        marginRight: '2%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <Typography
        component="h1"
        variant="h5"
        style={{ fontWeight: 600, marginLeft: '1rem',fontFamily:'sans-serif' ,marginTop:'2rem'}}
      >
        {positions.jobTitle}-{positions.jobId}
      </Typography>
      <Card
        style={{
          marginTop: '1rem',
          marginRight: '1rem',
          marginLeft: '1rem',
          backgroundColor: 'white',
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Grid container justifyContent='space-between' >
            <Grid
              item
              xs={12}
              md={5.2}
              direction="column"
              style={{ marginLeft: '2rem',marginRight:'2rem'}}
            >
              <TextField
                margin="normal"
                fullWidth
                size="small"
                label="Name"
                type="text"
                name="candidateName"
                value={formik.values.candidateName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />{' '}
              {formik.touched.candidateName && formik.errors.candidateName ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                  }}
                >
                  {formik.errors.candidateName}
                </Typography>
              ) : null}
              <TextField
                margin="normal"
                size="small"
                fullWidth
                label="Contact"
                type="text"
                name="contactNumber"
                value={formik.values.contactNumber}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.contactNumber && formik.errors.contactNumber ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                  }}
                >
                  {formik.errors.contactNumber}
                </Typography>
              ) : null}
              <TextField
                margin="normal"
                fullWidth
                label="Email"
                type="email"
                name="email"
                size="small"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                  }}
                >
                  {formik.errors.email}
                </Typography>
              ) : null}
              <FormControl
                style={{ width: '100%', marginTop: '0.6rem' }}
                size="small"
              >
                <InputLabel id="name-label">Vendor</InputLabel>
                <Select
                  fullWidth
                  labelId="name-label"
                  value={formik.values.selectedVendorId}
                  label='Vendor'
                  // update the selectedAccountId field in the values object
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onChange={async (event) =>
                    await formik.setFieldValue(
                      'selectedVendorId',
                      event.target.value
                    )
                  }
                >
                  {data.map((data) => (
                    <MenuItem key={data.id} value={data.id}>
                      {data.vendorName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                margin="normal"
                fullWidth
                label="Experience"
                type="text"
                name="yearOfExperience"
                size="small"
                value={formik.values.yearOfExperience}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.yearOfExperience &&
              formik.errors.yearOfExperience ? (
                <Typography
                  variant="body2"
                  sx={{ color: 'red', textAlign: 'start' }}
                >
                  {formik.errors.yearOfExperience}
                </Typography>
              ) : null}
              <FormControl
                style={{ width: '100%', marginTop: '1rem' }}
                size="small"
              >
                <InputLabel id="demo-simple-select-label">
                  Notice Period
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formik.values.noticeperiod}
                  label="Notice Period"
                  onChange={async (event) =>
                    await formik.setFieldValue(
                      'noticeperiod',
                      event.target.value
                    )
                  }
                >
                  <MenuItem value="immediate">Immediate</MenuItem>
                  <MenuItem value="np">Serving NoticePeriod</MenuItem>
                  <MenuItem value="yet">Yet to Ressign</MenuItem>
                  <MenuItem value="unemploy">Unemployed</MenuItem>{' '}
                </Select>
              </FormControl>
              {noticePeriod === 'np' ? (
                <>
                  <TextField
                    fullWidth
                    label="Last working days "
                    variant="outlined"
                    size="small"
                    margin="normal"
                  />
                </>
              ) : (
                ''
              )}
              {/* <TextField
            margin="normal"
            fullWidth
            label="Upload Resume"
            type="file"
            name="vacancies"
           
          /> */}
            </Grid>
            <Grid item  xs={12}
    md={5.2} direction="column"
            style={{ marginRight: '2rem' }}>
              <FormControl style={{ marginTop: '1rem' }}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Employment Type
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="employment"
                  value={formik.values.employment}
                  onChange={async (event) =>
                    await formik.setFieldValue('employment', event.target.value)
                  }
                >
                  <FormControlLabel
                    value="ft"
                    control={<Radio />}
                    label="Full Time"
                  />
                  <FormControlLabel
                    value="contracter"
                    control={<Radio />}
                    label="Contracter"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                margin="normal"
                fullWidth
                label="Current Ctc"
                type="text"
                name="currentctc"
                value={formik.values.currentctc}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                size="small"
              />
              {formik.touched.currentctc && formik.errors.currentctc ? (
                <Typography
                variant="body2"
                sx={{ color: 'red', textAlign: 'start' }}
                >
            {formik.errors.currentctc}
                </Typography>
              ) : null}
              <TextField
                margin="normal"
                fullWidth
                label="Expected ctc"
                name="expectedctc"
                type="text"
                value={formik.values.expectedctc}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                size="small"
              />
              {formik.touched.expectedctc && formik.errors.expectedctc ? (
                <Typography
                  variant="body2"
                  sx={{ color: 'red', textAlign: 'start' }}
                >
                  {formik.errors.expectedctc}
                </Typography>
              ) : null}

              <FormControl style={{ marginTop: '1rem' }}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Has any Offer?
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="hasoffer"
                  value={formik.values.hasoffer}
                  onChange={async (event) =>
                    await formik.setFieldValue('hasoffer', event.target.value)
                  }
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
<Box  {...getRootProps()}>
<input {...getInputProps()} />
  <Card>
  <Grid container display='flex'>
                    <Box
                      component="img"
                      sx={{
                        height: '50px',
                        marginLeft:'0.5rem'
                      }}
                      alt="Upload_image"
                      src={uploadImg}
                    />
                     <Typography variant="body1" textAlign="left" marginTop="1rem">
                    Drag & drop some files here, or click to select files
                  </Typography>
                  </Grid>
                  <Grid>
                  {selectedFiles.map((item, index) => {
                    return (
                      <Grid key={item} mx="auto">
                        <Typography>{item.name}</Typography>
                      </Grid>
                    );
                  })}
                </Grid>
  </Card>
</Box>
              {/* <Box {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <Typography variant="body1" textAlign="left">
                    Drop the files here ...
                  </Typography>
                ) : (
                  <Typography variant="body1" textAlign="left" marginTop="1rem">
                    Drag & drop some files here, or click to select files
                  </Typography>
                )}
                <Grid
                  container
                  justifyContent={'flex-start'}
                  alignItems="flex-start"
                >
                  <Grid item mx="auto">
                    <Box
                      component="img"
                      sx={{
                        height: '80px',
                      }}
                      alt="Upload_image"
                      src={uploadImg}
                    />
                  </Grid>
                </Grid>
                <Grid>
                  {selectedFiles.map((item, index) => {
                    return (
                      <Grid key={item} mx="auto">
                        <Typography>{item.name}</Typography>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box> */}
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
          <Button
            type="submit"
            size="large"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
          </Grid>
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Cancel
          </Button> */}
        </form>
      </Card>
    </Box>
  );
};

export default CandidateApply;
