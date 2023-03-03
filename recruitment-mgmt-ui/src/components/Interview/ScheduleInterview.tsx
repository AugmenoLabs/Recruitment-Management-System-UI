import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  FormControl,
  FormLabel,Radio,FormControlLabel,
  TextField,
  InputLabel,Select,MenuItem, SelectChangeEvent, RadioGroup
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers';
import axios from 'axios';
import { InterviewInterface } from '../../Interface/InterviewInterface';
import { dA } from '@fullcalendar/core/internal-common';

const ScheduleInterview: React.FunctionComponent = () => {
  const API_URL="http://localhost:5141/api/v1/ScheduleInterview";
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [data, setData] = useState<InterviewInterface | Record<string, never>>({});
  const handleTextChange = (event:any) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };
  const [round, setRound] = React.useState('');

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange = (event: SelectChangeEvent) => {
     setRound(event.target.value );
   };

  
  
    const  handleschedule =  async (event:React.MouseEvent<HTMLElement>) => {
      data.scheduledTimeFrom = startvalue;
      data.scheduledTimeTo = endvalue;
      data.modeOfInterview = value;
      await axios.post(API_URL,data )
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        }); 
    };
  

  const [startvalue, setstartValue] = React.useState<Dayjs>(dayjs());
  const [endvalue, setendValue] = React.useState<Dayjs>(dayjs());
  return (
    <div>
      <Fab
        variant="extended"
        size="small"
        style={{fontSize:'12px',maxHeight:'25px',justifyContent:'center',alignItems:'center'}}
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}

      >
        Schedule
      </Fab>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Schedule Interview</DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            id="standard-basic"
            label="Title"
            fullWidth
            variant="standard"
            name='title'
            value={data.title}
            onChange={handleTextChange}
          />

<TextField
            margin="normal"
            id="standard-basic"
            label="interviewer Name"
            fullWidth
            variant="standard"
            name='interviewerName'
            value={data.interviewerName}
            onChange={handleTextChange}
          />

          <TextField
            margin="normal"
            autoFocus
            id="name"
            label="To"
            fullWidth
            variant="standard"
            name='interviewerEmail'
            value={data.interviewerEmail}
            onChange={handleTextChange}
          />
           <TextField
            margin="normal"
            autoFocus
            id="name"
            label="CC"
            fullWidth
            variant="standard"
            name='cceMail'
            value={data.cceMail}
            onChange={handleTextChange}
          />
           <TextField
            margin="normal"
            autoFocus          
            id="name"
            label="BCC"
            fullWidth
            variant="standard"
            name='bcceMail'
            value={data.bcceMail}
            onChange={handleTextChange}
          />              
           <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Round</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.round}
          label="Round"
          name='round'
          onChange={handleTextChange}
        >
          <MenuItem value="L1">L1</MenuItem>
          <MenuItem value="L2">L2</MenuItem>
          <MenuItem value="Managerial">Managerial</MenuItem>
          <MenuItem value="HR">HR</MenuItem>
        </Select>
      </FormControl>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              renderInput={(props) => (
                <TextField fullWidth margin="normal" {...props} />
              )}
              label="Start From"
              value={startvalue}
              onChange={(newValue:any) => {
                setstartValue(newValue);
              }}
            />
            <DateTimePicker
              renderInput={(props) => (
                <TextField fullWidth margin="normal" {...props} />
              )}
              label="To"
              value={endvalue}
              onChange={(newValue: any) => {
                setendValue(newValue);
              }}
            />
          </LocalizationProvider>
          <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Mode Of Interview</FormLabel>
      <RadioGroup
       value={value}
       onChange={handleChangeRadio}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="telephonic" control={<Radio />} label="Telephonic" />
        <FormControlLabel value="ftf" control={<Radio />} label="Face-to-Face" />
        <FormControlLabel value="vc" control={<Radio />} label="VC" />
       
      </RadioGroup>
    </FormControl>
    {value ==='vc'?(
          <TextField
            margin="normal"
            id="name"
            label="Meeting Link"
            fullWidth
            variant="standard"
            name='meetingLink'
            value={data.meetingLink}
            onChange={handleTextChange}
          />):(value==='telephonic'?(
            <TextField
            margin="normal"
            id="name"
            label="Contact No."
            fullWidth
            variant="standard"
            name='contactNumber'
            value={data.contactNumber}
            onChange={handleTextChange}
          />
          ):(''))}

           <TextField
            margin="normal"
            id="standard-basic"
            label="Details"
            rows={2}
            fullWidth
            variant="standard"
            name='details'
            value={data.details}
            onChange={handleTextChange}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleschedule}>
            Schedule
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ScheduleInterview;
