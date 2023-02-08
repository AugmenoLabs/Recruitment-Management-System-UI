import {
  Box,
  Button,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Link from '@mui/material/Link';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

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
interface AccountTableDatatype {
  Username: string;
  email: string;
  Firstname: string;
  Lastname: string;
}
const rowdata: AccountTableDatatype[] = [
  {
    Username: "MyUser",
  email: "User@gmail.com",
  Firstname: "User",
  Lastname: "User",
  },
  {
    Username: "MyUser",
    email: "User@gmail.com",
    Firstname: "User",
    Lastname: "User",
  },
  {
    Username: "MyUser",
    email: "User@gmail.com",
  Firstname: "User",
  Lastname: "User",
  },
];

const ManageUser: React.FunctionComponent = () => {
  const history = useNavigate();
  const navigateAddUser=():void=>{
    history('/AddUser')
        }
  return (
    <>
    <div>
        <Box
          // justifyContent="center"
          // alignItems="center"
          display="flex"
          width={'80%'}          
        >
          <h4>User Info</h4>
          <Button
            variant="contained"
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              mt: 0,
               mb: 0,
               marginLeft:76              
            }}
            onClick={navigateAddUser}
          >
            Add User
          </Button>
        </Box>
      </div>
      <Paper
        sx={{
          width: '80%',
          overflow: 'hidden',
          marginLeft: '0rem',
          marginTop: '1rem',
        }}
      >
        <TableContainer
          sx={{
            marginTop: 0,
            '&::-webkit-scrollbar': {
              width: '6px',
              backgroundColor: '#F7F7F7',
            },
            '&::-webkit-scrollbar-track': {
              boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
              backgroundColor: '#F7F7F7',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#000000',
            },
          }}
        >
          <Table
            stickyHeader
            sx={{
              width: '98%',
              marginLeft: '9rem',
              marginRight: '0rem',
              margin: 'auto',
              tableLayout: 'auto',
            }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ fontWeight: 600 }}>
                  Username
                </StyledTableCell>
                <StyledTableCell align="center" style={{ fontWeight: 600 }}>
                  Email
                </StyledTableCell>
                <StyledTableCell align="center" style={{ fontWeight: 600 }}>
                  First name
                </StyledTableCell>
                <StyledTableCell align="center" style={{ fontWeight: 600 }}>
                  Last Name
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableHead></TableHead>
            <TableBody>
              {rowdata.map((row) => (
                <StyledTableRow key={row.Username}>
                  <StyledTableCell
                    className="cell"
                    component="th"
                    scope="row"
                    padding="none"
                    width="10%"
                  >
                    {row.Username}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.Firstname}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.Lastname}
                  </StyledTableCell>
                  <TableCell sx={{ width: '0.5%' }}>
                  <Link href="#/RoleMapping">Roles</Link>
                    </TableCell>
                  <TableCell sx={{ width: '0.5%' }}>
                    <EditIcon />
                  </TableCell>
                  <TableCell sx={{ width: '0.5%' }}>
                    <DeleteIcon />
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>     
    </>
  );
};

export default ManageUser;
