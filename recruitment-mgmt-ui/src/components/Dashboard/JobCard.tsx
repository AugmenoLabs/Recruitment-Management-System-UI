import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Grid, CardHeader, CardActions, Button, Box, IconButton, Stack, Pagination } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import JobOpenings from './JobOpening';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

// const useStyles=makeStyles(theme=>({
//     root:{
//         flexGrow:1,
//     }
// }))
interface JobType{
  jobtitle:string,
  openings:number,
  location:string,
  JobId:number,
  skill:number,
  exp:number
}
const Data=[{
    jobtitle:'Frontend Developer',openings:3,location:'Banglore',JobId:200234,skill:3,exp:2
},{
    jobtitle:'Backend Developer',openings:3,location:'Banglore',JobId:200234,skill:3,exp:1
},{
  jobtitle:'Manager',openings:3,location:'Pune',JobId:200234,skill:3,exp:1
},{
  jobtitle:'Cloud Engineer',openings:3,location:'Banglore',JobId:200234,skill:3,exp:7
},{
  jobtitle:'Devops Engineer',openings:3,location:'Pune',JobId:200234,skill:3,exp:1
},{
  jobtitle:'Backend Developer',openings:3,location:'Pune',JobId:200234,skill:3,exp:7
},{
  jobtitle:'Frontend Developer',openings:3,location:'Banglore',JobId:200234,skill:3,exp:4
},{
  jobtitle:'Devops Developer',openings:3,location:'Banglore',JobId:200234,skill:3,exp:1
},{
  jobtitle:'Java Developer',openings:3,location:'Banglore',JobId:200234,skill:3,exp:1
}]
const JobCards:React.FunctionComponent = ()=>{
  const current = new Date();
  const date=`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
    return (
        <>
        <Box style={{width:'fit-content',marginLeft:'5rem'}}>
        <Grid style={{marginTop:'-3rem',display:'flex'}} >
        <JobOpenings/>
        </Grid>
      <Grid container 
      spacing={0}
       direction='row'
       justifyContent='flex-start'
       alignItems='flex-start' 
       style={{marginTop:'2rem'}} >
      
    {Data.map((elem:JobType,index:number)=>( 
      <Card key={index} sx={{ width: '350px',marginLeft:'2rem',marginBottom:'2rem' ,border:'1px solid black'}}>
        <Grid direction='row' alignItems='flex-start' justifyContent='flex-start'>

      <CardHeader
      
        height="100"
        variant='h5'
        title={`${elem.jobtitle}`}
        action={
          <CardActions>
          <Button size="small" variant='contained'>Apply</Button>
        
        </CardActions>
        }
      />
      
      </Grid>      
      <CardContent style={{marginTop:'-1.7rem'}}>
      <Grid direction='row' display='flex'>
      <IconButton aria-label="location" size='small'>
            <LocationOnIcon />
          </IconButton>
       <Typography style={{fontSize:'16px',marginTop:'0.5rem'}}>{elem.location}</Typography>
       <Typography style={{fontSize:'14px',marginTop:'0.5rem',marginLeft:'4rem',justifyItems:'flex-end'}}>Posted On: {date}</Typography>
       </Grid>
       <Typography>Job Id:{elem.JobId}</Typography>
       <Typography>Total Openings:{elem.openings}</Typography>
       <Typography>Base Skills Req:{elem.skill}</Typography>
       <Typography>Minimum Experience:{elem.exp}</Typography>
      </CardContent>
      <CardActions style={{marginTop:'-1rem'}} disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <MoreVertIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton aria-label="share">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="share">
          <DeleteIcon />
        </IconButton>
        </CardActions>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
       
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Job Description:</Typography>
          <Typography paragraph>
           A person expert in React,Typescript,.Net with minimum of 2 years experience is required.
          </Typography>
          <Typography paragraph>
           Also know how to use git,bitbucket and jira tools and must be familiar with SDLC lifecycles.
          </Typography>

        </CardContent>
      </Collapse> */}
    </Card>
     )  )}
    </Grid>
    <Stack spacing={2}>
     
      <Pagination count={10} color="primary" />
     
    </Stack>
    </Box>

    </>
  );
};

export default JobCards;
