/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  FormControlLabel,
  TextField,
  InputLabel,
  Select,
  FormLabel,
  RadioGroup,
  Radio,
  FormControl,
  MenuItem,
} from '@mui/material';
import axios from 'axios';
import React,{useState} from 'react';
import { FeedbackInterface } from '../../Interface/FeedbackInterface';

interface props {
  candidateId: string;
  
}
const Feedback: React.FunctionComponent<props> = ({candidateId}) => {
  const [open, setOpen] = useState(false);
const API_URL="http://localhost:5141/api/v1/CandidateInterview";
  const handleClickOpen = (): void => {
    setOpen(true);
  };
  const [value, setValue] = useState<boolean>(false);
  const [data, setData] = useState<FeedbackInterface | Record<string, never>>({});
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleTextChange = (event:any) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value==='true');
  };
  const handleClose = (): void => {
    setOpen(false);
  };
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const  handleFeedback =  async (event:React.MouseEvent<HTMLElement>) => {
    
    data.candidateId=candidateId;
    await axios.post(API_URL,data )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      }); 
  };
  // const [status, setStatus] = React.useState('');

  // // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  // const handleChangeStatus = (event: SelectChangeEvent) => {
  //   setStatus(event.target.value);
  // };

  return (
    <div>
      <Fab
        variant="extended"
        size="small"
        style={{
          fontSize: '12px',
          maxHeight: '25px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
      >
        Feedback
      </Fab>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Feedback</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Round</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.level}
              name="level"
              label="Round"
              onChange={handleTextChange}
            >
              <MenuItem value="L1">L1</MenuItem>
              <MenuItem value="L2">L2</MenuItem>
              <MenuItem value="Managerial">Managerial</MenuItem>
              <MenuItem value="HR">HR</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            margin="normal"
            id="standard-basic"
            label="Feedback Description"
            name="feedback"
            multiline
            value={data.feedback}
            onChange={handleTextChange}
            rows={3}
          />

<FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>
      <RadioGroup
        row
        value={value}
        onChange={handleChangeRadio}
      
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="select" control={<Radio />} label="Select" />
        <FormControlLabel value="reject" control={<Radio />} label="Reject" />
  
      </RadioGroup>
    </FormControl>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleFeedback}>
            Feedback
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Feedback;



