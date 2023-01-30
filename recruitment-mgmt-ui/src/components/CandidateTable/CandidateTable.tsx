import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Paper,  Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
width:'16%'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    width:'16%'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
interface CandidateTableDataType{
  name: string,
  mobile: string,
  email: string,
  position: string,
  status: string,
}

// function createData(
// {  name, mobile, email, position, status }:CandidateTableDataType
// ) {
//   return {
//      name, mobile, email, position, status 
//     };
// }

const rows:CandidateTableDataType[]= [
  {name:'Sneha Kothari',mobile: '9099876543', email:'a@gmail.com', position:'Frontend',status: 'Applied'},
 {name:'Anshu Wadhwani', mobile:'9099876543', email:'a@gmail.com', position:'Frontend', status:'Pending'},
{name:'Shubham Kumawat', mobile:'9099876543', email:'a@gmail.com', position:'Frontend', status:'Applied'},
  // createData({'Sneha', '9099876543', 'a@gmail.com', 'Frontend', 'Applied'}),
  // createData({'Anshu', '9099876543', 'a@gmail.com', 'Frontend', 'Applied'}),
];

const CandidateTable:React.FunctionComponent=()=> {
  return (
    <Box sx={{  width: "100%",  marginTop: 2 }}>
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Typography
        gutterBottom
        variant="h5"
        sx={{ paddingLeft: '6rem', paddingTop: '-2rem', margin: 0 ,fontWeight:600,fontSize:'32px'}}
        className="tableheader"
      >
        Candidate Details
      </Typography>
    <TableContainer sx={{
            marginTop: 0,
          
            "&::-webkit-scrollbar": {
              width: "6px",
              backgroundColor: "#F7F7F7",
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
              backgroundColor: "#F7F7F7",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#000000",
            },
          }} >
      <Table stickyHeader sx={{ width: '90%' ,marginLeft:'7rem',marginRight:'0rem',margin:'auto',tableLayout:'auto'}} aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell   style={{fontWeight:600}}>Name</StyledTableCell>
            <StyledTableCell  align="center"  style={{fontWeight:600}}>Mobile No.</StyledTableCell>
            <StyledTableCell align="center"  style={{fontWeight:600}} >Email</StyledTableCell>
            <StyledTableCell align="center"  style={{fontWeight:600}} >Position</StyledTableCell>
            <StyledTableCell align="center"  style={{fontWeight:600}} >Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead></TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell className="cell"
                        component="th"
                        scope="row"
                        padding="none"
                        width="10%"
                        >
                {row.name}
              </StyledTableCell>
              <StyledTableCell  align="center">{row.mobile}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.position}</StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
              <TableCell sx={{width:'1%'}} ><DownloadIcon/></TableCell>
              <TableCell sx={{width:'0.5%'}}><EditIcon/></TableCell>
              <TableCell sx={{width:'0.5%'}}><DeleteIcon/></TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    </Box>
  );
}

export default CandidateTable;