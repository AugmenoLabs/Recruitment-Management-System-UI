import React from 'react'
// import { useNavigate } from 'react-router-dom';
import InterviewTable from './InterviewTable'

const InterviewFinalTable:React.FunctionComponent=()=> {
//   const history = useNavigate();
//     const navigateform=():void=>{
// history('/scheduleinterviews')
    // }
  return (
    <div>
        <InterviewTable/>
        {/* <Box justifyContent='center' alignItems='center' display='flex'>
                  <Button 
                  onClick={navigateform}
            variant="contained"
           
            sx={{alignItems:'center',justifyContent:'center', mt: 3, mb: 2 }}>Add Candidate</Button>
   </Box> */}
 </div>
  )
}

export default InterviewFinalTable