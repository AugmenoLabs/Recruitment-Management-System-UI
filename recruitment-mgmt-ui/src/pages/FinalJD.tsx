import React from "react";
import JobDescription from "../components/JobDescription/JobDescription";
import AppliedCandidateTable from "../components/JobDescription/CandidateApplied/AppliedCandidateTable";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FinalJD:React.FunctionComponent=()=>{
    return(
        <>
        <JobDescription  />
        <AppliedCandidateTable/>
        </>
    )
}

export default FinalJD;