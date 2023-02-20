/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useCallback, useState } from 'react';
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
import uploadImg from '../../image/cloud-upload-regular-240 (1).png';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { CandidateInterface } from '../../Interface/CandidateInterface';




const CandidateApply: React.FunctionComponent = () => {
  const API_URL="http://localhost:5141/api/v1/CandidateProfile";
  // const [autoCompleteKeyword, setAutoCompleteKeyword] = useState<any>([]);
  const [noticePeriod, setnoticePeriod] = React.useState('');
  const handleChangeNotice: any = (event: SelectChangeEvent) => {
    setnoticePeriod(event.target.value);
  };

  const [jobType, setjobType] = useState<string>("");
  const handleChange: any = (event: SelectChangeEvent) => {
    const selectedJobtype = event.target.value;
    setjobType(selectedJobtype);
    formik.setFieldValue('employment',selectedJobtype);
  };
  const [offer, setoffer] = useState('');
  const handleChangeOffer: any = (event: SelectChangeEvent) => {
    setoffer(event.target.value);
  };
  // const [jobType, setjobType] = useState('');
  // const handleChange: any = (event: SelectChangeEvent) => {
  //   setjobType(event.target.value);
  // };
  // const [offer, setoffer] = useState('');
  // const handleChangeOffer: any = (event: SelectChangeEvent) => {
  //   setoffer(event.target.value);
  // };

  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);
  
  function fileToBase64(file: File): Promise<string> {
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
      const file = acceptedFiles[0];
      // Set the fileName and fileExt fields in the formik form
      formik.setFieldValue("fileName", file.name);
      formik.setFieldValue("fileExt", file.name.split(".").pop());
      // Convert the file to a byte array
      fileToBase64(file)
        .then((base64Str) => {
          // Set the resume field in the formik form to the base64-encoded string
          formik.setFieldValue("resume", base64Str);
          console.log("arr",base64Str);
        })
        .catch((error) => {
          console.log("err",error);
        });
    },[selectedFiles,setSelectedFiles]
  );
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const initialValues:CandidateInterface={
    candidateName: '',
    contactNumber: 0,
      email: '',
      vendor:'',
      yearOfExperience:'',
      employment:'',
      noticeperiod:'',
      fileName:'',
      fileExt:'',
      resume:'',
      expectedctc:0,
      hasoffer:false

    }
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      axios.post(API_URL, values)
      .then((response) => {
      
      
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(values);
      
    },
    validate: (values) => {
      const errors: any = {};

      if (values.candidateName.length === 0) {
        errors.name = 'Please enter name';
      }
      
      if (values.email.length === 0 ) {
        errors.email = 'Please enter your email';
      }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email";
      }
       if (values.vendor.length === 0) {
         errors.vendor = 'Please enter vendor details';
       }
      if (values.yearOfExperience.length === 0) {
        errors.experience = 'Please enter your experience';
      }
      // if (values.employment.length === 0) {
      //   errors.employment = 'Please slect employment type';
      // }
      // if (values.noticeperiod.length === 0) {
      //   errors.noticeperiod = 'Please select notice period';
      // }
      // if (values.currentctc.length === 0) {
      //   errors.currentctc = 'Please enter your current ctc';
      // }
      // if (values.expectedctc.length === 0) {
      //   errors.expectedctc = 'Please enter your expected ctc';
      // }
      return errors;
    },
  });

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
        variant="h6"
        style={{ marginTop: '2rem', color:'grey',marginLeft: '1rem' }}
      >
        You are applying for
      </Typography>
      <Typography
        component="h1"
        variant="h5"
        style={{fontWeight: 600, marginLeft: '1rem' }}
      >
Frontend Developer-#2301
      </Typography>
      <Card
        style={{
          width: '97%',
          marginTop: '1rem',
          marginLeft: '1rem',
          backgroundColor: 'lavender',
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={5}>
            <Grid
              item
              xs={5.5}
              direction="column"
              style={{ marginLeft: '1rem', marginRight: '2rem' }}
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
          /> {formik.touched.candidateName && formik.errors.candidateName ? (
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
              <TextField
                margin="normal"
                fullWidth
                label="Vendor"
                type="text"
                name="vendor"
                size="small"
                value={formik.values.vendor}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
           
          />
      {formik.touched.project && formik.errors.project ? (
            <Typography
              variant="body2"
              sx={{
                color: 'red',
                textAlign: 'start',
              }}
            >
              {formik.errors.project}
            </Typography>
          ) : null}
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
              {formik.touched.yearOfExperience && formik.errors.yearOfExperience ? (
                <Typography
                  variant="body2"
                  sx={{ color: 'red', textAlign: 'start' }}
                >
                  {formik.errors.yearOfExperience}
                </Typography>
              ) : null}
              <FormControl   style={{ width: '100%', marginTop: '1rem' }} size="small">
          <InputLabel id="demo-simple-select-label">Notice Period</InputLabel>
          <Select
          
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={noticePeriod}
            label="Notice Period"
            onChange={handleChangeNotice}
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
            <Grid item xs={5.5} direction="column">
            <FormControl style={{marginTop:'1rem'}}>
      <FormLabel id="demo-row-radio-buttons-group-label">Employment Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="ft" control={<Radio />} label="Full Time" />
        <FormControlLabel value="contracter" control={<Radio />} label="Contracter" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
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

            
<FormControl style={{marginTop:'1rem'}}>
      <FormLabel id="demo-row-radio-buttons-group-label">Has ANy Offer?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />

      </RadioGroup>
    </FormControl>
    <FormControl   style={{ width: '100%', marginTop: '1rem' }} size="small">
          <InputLabel id="demo-simple-select-label">Vendor</InputLabel>
          <Select
          
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={noticePeriod}
            label="Notice Period"
            onChange={handleChangeNotice}
          >
            <MenuItem value="immediate">Linkedin</MenuItem>
            <MenuItem value="np">Naukari</MenuItem>
            
          </Select>
        </FormControl>
          
         <Box {...getRootProps()} >
          <input {...getInputProps()} 
          />
          {isDragActive ? (
            <Typography variant="body1" textAlign="left">
              Drop the files here ...
            </Typography>
          ) : (
            <Typography variant="body1" textAlign="left" marginTop='1rem'>
              Drag & drop some files here, or click to select files
            </Typography>
          )}
          <Grid container justifyContent={'flex-start'} alignItems='flex-start'>
            <Grid item mx="auto">
              <Box
                component="img"
                sx={{
                  height: '80px' ,
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
        </Box>
        
 
            </Grid>
          </Grid>
          <Button
            type="submit"
            size="large"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '32rem',
            }}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
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
