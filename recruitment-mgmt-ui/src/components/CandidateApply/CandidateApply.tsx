import React ,{ useState }from "react";
// import { useFormik } from 'formik';
// import { toast } from "react-toastify";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
  Autocomplete,
  Grid,
  Card,
  IconButton,
} from "@mui/material";


const skills = ["react", "java", "dotnet"];
// const NotRequired = [""];

const CandidateApply:React.FunctionComponent = () => {
  
  
  const [autoCompleteValue, setAutoCompleteValue] = useState<any>([]);
  // const [autoCompleteKeyword, setAutoCompleteKeyword] = useState<any>([]);
  return (
    <Container component="main" maxWidth="lg" style={{marginLeft:'5rem'}}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography component="h1" variant="h5" style={{marginTop:'-6rem',fontWeight:600}}>
         Apply for Jobs
        </Typography>
        <Card style={{width:'97%',marginTop:'0.5rem',backgroundColor:'lavender'}}>
        <Grid container spacing={7}>
          <Grid  item xs={5.5} direction='column' style={{marginLeft:'1rem',marginRight:'2rem'}}>
        <TextField
            margin="normal"
            fullWidth
            size='small'
            label="Candidate Name"
            type="text"
            name="role"
            
          />
          <TextField
            margin="normal"
            size='small'
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
          <Box sx={{border:1,borderColor:'gray',marginTop:'1rem',borderRadius:'3px'}}>
          <IconButton><CloudUploadIcon/></IconButton>
            <input type='file' />
            </Box>
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
            label="Current Ctc"
            type="text"
            size='small'
         
          />
          <TextField
            margin="normal"
            fullWidth
            label="Expected Ctc"
            type="text"
            size='small'
         
          />
         
          <TextField
            margin="normal"
            fullWidth
            label="Preferred Location"
            type="text"
            name="vacancies"
           size='small'  
          />
         
         <TextField
            margin="normal"
            fullWidth
            label="Expected Joining Date"
            type="text"
            name="vacancies"
            size='small'
           
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
        </Card>
      </Box>
    </Container>
  );
};

export default CandidateApply;
