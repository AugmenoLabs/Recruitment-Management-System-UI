import { useNavigate } from "react-router-dom";
import React from "react";
// import { useFormik } from 'formik';

// import { toast } from "react-toastify";

import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
  Autocomplete,
} from "@mui/material";
import { useState } from "react";

const skills = ["react", "java", "dotnet"];
const NotRequired = [""];

const CandidateApply = () => {
  

  const history = useNavigate();

  //for tags
  
//   const formik = useFormik({
//     initialValues: {
//       role: "",
//       job: "",
//       experience: "",
//       qualification: "",
//       vacancies: "",
//       skills: "",
//       notrequired: "",
    
//     },
    
//     validate: (values:any) => {
//       let errors: any = {};

//       if (!values.role) {
//         errors.role = "Please enter the Role/Designation.";
//       }

//       if (!values.job) {
//         errors.job = "Please enter the Job Description.";
//       }
//       if (!values.experience) {
//         errors.experience = "Please enter the experience required";
//       }
//       if (!values.qualification) {
//         errors.qualification = "Please enter the qualification";
//       }

//       if (!values.vacancies) {
//         errors.vacancies = "Please enter the no. of vacancies";
//       }

//       if (!values.skills) {
//         errors.skills = "Please enter the skills";
//       }

//       return errors;
//     },
//   });

  const [autoCompleteValue, setAutoCompleteValue] = useState<any>([]);
  const [autoCompleteKeyword, setAutoCompleteKeyword] = useState<any>([]);
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4" style={{marginTop:'-5rem'}}>
         Apply for Jobs
        </Typography>
        <Box component="form"  sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            fullWidth
            label="Candidate Name"
            type="text"
            name="role"
            
          />
          <TextField
            margin="normal"
            fullWidth
            label="Contact No."
            type="text"
            name="role"
            
          />
       
          <TextField
            margin="normal"
            fullWidth
            label="Email"
            type="text"
            name="job"
           
          />
        
          <Autocomplete
            multiple
            id="Skills"
            options={skills}
            value={autoCompleteValue}
            onChange={(e, newval) => {
              setAutoCompleteValue(newval);
           
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Skills"
                placeholder="Skills"
                margin="normal"
                fullWidth
                name="skills"
               
                onKeyDown={(e) => {
                  if (
                    e.code === "Enter" &&
                    (e.target as HTMLInputElement).value
                  ) {
                    const val = (e.target as HTMLInputElement).value;
                    setAutoCompleteValue(autoCompleteValue.concat(val));
                    let tagslist = autoCompleteValue.concat(val);
                   
                  }
                }}
              />
            )}
          />

          
          

        

          <TextField
            margin="normal"
            fullWidth
            label="Experience"
            type="text"
            name="experience"
           
          />
        
          <TextField
            margin="normal"
            fullWidth
            label="Current Ctc"
            type="text"
         
          />
          <TextField
            margin="normal"
            fullWidth
            label="Expected Ctc"
            type="text"
         
          />
         
          <TextField
            margin="normal"
            fullWidth
            label="Preferred Location"
            type="text"
            name="vacancies"
           
          />
         
         <TextField
            margin="normal"
            fullWidth
            label="Expected Joining Date"
            type="text"
            name="vacancies"
           
          />
          <TextField
            margin="normal"
            fullWidth
            label="Upload Resume"
            type="file"
            name="vacancies"
           
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Apply
          </Button>
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Cancel
          </Button> */}
        </Box>
      </Box>
    </Container>
  );
};

export default CandidateApply;
