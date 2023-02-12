import { Autocomplete, Box, Button,Grid,Card,TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
const Accounts = ["Honeywell", "LG", "Symphony"];
const handleAddSkillTags: any = (value: any) => {
  const skillValue = value.toString();
  value.setFieldValue('skills', skillValue);
};
const handleRemoveSkills: any = (value: any) => {
  value.setFieldValue('skills', value);
};
const AddProject:React.FunctionComponent = () => {
    const [accountsValue, setaccountsValue] = useState<any>([]);
  return (
    
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginLeft:'2%',
      marginRight:'2%',
      marginTop:'2%',
    }}
  >
   <Typography
      component="h1"
      variant="h5"
      style={{ fontWeight: 600,marginTop:'2%' }}
    >
    Add Account
    </Typography>
    <Grid container justifyContent="center" alignItems="center">
      <Card
        style={{
         marginBottom:'1%',
          width: '100%',
          marginTop: '1rem',
          backgroundColor: 'lavender',
        }}
      >
          <Grid  container
    direction="column" 
    style={{ marginLeft: '2rem', marginRight: '2rem' }}
    justifyContent="center"
    alignItems="center">

<Autocomplete
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
              name="skills"
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
        />
         
          <TextField
            margin="normal"
            style={{ width: '40%' }}
            size='small'
           
            label="Project ID"
            type="text"
            name="project_ID"
          />

          <TextField
            margin="normal"
            style={{ width: '40%' }}
            size='small'
              label="Project Name"
            type="text"
            name="Pname"
          />

          <TextField
            margin="normal"
            style={{ width: '40%' }}
            size='small'
            label="Project Manager"
            type="text"
            name="Pmanager"
          />
          <TextField
            id="outlined-textarea"
            margin="normal"
            multiline
            rows={2}
            style={{ width: '40%' }}
            size='small'
            label="Project Details"
            type="text"
            name="PDetails"
          />
          

          <Button
            type="submit"
            style={{ width: '40%' }}
            size='small'
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Project
          </Button>
          </Grid>
          </Card>
          </Grid>
     
      </Box>
  );
 
}

export default AddProject