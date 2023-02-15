import {
  Box,
  Button,
  IconButton,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getToken } from '../../API/GetToken';
import { UserInterface } from '../../Interfaces/UserInterface';
import DeleteIcon from '@mui/icons-material/Delete';

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
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

const ManageUser: React.FunctionComponent = () => {
  const history = useNavigate();
  const navigateAddUser = (): void => {
    history('/AddUser');
  };

  const [data, setData] = useState<AccountTableDatatype[]>([]);

  useEffect(() => {
    GetAllUser();
  }, []);

  const GetAllUser = async () => {
    try {
      const token = await getToken();
      const response = await axios.get<AccountTableDatatype[]>(
        '/admin/realms/MyRealm/users',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data);
      console.log('def', response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const DeleteUser = async (User: UserInterface) => {
    try {
      const token = await getToken();
      await axios
        .delete(`/admin/realms/MyRealm/users/${User.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
        });
      GetAllUser();
      // Perform additional logic here, such as updating the UI to reflect the deleted item
    } catch (error) {
      console.error(error);
    }
  };

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
              marginLeft: 76,
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
              {data.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell
                    className="cell"
                    component="th"
                    scope="row"
                    padding="none"
                    width="10%"
                  >
                    {row.username}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.firstName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.lastName}
                  </StyledTableCell>
                  <TableCell sx={{ width: '0.5%' }}>
                    <Link to={`/RoleMapping/${row.id}`}>Roles</Link>
                  </TableCell>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => DeleteUser(row)}>
                    <DeleteIcon />
                  </IconButton>
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
