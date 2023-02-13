import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Fab, Typography, Card
  } from '@mui/material';
  
  import React from 'react';
 
  const FeedbackDetails: React.FunctionComponent = () => {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = (): void => {
      setOpen(true);
    };
  
    const handleClose = (): void => {
      setOpen(false);
    };
    
  
   
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
          Feedback
        </Fab>
        
  
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle style={{fontWeight:600}}>Feedback</DialogTitle>
          <DialogContent>
         <Card style={{display:'flex', flexDirection:'column'}}>
            <Typography variant='h6'>
                Feedback for L1: Know the react/typescript cooncepts very well.
                
            </Typography>
            <Typography>
               Status:Positive
                
            </Typography>
            <Typography variant='h6'>
                Feedback for L2: Pending
                
            </Typography>
            <Typography variant='h6'>
              Feedback for Managerial:Pending
            </Typography>
            <Typography variant='h6'>
                Feedback for HR: Pending
                
            </Typography>
         </Card>
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
  
  export default FeedbackDetails;
  