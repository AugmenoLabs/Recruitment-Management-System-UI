import React from 'react';
import './Project.style.scss';

import { Box, Typography } from '@mui/material';

import ProjectTable from '../../components/Project/ProjectTable';
import AddProject from '../../components/Project/AddProject';
import { ProjectInterface } from '../../Interface/ProjectInterface';
// import Example from '../../components/JobOpening/test';

const Project: React.FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const users: ProjectInterface[] = [];
  return (
    <div className="page-body">
      <Box className="page-header">
        <Typography
          variant="h6"
          style={{
            fontSize: '20px',
            fontWeight: 600,
          }}
        >
          PROJECT(S)
        </Typography>
        <Box className="button-section">
          <AddProject />
          {/* <Button variant="contained"
          onClick={navigateform}>Add Project</Button>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{  backgroundColor:'white' }}
          >
          </ButtonGroup> */}
        </Box>
      </Box>
      <ProjectTable />
    </div>
  );
};

export default Project;
