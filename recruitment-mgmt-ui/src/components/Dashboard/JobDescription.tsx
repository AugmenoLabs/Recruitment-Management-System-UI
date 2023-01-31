import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
// import ShareIcon from '@mui/icons-material/Share';

const JobDescription: React.FunctionComponent = () => {
  const history = useNavigate();
  const navigateform = (): void => {
    history('/applyforjobs');
  };
  return (
    <div>
      <Box>
        <Card style={{ marginLeft: '5rem', marginTop: '-3rem', width: '93%' }}>
          <Card style={{ backgroundColor: 'lightblue' }}>
            <CardContent>
              <Box style={{ display: 'flex' }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{ fontWeight: 600 }}
                >
                  Frontend Developer
                </Typography>
              </Box>
              {/* </CardContent> */}
              <Box
                style={{
                  display: 'flex',
                  marginTop: '-2.5rem',
                  marginRight: '1rem',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}
              >
                <Button variant="contained" onClick={navigateform}>
                  Apply Now
                </Button>
              </Box>
              {/* <CardContent> */}
              Honeywell
              <Box>
                <IconButton
                  sx={{
                    marginLeft: '-0.5rem',
                    color: 'black',
                    marginRight: '-0.2rem',
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: '20px' }} />
                </IconButton>
                Banglore
                <IconButton
                  sx={{
                    marginLeft: '3rem',
                    color: 'black',
                    marginRight: '-0.2rem',
                  }}
                >
                  <WorkIcon sx={{ fontSize: '20px' }} />
                </IconButton>
                2-5 Years
              </Box>
              <Typography variant="body2" color="text.secondary"></Typography>
              <Divider />
              <Box display="flex" style={{ marginTop: '0.5rem' }}>
                {' '}
                <Typography style={{ color: 'gray', fontSize: '13px' }}>
                  Posted On:31/01/23
                </Typography>
                <Typography
                  style={{
                    marginLeft: '3rem',
                    color: 'gray',
                    fontSize: '13px',
                  }}
                >
                  Openings:4
                </Typography>
              </Box>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6">Job Description</Typography>
              <Divider />

              <Typography style={{ fontSize: '14px', marginTop: '1rem' }}>
                We are looking for someone who can stay updated with the new
                tech in the market and also work on new ideas to incorporate the
                new tech in the company to stay up-to-date with the changes
                happening around.
              </Typography>
              <Typography style={{ fontSize: '14px' }}>
                Responsibilities:
                <li>
                  Work closely with product designers, product managers and
                  other engineers to deliver great experiences to our customers
                  using your great understanding of
                </li>
                <li>React and other architectural frameworks.</li>
                <li>Developing new user-facing features using React.</li>
                <li>
                  Building reusable components and front-end libraries for
                  future use
                </li>
              </Typography>

              <Typography>
                <Typography variant="h6" style={{ marginTop: '1rem' }}>
                  Qualifications
                </Typography>
                <Divider />
                <Typography style={{ fontSize: '14px' }}>
                  Bachelors degree in computer engineering/Computer Science,
                  Information Technology, MCA, or M.Sc. (IT).
                </Typography>{' '}
              </Typography>
              <Typography>
                <Typography variant="h6" style={{ marginTop: '1rem' }}>
                  Key Skills
                </Typography>
                <Divider />
              </Typography>
              <Box style={{ display: 'flex' }}>
                <Box
                  style={{
                    borderRadius: '10px',
                    backgroundColor: 'lightgray',
                    width: '6%',
                    marginTop: '1rem',
                  }}
                >
                  <Typography style={{ marginLeft: '0.8rem' }}>
                    React
                  </Typography>
                </Box>
                <Box
                  style={{
                    borderRadius: '10px',
                    backgroundColor: 'lightgray',
                    width: '9%',
                    marginTop: '1rem',
                    marginLeft: '1rem',
                  }}
                >
                  <Typography style={{ marginLeft: '0.8rem' }}>
                    HTML/CSS
                  </Typography>
                </Box>
                <Box
                  style={{
                    borderRadius: '10px',
                    backgroundColor: 'lightgray',
                    width: '8%',
                    marginTop: '1rem',
                    marginLeft: '1rem',
                  }}
                >
                  <Typography style={{ marginLeft: '0.8rem' }}>
                    Typescript
                  </Typography>
                </Box>
                <Box
                  style={{
                    borderRadius: '10px',
                    backgroundColor: 'lightgray',
                    width: '6%',
                    marginTop: '1rem',
                    marginLeft: '1rem',
                  }}
                >
                  <Typography style={{ marginLeft: '0.8rem' }}>
                    Redux
                  </Typography>
                </Box>
              </Box>
              <Typography>
                <Typography variant="h6" style={{ marginTop: '1rem' }}>
                  Project Details
                </Typography>
                <Divider />
              </Typography>
              <Typography style={{ fontSize: '14px', alignItems: 'justified' }}>
                As a Senior Front End Developer, you will help build a
                meaningful engineering discipline, combining software and
                systems to develop creative engineering solutions to operations
                problems. Much of our support and software development focuses
                on optimizing existing systems, building infrastructure and
                reducing work through automation. You will join a team of
                curious problem solvers with a diverse set of perspectives who
                think big and take risks. In this environment, you will take the
                lead on relevant projects, supported by an organization that
                provides the support and mentorship you need to learn and grow.
                You will be focused on running better production applications
                and systems.
              </Typography>
            </CardContent>
          </Card>
        </Card>
      </Box>
    </div>
  );
};

export default JobDescription;
