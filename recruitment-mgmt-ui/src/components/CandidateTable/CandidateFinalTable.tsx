import { Button } from '@mui/material'
import React from 'react'
import CandidateTable from './CandidateTable'

const CandidateFinalTable=()=> {
  return (
    <div>
        <CandidateTable/>
        <Button variant='outlined'>Add Candidate</Button>
    </div>
  )
}

export default CandidateFinalTable