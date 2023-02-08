import React from "react";
import JobDescription from "../Dashboard/JobDescription";
import AppliedCandidateTable from "./AppliedCandidateTable";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FinalJD:React.FunctionComponent=()=>{
    return(
        <>
        <JobDescription />
        <AppliedCandidateTable/>
        </>
    )
}

export default FinalJD;