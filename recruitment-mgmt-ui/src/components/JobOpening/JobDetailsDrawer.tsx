import { Avatar, Card, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { GetOpenPositionById } from '../../services/OpenPositionApi';

function createData(
  Levels: string,
  scheduled: number,
  completed: number,
  hold: number,
  selected:number,
  rejected:number,
):any {
  return { Levels, scheduled, completed,hold, selected, rejected };
}

const rows = [
  createData('Screening', 0, 50, 5, 40, 10 ),
  createData('L1', 15,20, 5, 15,5),
  createData('L2', 5, 10,  0,8,2),
  createData('Managerial', 1, 7,  0,5,2),
  createData('HR', 0, 5,  0,4,1),
  createData('Hired', 0, 0,  0,4,0),
];

export interface Props{
  positionid:string;
} 


const JobDetailsDrawer:React.FunctionComponent<Props> = ({positionid}) => {
  const [jobDetails,setJobDetails] = useState({
    jobTitle: '',
    accountName: '',
    projectName: '',
  });
useEffect(() => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const fetchDetails = async () => {
    try {
      const response = await GetOpenPositionById(positionid);
      /* eslint-disable @typescript-eslint/strict-boolean-expressions */
      if (response?.data) {
        setJobDetails(response.data); 
        console.log(jobDetails.jobTitle);
      }
    } catch (error) {
      console.error(error);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  fetchDetails();
},[positionid]);
    const randomColor:any = ()=> {
        const colors = [
          '#F44336',
          '#E91E63',
          '#9C27B0',
          '#673AB7',
          '#3F51B5',
          '#2196F3',
          '#03A9F4',
          '#00BCD4',
          '#009688',
          '#4CAF50',
          '#8BC34A',
          '#CDDC39',
          '#FFC107',
          '#FF9800',
          '#FF5722',
          '#795548',
          '#607D8B',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      };
  return (
    <>
    
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: randomColor }} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
             <Typography>Total : 60</Typography>
          </IconButton>
        }
        title= {jobDetails.jobTitle}
        subheader={`${jobDetails.projectName}, ${jobDetails.accountName}`}
      />
     
      </Card>
      <TableContainer component={Paper} style={{ marginTop:5, marginLeft:5, marginRight:5 }}>
      <Table sx={{ minWidth: 500}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Level(s)</TableCell>
            <TableCell align="right">Scheduled</TableCell>
            <TableCell align="right">Completed</TableCell>
            <TableCell align="right">Hold</TableCell>
            <TableCell align="right">Selected</TableCell>
            <TableCell align="right">Rejected</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Levels}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Levels}
              </TableCell>
              <TableCell align="right">{row.scheduled}</TableCell>
              <TableCell align="right">{row.hold}</TableCell>
              <TableCell align="right">{row.completed}</TableCell>
              <TableCell align="right">{row.selected}</TableCell>
              <TableCell align="right">{row.rejected}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </>
  )
}

export default JobDetailsDrawer;