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
} from '@mui/material';
import uploadImg from '../../image/cloud-upload-regular-240 (1).png';
import { useDropzone } from 'react-dropzone';




const CandidateApply: React.FunctionComponent = () => {
 
  // const [autoCompleteKeyword, setAutoCompleteKeyword] = useState<any>([]);
  const [noticePeriod, setnoticePeriod] = React.useState('');
  const handleChangeNotice: any = (event: SelectChangeEvent) => {
    setnoticePeriod(event.target.value);
  };

  const [jobType, setjobType] = useState('');
  const handleChange: any = (event: SelectChangeEvent) => {
    setjobType(event.target.value);
  };
  const [offer, setoffer] = useState('');
  const handleChangeOffer: any = (event: SelectChangeEvent) => {
    setoffer(event.target.value);
  };

  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setSelectedFiles([...selectedFiles, ...acceptedFiles]);
    },
    [setSelectedFiles, selectedFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const formik = useFormik({
    initialValues: {
      name: '',
      contact: '',
      email: '',
      vendor:'',
      experience:'',
      employment:'',
      noticeperiod:'',
      currentctc:'',
      expectedctc:'',

    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      const errors: any = {};

      if (values.name.length === 0) {
        errors.name = 'Please enter name';
      }
      if (values.contact.length === 0) {
        errors.contact = 'Please enter contact no.';
      }
      if (values.email.length === 0 ) {
        errors.email = 'Please enter your email';
      }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email";
      }
      if (values.vendor.length === 0) {
        errors.vendor = 'Please enter vendor details';
      }
      if (values.experience.length === 0) {
        errors.experience = 'Please enter your experience';
      }
      // if (values.employment.length === 0) {
      //   errors.employment = 'Please slect employment type';
      // }
      // if (values.noticeperiod.length === 0) {
      //   errors.noticeperiod = 'Please select notice period';
      // }
      if (values.currentctc.length === 0) {
        errors.currentctc = 'Please enter your current ctc';
      }
      if (values.expectedctc.length === 0) {
        errors.expectedctc = 'Please enter your expected ctc';
      }
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
                name="name"
                value={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
          /> {formik.touched.name && formik.errors.name ? (
            <Typography
              variant="body2"
              sx={{
                color: 'red',
                textAlign: 'start',
              
              }}
            >
              {formik.errors.name}
                </Typography>
              ) : null}
              <TextField
                margin="normal"
                size="small"
                fullWidth
                label="Contact"
                type="text"
                name="contact"
                value={formik.values.contact}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.contact && formik.errors.contact ? (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'start',
                 
                  }}
                >
                  {formik.errors.contact}
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
                label="Team Name"
                type="text"
                name="vendor"
                size="small"
                value={formik.values.vendor}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
           
          />
      {formik.touched.vendor && formik.errors.vendor ? (
            <Typography
              variant="body2"
              sx={{
                color: 'red',
                textAlign: 'start',
              }}
            >
              {formik.errors.vendor}
            </Typography>
          ) : null}
              <TextField
                margin="normal"
                fullWidth
                label="Experience"
                type="text"
                name="experience"
                size="small"
                value={formik.values.experience}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.experience && formik.errors.experience ? (
                <Typography
                  variant="body2"
                  sx={{ color: 'red', textAlign: 'start' }}
                >
                  {formik.errors.experience}
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
            <FormControl style={{ width: '100%', marginTop: '1rem' }} size="small">
          <InputLabel id="demo-simple-select-label">Employment Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={jobType}
            label="Employment Type"
            onChange={handleChange}
          >
            <MenuItem value="yes">Full Time</MenuItem>
            <MenuItem value="no">Contracter</MenuItem>
          </Select>
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

            
             <FormControl style={{ width: '100%' ,marginTop:'0.6rem'}} size="small">
          <InputLabel id="demo-simple-select-label">Has Any Offer</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={offer}
            label="Has Any Offer"
            onChange={handleChangeOffer}
          >
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
          </Select>
        </FormControl>
          
         <Box {...getRootProps()} >
          <input {...getInputProps()} />
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
