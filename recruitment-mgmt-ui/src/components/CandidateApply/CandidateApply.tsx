import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import { toast } from "react-toastify";
import {

  Box,
  Typography,
  Button,
  Grid,
  Card,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
// import { useFormik } from "formik";
import Candidatepi from './Candidatepi';
import Candidatejob from './Candidatejob';
import CandidateCompensation from './CandidateCompensation';
import Candidateresume from './Candidateresume';




const steps = [
  'Personal Details',
 'Professional Details',
 'Offer Details','Upload Resume',
];



// const skills = ["react", "java", "dotnet"];
// const NotRequired = [""];



const CandidateApply: React.FunctionComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  // const handleNext = ():any => {
  //   let newSkipped = skipped;
  //   if (isStepSkipped(activeStep))
  //   {
  //     newSkipped = new Set(newSkipped.values());
  //     newSkipped.delete(activeStep);
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped(newSkipped);
  // };
  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleStep = (index: number) :void => {
    setActiveStep(index);
  };

  // const handleSkip = ()=> {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  // const handleReset = () :void=> {
  //   setActiveStep(0);
  // };

  const formContent: any = (step: any) => {
    switch (step) {
      case 0:
        return <Candidatepi />;
      case 1:
        return <Candidatejob />;
      case 2:
        return <CandidateCompensation />;
      case 3:
        return <Candidateresume />;
    }
  };

  // const [autoCompleteValue, setAutoCompleteValue] = useState<any>([]);
  // const [autoCompleteKeyword, setAutoCompleteKeyword] = useState<any>([]);
  return (
   
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginLeft:'2%',
          marginRight:'2%'
        }}
      >
        <Typography
          // component="h1"
          variant="h6"
          style={{ marginTop: '2rem', fontWeight: 500,color:'grey' }}
        >
          You are applying for
        </Typography>
        <Typography
          component="h1"
          variant="h5"
          style={{ fontWeight: 600 }}
        >
          Frontend Developer-#2301
        </Typography>
        <Grid container justifyContent="center" alignItems="center">
          <Card
            style={{
              width: '100%',
              marginTop: '1rem',
              backgroundColor: 'lavender',
            }}
          >
            <Stepper
              activeStep={activeStep}
              style={{
                marginTop: '2rem',
                marginLeft: '4rem',
                marginRight: '4rem',
              }}
            >
              {steps.map((label, index) => (
                <Step key={index}>
                           
                  <StepLabel onClick={()=>handleStep(index)}>
                   {label}</StepLabel>
                
  
                </Step>
              ))}
            </Stepper>

            {activeStep === steps.length ? (
              <>            
                <Typography>Thankyou for applying</Typography>
             
              </>)
               : (
                
 <Grid container direction="column">
                <Grid item>{formContent(activeStep)}</Grid>
                <Box
                  component="span"
                  m={1}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    marginLeft: '2rem',
                    marginBottom: '2rem',
                    marginRight: '2rem',
                  }}
                >
                  <Button
                    variant="contained"
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 8 }}
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={handleNext}
                    variant="contained"
                    sx={{ alignItems: 'flex-end' }}
                  >
                    {activeStep === steps.length - 1 ? 'Apply' : 'Next'}
                  </Button>
                </Box>
              </Grid>
            )}
          </Card>
        </Grid>
      </Box>
   
  );
};

export default CandidateApply;
