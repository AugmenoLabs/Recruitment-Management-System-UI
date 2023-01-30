import React, {useState} from 'react'
// import { useFormik } from 'formik';
import "./Requisition.css";
// import { toast } from "react-toastify";
import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
  Autocomplete,
} from "@mui/material";


const skills = ["react", "java", "dotnet"];
const NotRequired = [""];

const Requisition :React.FunctionComponent= () => {
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
         Create Job Openings
        </Typography>
        <Box component="form"  sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            fullWidth
            label="Job Id"
            type="text"
            name="role"
            
          />
          <TextField
            margin="normal"
            fullWidth
            label="Role/Designation"
            type="text"
            name="role"
            
          />
       
          <TextField
            margin="normal"
            fullWidth
            label="Job Description"
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
              
              />
            )}
          />

          
          <Autocomplete
            multiple
            id="Notrequired"
            options={NotRequired}
            value={autoCompleteKeyword}
            onChange={(e, newval) => {
              setAutoCompleteKeyword(newval);
           
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Not Required"
                placeholder="Not Required"
                margin="normal"
                fullWidth
                name="notrequired"
             
              
              />
            )}
          />

        

          <TextField
            margin="normal"
            fullWidth
            label="Required Experience"
            type="text"
            name="experience"
           
          />
        
          <TextField
            margin="normal"
            fullWidth
            label="Qualification"
            type="text"
         
          />
         
          <TextField
            margin="normal"
            fullWidth
            label="No. of Openings"
            type="text"
            name="vacancies"
           
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Requistion
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

export default Requisition;
