import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import CandidateTable from './CandidateTable'

const CandidateFinalTable:React.FunctionComponent=()=> {
  const history = useNavigate();
    const navigateform=():void=>{
history('/applyforjobs')
    }
  return (
    <div>
        <CandidateTable/>
        <Box justifyContent='center' alignItems='center' display='flex'>
                  <Button 
                  onClick={navigateform}
            variant="contained"
           
            sx={{alignItems:'center',justifyContent:'center', mt: 3, mb: 2 }}>Add Candidate</Button>
   </Box>
 </div>
  )
}

export default CandidateFinalTable