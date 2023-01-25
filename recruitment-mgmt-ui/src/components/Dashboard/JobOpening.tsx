import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const JobOpenings:React.FunctionComponent =()=>{
    return(
        <>
      
        <Typography variant='h6' style={{fontSize:'24px',fontWeight:600,marginLeft:'2rem'}}>JOB OPENINGS</Typography>
        <Button variant='contained' style={{justifyContent:'flex-end',alignItems:'flex-end',float:'right',marginLeft:'50rem'}}>New Position</Button>

            
       
       
        </>
    )
}

export default JobOpenings