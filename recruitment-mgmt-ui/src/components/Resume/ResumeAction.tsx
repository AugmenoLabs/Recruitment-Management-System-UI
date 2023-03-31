/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from "react";
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { 
    Box, 
    Button, 
    Card, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    FormControl, 
    FormControlLabel, 
    FormLabel, 
    IconButton, 
    Radio, RadioGroup,
    TextField, Tooltip, Typography } from "@mui/material";
import { FeedbackInterface } from "../../Interface/FeedbackInterface";
import Swal from 'sweetalert2';
import axios from 'axios';
import '../../index.css';

interface Props{
    name : string, 
    id : string,
}
const ResumeAction: React.FunctionComponent<Props> = ({name, id}) =>{
    
    const [open, setOpen] = useState<boolean>(false)
    const [feedbackData, setFeedbackData] = useState<string>('')
    const API_URL="http://localhost:5141/api/v1/CandidateInterview";
    const [value, setValue] = useState<boolean>(false);

    const actionOnResume = () : void =>{
        setOpen(!open)
    }

    const handleChange = (event : any) : void  => {
        setFeedbackData(event.target.value)
    };

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        setValue((event.target as HTMLInputElement).value==='true');
    };

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const submitHandler = async (event: React.FormEvent)  => { 
        event.preventDefault()
        const data : FeedbackInterface = {
            candidateId: id,
            interviewerName: 'Interviewer',
            scheduledTime: new Date().toISOString(),
            isSelected: value,
            feedback: feedbackData,
            modeOfInterview: '',
            level: 'Screening'
        }

        await axios.post(API_URL, data)
        .then(response => {
            console.log(response.data);
            void Swal.fire({
                icon: 'success',
                confirmButtonText: 'OK',
                text: 'Sumitted Successfully',
                
              });
        })
        .catch(error => {
            console.error(error);
            void Swal.fire({
                icon: 'error',
                confirmButtonText: 'OK',
                text: 'Error !! Please submit again',
              });
        }); 
    }

    return( 
    <>
        <IconButton>
            <Tooltip title="Action"><PendingActionsIcon onClick = {actionOnResume} /></Tooltip>
        </IconButton>
        
            <Dialog open= {open}>
            <form onSubmit= {(event) => { void submitHandler(event)}}>
            <Box>
                <Typography sx={{textAlign: 'center', marginTop:'10px'}}>
                    Candidate Name : <b> {name}</b>
                </Typography>
            </Box>
                <DialogContent>
                    <Card>                
                            <Box sx={{ minWidth: 120, marginTop: '20px', justifyContent:'center'}}>
                                <FormControl fullWidth >
                                    <FormLabel id="demo-row-radio-buttons-group-label">Acceptance</FormLabel>
                                    <RadioGroup
                                        row
                                        value={value}
                                        onChange={handleChangeRadio}
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value={true as any} control={<Radio />} label="Select" />
                                        <FormControlLabel value={false as any} control={<Radio />} label="Reject" />
                                    </RadioGroup>
                                    <>
                                        <TextField sx={{ marginTop: '20px'}}
                                            id="outlined-multiline-static"
                                            label="Feedback"
                                            multiline
                                            rows={4}
                                            name = "feedback"
                                            value = {feedbackData}
                                            onChange = {handleChange}
                                        />
                                    </>
                                </FormControl>
                            </Box>
                    </Card>
                </DialogContent>
                <DialogActions style={{justifyContent:'center'}}>
                    <Button variant="contained" onClick={() => setOpen(!open)}>
                        Cancel
                    </Button>
                    <Button variant="contained" type="submit" onClick={submitHandler}>
                        Submit
                    </Button>
                </DialogActions>
                
            </Dialog>
    </>
    )
}

export default ResumeAction;