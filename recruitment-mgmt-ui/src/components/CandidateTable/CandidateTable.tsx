import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DownloadIcon from '@mui/icons-material/Download';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Paper,  TablePagination, Typography } from '@mui/material';
import ScheduleInterview from '../Interview/ScheduleInterview';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    width: '16%',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    width: '16%',
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
interface CandidateTableDataType {
  name: string;
  mobile: string;
  email: string;
  position: string;
  status: string;
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
{name:'Sneha Kothari',mobile: '9099876543', email:'a@gmail.com', position:'Frontend',status: 'Applied'},
{name:'Anshu Wadhwani', mobile:'9099876543', email:'a@gmail.com', position:'Frontend', status:'Pending'},

];
interface HeadCell {
  disablePadding: boolean;
  id: keyof CandidateTableDataType;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: true,
    disablePadding: false,
    label: 'Candidate Name',
  },
  {
    id: 'mobile',
    numeric: true,
    disablePadding: false,
    label: 'Contact No.',
  },
  {
    id: 'email',
    numeric: true,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'position',
    numeric: true,
    disablePadding: false,
    label: 'Position ',
  },
  
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
];

const CandidateTable:React.FunctionComponent=()=> {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows =
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const handleChangePage = (event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box sx={{    marginTop: '5rem' }}>
      <Typography
        gutterBottom
        variant="h5"
        sx={{ paddingLeft: '2rem', paddingTop: '0.7rem', margin: 0 ,fontWeight:600,fontSize:'30px'}}
        className="tableheader"
      >
        Candidate Details
      </Typography>
    <Paper sx={{ width: "100%", overflow: "hidden" ,marginLeft:'0rem',marginTop:'1rem'}}>
      
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
      <Table stickyHeader sx={{ width: '95%' ,marginLeft:'9rem',marginRight:'0rem',margin:'auto',tableLayout:'auto'}} aria-label="customized table">
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
};

export default CandidateTable;
