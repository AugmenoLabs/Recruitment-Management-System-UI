import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  styled,
  Typography,
  Collapse,
} from '@mui/material';
import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const JobDescription: React.FunctionComponent = () => {
  const [expanded, setExpanded] = React.useState(false);
  const history = useNavigate();
  const navigateform = (): void => {
    history('/applyforjobs');
  };
  const handleExpandClick = (): void => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Box style={{ marginBottom: '1%' }}>
        <Card style={{ marginLeft: '2rem', marginTop: '5.5rem', width: '95%' }}>
          <Card style={{ backgroundColor: 'lavender' }}>
            <CardContent>
              <Box style={{ display: 'flex' }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{ fontWeight: 600 }}
                >
                  Frontend Developer-#2301
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
                  Upload
                </Button>
              </Box>
              {/* <CardContent> */}
              Honeywell - XDR
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
                  <Typography
                    style={{
                      marginLeft: '3rem',
                      color: 'gray',
                      fontSize: '13px',
                    }}
                  >
                    No. of Candidate Applied:10
                  </Typography>
                  <Typography
                    style={{
                      marginLeft: '3rem',
                      color: 'gray',
                      fontSize: '13px',
                    }}
                  >
                    Hired:1
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                style={{ marginTop: '0.5rem', marginBottom: '-2rem' }}
              >
                {' '}
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </Box>
            </CardContent>
          </Card>
          <Card>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="h6">Job Description</Typography>

                <Divider />

                <Typography style={{ fontSize: '14px', marginTop: '1rem' }}>
                  We are looking for someone who can stay updated with the new
                  tech in the market and also work on new ideas to incorporate
                  the new tech in the company to stay up-to-date with the
                  changes happening around.
                </Typography>
                <Typography style={{ fontSize: '14px' }}>
                  Responsibilities:
                  <li>
                    Work closely with product designers, product managers and
                    other engineers to deliver great experiences to our
                    customers using your great understanding of
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
                <Typography
                  style={{ fontSize: '14px', alignItems: 'justified' }}
                >
                  As a Senior Front End Developer, you will help build a
                  meaningful engineering discipline, combining software and
                  systems to develop creative engineering solutions to
                  operations problems. Much of our support and software
                  development focuses on optimizing existing systems, building
                  infrastructure and reducing work through automation. You will
                  join a team of curious problem solvers with a diverse set of
                  perspectives who think big and take risks. In this
                  environment, you will take the lead on relevant projects,
                  supported by an organization that provides the support and
                  mentorship you need to learn and grow. You will be focused on
                  running better production applications and systems.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Card>
      </Box>
    </div>
  );
};

export default JobDescription;
