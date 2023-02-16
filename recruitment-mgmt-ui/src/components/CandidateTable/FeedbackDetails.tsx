import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Typography,
  Card,
  Box,
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

      <Dialog open={open} onClose={handleClose} style={{width:'40%',marginLeft:'30%',justifyContent:'center',alignItems:'center'}}>
        <DialogTitle style={{ fontWeight: 600 }}>Feedback</DialogTitle>
        <DialogContent>
          <Card
            style={{
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'none',
            }}
          >
            <Card >
              {' '}
              <Typography style={{ fontSize: '15px', marginLeft: '1rem' }}>
                Feedback for L1
              </Typography>
              <Box display="flex">
                <Typography
                  style={{
                    marginLeft: '1rem',
                    color: 'gray',
                    fontSize: '13px',
                  }}
                >
                  Interviewer:Gaurav
                </Typography>
                <Typography
                  style={{
                    marginLeft: '1rem',
                    color: 'gray',
                    fontSize: '13px',
                  }}
                >
                  Time:12/02/2023 10AM
                </Typography>
                <Typography
                  style={{
                    marginLeft: '1rem',
                    color: 'gray',
                    fontSize: '13px',
                  }}
                >
                  Status:Select
                </Typography>
              </Box>
              <Typography style={{ marginLeft: '1rem',marginBottom:'1%',fontSize: '13px' }}>
                Know the concepts of react very well.Have understanding of
                JS,Redux and API Integration.
              </Typography>
            </Card>

            <Card style={{ marginTop: '3%' }}>
              <Typography style={{ fontSize: '15px', marginLeft: '1rem' }}>
                Feedback for L2
              </Typography>
              <Typography style={{ marginLeft: '1rem', fontSize: '13px' }}>
                Pending
              </Typography>
            </Card>
            <Card style={{ marginTop: '3%' }}>
              <Typography style={{ fontSize: '15px', marginLeft: '1rem' }}>
                Feedback for Managerial
              </Typography>
              <Typography style={{ marginLeft: '1rem',marginBottom:'1%', fontSize: '13px' }}>
                Pending
              </Typography>
            </Card>
            <Card style={{ marginTop: '3%' }}>
              <Typography style={{ fontSize: '15px', marginLeft: '1rem' }}>
                Feedback for HR
              </Typography>
              <Typography style={{ marginLeft: '1rem', fontSize: '13px',marginBottom:'1%' }}>
                Pending
              </Typography>
            </Card>
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
