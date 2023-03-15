/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
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
import React, { useEffect, useState } from 'react';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate, useParams } from 'react-router-dom';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { RequisitionInterface } from '../../Interface/RequisitionInterface';
import { GetOpenPositionById } from '../../services/OpenPositionApi';
// import { JobOpeningInterface } from '../../Interface/JobOpeningInterface';
// import background from '../../assets/background.jpg';
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
  const [expanded, setExpanded] = useState(false);
  const { id } = useParams<{ id: '' }>();
  const [positions, setPositions] = useState({
    jobId: '',
    id: '',
    jobTitle: '',
    accountId: '',
    projectId: '',
    skillSet: '',
    yearOfExp: '',
    qualification: '',
    jobDescription: '',
    noOfPositions: 0,
    budget: '',
    accountName: '',
    projectName: '',
    location: '',
    account: '',
    project: '',
    totalcandidate: '',
    hired: '',
    status: '',
    screening: '',
    L1: '',
    L2: '',
    Managerial: '',
    HR: '',
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedAccountId, setSelectedAccountId] = useState<''>('');
  const history = useNavigate();
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const navigateform = () => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    history(`/applyforjobs/${id}`);
  };

  const handleExpandClick = (): void => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchProjects = async () => {
      try {
        const response = await GetOpenPositionById(id);
        if (response?.data) {
          setPositions(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    // console.log("selectedprojects",projects);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchProjects();
  }, [id]);

  return (
    <div>
      <Box style={{ marginBottom: '1%' }}>
        <div>
          <Card
            style={{ marginLeft: '2rem', marginTop: '5.5rem', width: '95%' }}
          >
            <Card style={{ backgroundColor:"lightgray"
              // backgroundImage:`url(${background})`
               }}>
              <CardContent>
                <Box style={{ display: 'flex' }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    style={{ fontWeight: 600 }}
                  >
                    {positions.jobId}-{positions.jobTitle}
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
                {positions.accountName}/{positions.projectName}
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
                  {positions.location}
                  <IconButton
                    sx={{
                      marginLeft: '3rem',
                      color: 'black',
                      marginRight: '-0.2rem',
                    }}
                  >
                    <WorkIcon sx={{ fontSize: '20px' }} />
                  </IconButton>
                  {positions.yearOfExp} years
                  <Box display="flex" style={{ marginTop: '0.5rem' }}>
                    {' '}
                    <Typography style={{ color: 'navy', fontSize: '13px' }}>
                      Posted On:31/01/23
                    </Typography>
                    <Typography
                      style={{
                        marginLeft: '3rem',
                        color:  'navy',
                        fontSize: '13px',
                      }}
                    >
                      Openings:{positions.noOfPositions}
                    </Typography>
                    <Typography
                      style={{
                        marginLeft: '3rem',
                        color:  'navy',
                        fontSize: '13px',
                      }}
                    >
                      No. of Candidate Applied:10
                    </Typography>
                    <Typography
                      style={{
                        marginLeft: '3rem',
                        color:  'navy',
                        fontSize: '13px',
                      }}
                    >
                      Hired:1
                    </Typography>
                    <Typography
                      style={{
                        marginLeft: '3rem',
                        color:  'navy',
                        fontSize: '13px',
                      }}
                    >
                      Budget:{positions.budget}
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
            <Card style={{ backgroundColor:'whitesmoke'}}>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography style={{ fontSize: '16px', fontWeight: 600 }}>
                    Job Description
                  </Typography>

                  <Divider />

                  <Typography style={{ fontSize: '14px', marginTop: '0.5rem' }}>
                    We are looking for someone who can stay updated with the new
                    technologies in the market and also work on new ideas to
                    incorporate the new tech in the company to stay up-to-date
                    with the changes happening around.
                  </Typography>
                  <Typography style={{ fontSize: '14px' }}>
                    Responsibilities:
                    {positions.jobDescription}
                    {/* <li>
                    Work closely with product designers, product managers and
                    other engineers to deliver great experiences to our
                    customers using your great understanding of
                  </li>
                  <li>React and other architectural frameworks.</li>
                  <li>Developing new user-facing features using React.</li>
                  <li>
                    Building reusable components and front-end libraries for
                    future use
                  </li> */}
                  </Typography>

                  <Typography>
                    <Typography
                      style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        marginTop: '1rem',
                      }}
                    >
                      Qualifications
                    </Typography>
                    <Divider />
                    <Typography style={{ fontSize: '14px' ,marginTop: '0.5rem'}}>
                      {positions.qualification}
                    </Typography>{' '}
                  </Typography>
                  <Typography>
                    <Typography
                      variant="h6"
                      style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        marginTop: '1rem',
                      }}
                    >
                      Key Skills
                    </Typography>
                    <Divider />
                  </Typography>
                  <Box style={{ display: 'flex' }}>
                    <Typography style={{ marginLeft: '0.8rem' }}>
                      {positions.skillSet}
                    </Typography>
                    {/* </Box>
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
                    </Typography> */}
                    {/* </Box>
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
                    </Typography> */}
                    {/* </Box> */}
                  </Box>
                </CardContent>
              </Collapse>
            </Card>
          </Card>
        </div>
      </Box>
    </div>
  );
};

export default JobDescription;
