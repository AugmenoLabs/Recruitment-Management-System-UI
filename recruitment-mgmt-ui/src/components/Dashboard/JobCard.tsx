import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Grid, CardHeader, CardActions, Button } from '@mui/material'

import JobOpenings from './JobOpening';

// const useStyles=makeStyles(theme=>({
//     root:{
//         flexGrow:1,
//     }
// }))
const Data=[{
    jobtitle:'Frontend',openings:3,
},{
    jobtitle:'Frontend',openings:3,
},]
const JobCards = ()=>{
    
    return (
        <>
        <Grid style={{marginTop:'-2rem',marginLeft:'5rem'}}>
        <JobOpenings/>
        </Grid>
      <Grid container 
      spacing={2}
       direction='row'
       justifyContent='flex-start'
       alignItems='flex-start' 
       style={{marginTop:'2rem',marginLeft:'4rem'}} >
      
    {Data.map((elem:any)=>( 
      <Card sx={{ width: '300px',marginLeft:'2rem' }}>
      <CardHeader
      
        height="100"
        sx={{ width: 100}}
        
        title={`${elem.jobtitle}`}
      />
      <CardContent>
       <Typography>Banglore</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Apply</Button>
      
      </CardActions>
    </Card>
     )  )}
    </Grid>
    </>
  );
}
export default JobCards;