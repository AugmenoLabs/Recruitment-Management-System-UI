import * as React from 'react';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ScheduleInterview from '../Interview/ScheduleInterview';
import EditCandidateStatus from './EditCandidateStatus';


interface CandidateData {
    vendor:string,
    candidatename:string,
  Contact: number,
    email: string,
    date:string,
    status: string,
    screening:string,
    L1:string,
    L2:string,
    Managerial:string,
    HR:string,
    Offer:string,
    Hired:string,
}


function createData(
 vendor:string,
    candidatename:string,
  Contact: number,
    email: string,
    date:string,
    status: string,
    screening:string,
    L1:string,
    L2:string,
    Managerial:string,
    HR:string,
    Offer:string,
    Hired:string,
): CandidateData {
  return {
 vendor,candidatename,Contact,email,date,status,screening,L1,L2,Managerial,HR,Offer,Hired };
}

const rows = [

  createData( 'Linkedin', 'Sneha',7089996292,'kothari.sneha05@gmail.com','04/01/23','Scheduled for L1','Accepted','Scheduled','Pending','Pending','Pending','Not Accepted','No'),
  createData( 'Indeed', 'Anshu',7089336592,'kothari.sneha05@gmail.com','04/01/23','Scheduled for L2','Accepted','Selected','Scheduled','Pending','Pending','Not Accepted','No'),
  createData( 'Social', 'Sanjeev',7089366292,'kothari.sneha05@gmail.com','04/01/23','Screening Reject','Rejected','Pending','Pending','Pending','Pending','Not Accepted','No'),
  createData( 'Linkedin', 'Shivani',703336292,'kothari.sneha05@gmail.com','04/01/23','Scheduled for HR','Accepted','Selected','Selected','Selected','Scheduled','Not Accepted','No'),
  createData( 'Naukari', 'Anjali',9089336292,'kothari.sneha05@gmail.com','04/01/23','Scheduled for L1','Accepted','Scheduled','Pending','Pending','Pending','Not Accepted','No'),
  createData( 'Linkedin', 'Sneha',8089356292,'kothari.sneha05@gmail.com','04/01/23','Scheduled for L1','Accepted','Scheduled','Pending','Pending','Pending','Not Accepted','No'),
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

interface HeadCell {
  disablePadding: boolean;
  id: keyof CandidateData;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'candidatename',
    numeric: true,
    disablePadding :false,
    label: 'Candidate Name',
  },
  {
    id: 'vendor',
    numeric: true,
    disablePadding: false,
    label: 'Vendor',
  },
  {
    id: 'Contact',
    numeric: true,
    disablePadding: false,
    label: 'Contact',
  },
  {
    id: 'email',
    numeric: true,
    disablePadding: false,
    label: 'Email',
  },
  
  {
    id: 'date',
    numeric: true,
    disablePadding: false,
    label: 'Date',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status ',
  },
  {
    id: 'screening',
    numeric: true,
    disablePadding: false,
    label: 'Screening',
  },
  {
    id: 'L1',
    numeric: true,
    disablePadding: false,
    label: 'L1',
  },
  {
    id: 'L2',
    numeric: true,
    disablePadding: false,
    label: 'L2',
  },
  {
    id: 'Managerial',
    numeric: true,
    disablePadding: false,
    label: 'Mangerial',
  },
  {
    id: 'HR',
    numeric: true,
    disablePadding: false,
    label: 'HR',
  },
  {
    id: 'Offer',
    numeric: true,
    disablePadding: false,
    label: 'Offer',
  },
  {
    id: 'Hired',
    numeric: true,
    disablePadding: false,
    label: 'Hired',
  },
];


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type


 



// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
   

const AppliedCandidateTable:React.FunctionComponent=()=> {
 
 
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
 

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type


   
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChangePage = (event:React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/prefer-includes


 

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box style={{
        marginTop:'2rem',
      width: '95%',
      marginLeft:'2.5%',
    
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Paper sx={{  alignItems: 'center' ,overflowX:'auto'}} >
      
        <TableContainer sx={{
            marginTop: '0',
          overflowX:'scroll',
            "&::-webkit-scrollbar": {
              width: "4px",
              backgroundColor: "#F7F7F7",
            },
            "&::-webkit-scrollbar-track": {
              boxShadow: `inset 0 0 4px rgba(0, 0, 0, 0.3)`,
              backgroundColor: "#F7F7F7",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#000000",
            },
          }}>
          <Table
           stickyHeader
           aria-labelledby="tableTitle"
           size={'medium'}
           style={{minWidth:'80%'}}
          >
          <TableHead>
      <TableRow>
      
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'left' : 'center'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          
          >
              {headCell.label}
             
           
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                    hover
                   
                   
                  
                    tabIndex={-1}
                    key={row.email}
                  
                  >
                  
                    <TableCell align="center" color='blue'>
                   
                {row.candidatename}  
                </TableCell>
                    <TableCell
                  
                      component="th"
                      scope="row"
                      align='center'
                      padding="none"
                    >
                      {row.vendor}
                    </TableCell>
                    <TableCell align="center">{row.Contact}</TableCell>
                    <TableCell  align="center">{row.email}</TableCell>
                    <TableCell  align="center">{row.date}</TableCell>

                    <TableCell align="center">{row.status} </TableCell>
                    <TableCell  align="center">{row.screening}</TableCell>
                    <TableCell  align="center">{row.L1}</TableCell>
                    <TableCell  align="center">{row.L2}</TableCell>
                    <TableCell  align="center">{row.Managerial}</TableCell>
                    <TableCell align="center">{row.HR}</TableCell>
                    <TableCell  align="center">{row.Offer}</TableCell>
                    <TableCell  align="center">{row.Hired}</TableCell>
                    
                    <TableCell>
                          <ScheduleInterview />
                        </TableCell>
                        <TableCell>
                          <EditCandidateStatus />
                        </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 50 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
     
    </Box>
  );
}


export default AppliedCandidateTable;