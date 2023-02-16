import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

import React from 'react';

const Feedback: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };
  const [round, setRound] = React.useState('');

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange = (event: SelectChangeEvent) => {
    setRound(event.target.value);
  };
  const [status, setStatus] = React.useState('');

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

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
          <TextField
            fullWidth
            margin="normal"
            id="standard-basic"
            label="Feedback Description"
            multiline
            rows={3}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Status"
              onChange={handleChangeStatus}
            >
              <MenuItem value={10}>Select</MenuItem>
              <MenuItem value={20}>Reject</MenuItem>
            </Select>
          </FormControl>
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

export default Feedback;
