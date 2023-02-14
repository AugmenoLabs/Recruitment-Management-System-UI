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
import React from 'react';
import { DateTimePicker } from '@mui/x-date-pickers';

const ScheduleInterview: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('female');

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

  const [startvalue, setstartValue] = React.useState<Dayjs | null>(dayjs());
  const [endvalue, setendValue] = React.useState<Dayjs | null>(dayjs());
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
          />

          <TextField
            margin="normal"
            autoFocus
            id="name"
            label="To"
            fullWidth
            variant="standard"
          />
           <TextField
            margin="normal"
            autoFocus
            
            id="name"
            label="CC"
            fullWidth
            variant="standard"
          />
           <TextField
            margin="normal"
            autoFocus
           
            id="name"
            label="BCC"
            fullWidth
            variant="standard"
          />
           <TextField
            margin="normal"
            autoFocus
           type='file'
            id="name"
            label="Resume"
            fullWidth
            variant="standard"
          />
           <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Round</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={round}
          label="Round"
          onChange={handleChange}
        >
          <MenuItem value={10}>L1</MenuItem>
          <MenuItem value={20}>L2</MenuItem>
          <MenuItem value={30}>Managerial</MenuItem>
          <MenuItem value={30}>HR</MenuItem>
        </Select>
      </FormControl>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              renderInput={(props) => (
                <TextField fullWidth margin="normal" {...props} />
              )}
              label="Start From"
              value={startvalue}
              onChange={(newValue) => {
                setstartValue(newValue);
              }}
            />
            <DateTimePicker
              renderInput={(props) => (
                <TextField fullWidth margin="normal" {...props} />
              )}
              label="To"
              value={endvalue}
              onChange={(newValue) => {
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
          />):(value==='telephonic'?(
            <TextField
            margin="normal"
            id="name"
            label="Contact No."
            fullWidth
            variant="standard"
          />
          ):(''))}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Schedule
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ScheduleInterview;
