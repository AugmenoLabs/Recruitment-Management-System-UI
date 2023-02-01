import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  Grid,
  CardHeader,
  CardActions,
  Button,
  Box,
  IconButton,
  Stack,
  Pagination,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import JobOpenings from './JobOpening';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
// import JobOpenings from './JobOpening';

interface JobType {
  jobtitle: string;
  openings: number;
  location: string;
  JobId: number;
  skill: number;
  exp: number;
}
const Data = [
  {
    jobtitle: 'Frontend Developer',
    openings: 3,
    location: 'Banglore',
    JobId: 200234,
    skill: 3,
    exp: 2,
  },
  {
    jobtitle: 'Backend Developer',
    openings: 3,
    location: 'Banglore',
    JobId: 200234,
    skill: 3,
    exp: 1,
  },
  {
    jobtitle: 'Manager',
    openings: 3,
    location: 'Pune',
    JobId: 200234,
    skill: 3,
    exp: 1,
  },
  {
    jobtitle: 'Cloud Engineer',
    openings: 3,
    location: 'Banglore',
    JobId: 200234,
    skill: 3,
    exp: 7,
  },
  {
    jobtitle: 'Devops Engineer',
    openings: 3,
    location: 'Pune',
    JobId: 200234,
    skill: 3,
    exp: 1,
  },
  {
    jobtitle: 'Backend Developer',
    openings: 3,
    location: 'Pune',
    JobId: 200234,
    skill: 3,
    exp: 7,
  },
  {
    jobtitle: 'Frontend Developer',
    openings: 3,
    location: 'Banglore',
    JobId: 200234,
    skill: 3,
    exp: 4,
  },
  {
    jobtitle: 'Devops Developer',
    openings: 3,
    location: 'Banglore',
    JobId: 200234,
    skill: 3,
    exp: 1,
  },
  {
    jobtitle: 'Java Developer',
    openings: 3,
    location: 'Banglore',
    JobId: 200234,
    skill: 3,
    exp: 1,
  },
];

const JobCards: React.FunctionComponent = () => {
  const history = useNavigate();
  const navigateform = (): void => {
    history('/jobdescription');
  };
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <>
      <Box style={{ width: 'fit-content' }} >
       
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          style={{ marginTop: '2rem' }}
        >
          {Data.map((elem: JobType, index: number) => (
            <Card
              key={index}
              sx={{
                width: '350px',
                marginLeft: '2rem',
                marginBottom: '2rem',
                border: '1px solid black',
              }}
            >
              <Grid
                direction="row"
                alignItems="flex-start"
                justifyContent="flex-start"
              >
                <CardHeader
                  height="100"
                  variant="h5"
                  title={`${elem.jobtitle}`}
                  action={
                    <CardActions>
                      <Button
                        onClick={navigateform}
                        size="small"
                        variant="contained"
                      >
                        Apply
                      </Button>
                    </CardActions>
                  }
                />
              </Grid>
              <CardContent style={{ marginTop: '-1.7rem' }}>
                <Grid direction="row" display="flex">
                  <IconButton aria-label="location" size="small">
                    <LocationOnIcon />
                  </IconButton>
                  <Typography style={{ fontSize: '16px', marginTop: '0.5rem' }}>
                    {elem.location}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: '14px',
                      marginTop: '0.5rem',
                      marginLeft: '4rem',
                      justifyItems: 'flex-end',
                    }}
                  >
                    Posted On: {date}
                  </Typography>
                </Grid>
                <Typography>Job Id:{elem.JobId}</Typography>
                <Typography>Total Openings:{elem.openings}</Typography>
                <Typography>Base Skills Req:{elem.skill}</Typography>
                <Typography>Minimum Experience:{elem.exp}</Typography>
              </CardContent>
              <CardActions style={{ marginTop: '-1rem' }} disableSpacing>
                <IconButton aria-label="share">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </Grid>
        <Stack spacing={2}>
          <Pagination
            style={{ alignItems: 'center', justifyContent: 'center' }}
            count={10}
            color="primary"
          />
        </Stack>
      </Box>
    </>
  );
};

export default JobCards;
