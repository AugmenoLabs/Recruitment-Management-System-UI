import React ,{ useState }from "react";
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


const skills = ["react", "java", "dotnet"];
// const NotRequired = [""];

const CandidateApply:React.FunctionComponent = () => {
  
  
  const [autoCompleteValue, setAutoCompleteValue] = useState<any>([]);
  // const [autoCompleteKeyword, setAutoCompleteKeyword] = useState<any>([]);
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
