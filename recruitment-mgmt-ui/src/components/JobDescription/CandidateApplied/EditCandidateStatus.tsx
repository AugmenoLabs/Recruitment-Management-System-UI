import React from 'react'
import EditIcon from '@mui/icons-material/Edit'
import {IconButton, Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    TextField,
    FormControl,  InputLabel, MenuItem, Select, SelectChangeEvent,
   } from '@mui/material'

const EditCandidateStatus:React.FunctionComponent=()=> {
    const [open, setOpen] = React.useState(false);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleClickOpen = (): void => {
      setOpen(true);
    };
    const [first, setFirst] = React.useState('');
    const handleChangefirst: any = (event: SelectChangeEvent) => {
      setFirst(event.target.value);
    };
    const [second, setSecond] = React.useState('');
    const handleChangesecond: any = (event: SelectChangeEvent) => {
      setSecond(event.target.value);
    };
    const [managerial, setManagerial] = React.useState('');
    const handleChangemanagerial: any = (event: SelectChangeEvent) => {
      setManagerial(event.target.value);
    };

    const [hr, sethr] = React.useState('');
    const handleChangehr: any = (event: SelectChangeEvent) => {
      sethr(event.target.value);
    };
    const [offer, setoffer] = React.useState('');
    const handleChangeoffer: any = (event: SelectChangeEvent) => {
      setoffer(event.target.value);
    };

    const [hired, sethired] = React.useState('');
    const handleChangehired: any = (event: SelectChangeEvent) => {
      sethired(event.target.value);
    };




  
    const handleClose = (): void => {
      setOpen(false);
    };
    return (
    <div>
      <IconButton  onClick={handleClickOpen}>
        <EditIcon/>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Candidate Details</DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            id="standard-basic"
            label="Candidate Name"
            fullWidth
            variant="standard"
          />
          <FormControl fullWidth style={{marginTop:'1rem'}}>
          <InputLabel id="demo-simple-select-label">L1</InputLabel>
          <Select
            labelId="demo-simple-select-label"
           size='small'
            id="demo-simple-select"
            value={first}
            label="L1"
            onChange={handleChangefirst}
          >
            <MenuItem value="yes">Scheduled</MenuItem>
            <MenuItem value="no">Pending</MenuItem>
            <MenuItem value="no">Rejected</MenuItem>
            <MenuItem value="no">Cleared</MenuItem>
          </Select>
        </FormControl>
       
        <FormControl fullWidth style={{marginTop:'1rem'}}>
          <InputLabel id="demo-simple-select-label">L2</InputLabel>
          <Select
         size='small'
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={second}
            label="Employment Type"
            onChange={handleChangesecond}
          >
            <MenuItem value="yes">Scheduled</MenuItem>
            <MenuItem value="no">Pending</MenuItem>
            <MenuItem value="no">Rejected</MenuItem>
            <MenuItem value="no">Cleared</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth style={{marginTop:'1rem'}}>
          <InputLabel id="demo-simple-select-label">Managerial</InputLabel>
          <Select
          size='small'
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={managerial}
            label="Employment Type"
            onChange={handleChangemanagerial}
          >
            <MenuItem value="yes">Scheduled</MenuItem>
            <MenuItem value="no">Pending</MenuItem>
            <MenuItem value="no">Rejected</MenuItem>
            <MenuItem value="no">Cleared</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth style={{marginTop:'1rem'}}>
          <InputLabel id="demo-simple-select-label">HR</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            size='small'
            id="demo-simple-select"
            value={hr}
            label="Employment Type"
            onChange={handleChangehr}
          >
            <MenuItem value="yes">Scheduled</MenuItem>
            <MenuItem value="no">Pending</MenuItem>
            <MenuItem value="no">Rejected</MenuItem>
            <MenuItem value="no">Cleared</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth style={{marginTop:'1rem'}}>
          <InputLabel id="demo-simple-select-label">Offer</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            size='small'
            value={offer}
            label="Employment Type"
            onChange={handleChangeoffer}
          >
            <MenuItem value="yes">Released</MenuItem>
            <MenuItem value="no">Pending</MenuItem>
            <MenuItem value="no">Rejected</MenuItem>
            <MenuItem value="no">Accepted</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth style={{marginTop:'1rem'}}>
          <InputLabel id="demo-simple-select-label">Hired</InputLabel>
          <Select
          size='small'
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={hired}
            label="Employment Type"
            onChange={handleChangehired}
          >
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
    
          
          </Select>
        </FormControl>
        
         
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Update
          </Button>
         
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default EditCandidateStatus