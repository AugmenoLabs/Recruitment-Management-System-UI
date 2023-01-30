import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const JobOpenings:React.FunctionComponent =()=>{
    const history = useNavigate();
    const navigateform=():void=>{
history('/requisition')
    }
    return(
        <>
      
        <Typography variant='h6' style={{fontSize:'24px',fontWeight:600,marginLeft:'2rem'}}>JOB OPENINGS</Typography>
   <Button onClick={navigateform} variant='contained' style={{justifyContent:'flex-end',alignItems:'flex-end',float:'right',marginLeft:'50rem'}}>New Position</Button>
   
            
       
       
        </>
    )
}

export default JobOpenings;