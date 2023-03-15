import React, {useState} from 'react'
// import { useFormik } from 'formik';
// import { toast } from "react-toastify";
import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
  Autocomplete,
  Card,
  Grid,
} from "@mui/material";


const skills = ["react", "java", "dotnet"];
// const NotRequired = [""];

const InterviewForm :React.FunctionComponent= () => {
  const [autoCompleteValue, setAutoCompleteValue] = useState<any>([]);
  // const [autoCompleteKeyword, setAutoCompleteKeyword] = useState<any>([]);
  return (
    <Container component="main" style={{marginLeft:'0rem'}}>
      <Box
        sx={{
          
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography component="h1" variant="h5" style={{marginTop:'2rem',fontWeight:600,marginLeft:'1rem'}}>
         Create Job Openings
        </Typography>
        <Card style={{width:'97%',marginTop:'1rem',marginLeft:'1rem',backgroundColor:'lavender'}}>
        <Grid container spacing={5}>
          <Grid  item xs={5.5} direction='column' style={{marginLeft:'1rem',marginRight:'2rem'}}>
        <TextField
            margin="normal"
            fullWidth
            size='small'
            label="Job ID"
            type="text"
            name="jobid"
            
          />
          <TextField
            margin="normal"
            size='small'
            fullWidth
            label="Position"
            type="text"
            name="role"
            
          />
          <TextField
            margin="normal"
            fullWidth
            label="Account"
            type="text"
            name="account"
           size="small"
          />
                    <TextField
            margin="normal"
            fullWidth
            label="Team Name"
            type="text"
            name="team"
           size="small"
          />
          <TextField
            margin="normal"
            fullWidth
            label="Location"
            type="text"
            name="location"
           size="small"
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
                size='small'
                name="skills"
              />

            )}
          />
        {/* <TextField
            margin="normal"
            fullWidth
            label="Upload Resume"
            type="file"
            name="vacancies"
           
          /> */}
         
       </Grid>
       <Grid  item xs={5.5} direction='column' >
          
         

          
          

        

          <TextField
            margin="normal"
            fullWidth
            label="Experience"
            type="text"
            name="experience"
            size='small'
          />
        
          <TextField
            margin="normal"
            fullWidth
            label="Qualification"
            type="text"
            size='small'
         
          />
          <TextField
            margin="normal"
            fullWidth
            label="No. Of Positions"
            type="text"
            size='small'
         
          />
         
          <TextField
            margin="normal"
            fullWidth
            label="Job Decription"
            multiline
            rows={3}
            placeholder="Job Description"
            type="text"
             
          />
         
         <TextField
            margin="normal"
            fullWidth
            multiline
            rows={2}
            label="Project details"
            type="text"
            placeholder='Project Details'
           
          />
          
</Grid>
</Grid>         
          <Button
            type="submit"
            size='large'
           style={{alignItems:'center',justifyContent:'center',marginLeft:'32rem'}}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Opening
          </Button>
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Cancel
          </Button> */}
        </Card>
      </Box>
    </Container>
  );
};

export default InterviewForm;
