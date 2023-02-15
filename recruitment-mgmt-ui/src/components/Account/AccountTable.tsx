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
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import keycloak from '../../Auth/keycloak';

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
  accountId: string;
  accountName: string;
  accountDetail: string;
  accountManager: string;
  createdOn: Date;
  updatedOn: Date;
  createdBy: string;
  updatedB: string;
  isDeleted: boolean;
}

const AccountTable: React.FunctionComponent = () => {
  const history = useNavigate();
  const navigateAddAccount = (): void => {
    history('/AddAccount');
  };
  const navigateAddProject = (): void => {
    history('/AddProject');
  };
  const API_URL = 'https://localhost:7267/api/Account';
  const [data, setData] = useState<AccountTableDatatype[]>([]);
  // const [isDeleting, setIsDeleting] = useState(false);
  {console.log("let")}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get<AccountTableDatatype[]>(API_URL);
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (Accounts:AccountTableDatatype) => {
    try {
      await axios.delete(`${API_URL}/${Accounts.accountId}`)
      .then(response => {
        console.log(response.data);
      });

      // Perform additional logic here, such as updating the UI to reflect the deleted item
    } catch (error) {
      console.error(error);
    } 
  };

  return (
    <>
      <Box sx={{ marginTop: '5rem' }}>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            paddingLeft: '2rem',
            paddingTop: '0.7rem',
            margin: 0,
            fontWeight: 600,
            fontSize: '30px',
          }}
          className="tableheader"
        >
          Account
        </Typography>
        <Paper
          sx={{
            width: '100%',
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
                width: '95%',
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
                    Account ID
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ fontWeight: 600 }}>
                    Account Name
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ fontWeight: 600 }}>
                    Project ID
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ fontWeight: 600 }}>
                    Project Name
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ fontWeight: 600 }}>
                    Project Manager
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableHead></TableHead>
              <TableBody>
                {data.map((row) => (
                  <StyledTableRow key={row.accountId}>
                    <StyledTableCell
                      className="cell"
                      component="th"
                      scope="row"
                      padding="none"
                      width="10%"
                    >
                      {row.accountId}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.accountName}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.accountDetail}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.createdBy}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.accountManager}
                    </StyledTableCell>
                    <TableCell sx={{ width: '0.5%' }}>
                      <EditIcon />
                    </TableCell>
                    <TableCell sx={{ width: '0.5%' }}>
                      <IconButton onClick={() => handleDelete(row)} >
                      <DeleteIcon  />
                      </IconButton>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
      <div>
        <Box justifyContent="center" alignItems="center" display="flex">
          <Button
            onClick={navigateAddAccount}
            variant="contained"
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              mt: 3,
              mb: 2,
            }}
          >
            Add Account
          </Button>
          <Button
            onClick={navigateAddProject}
            variant="contained"
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              mt: 3,
              mb: 2,
              ml: 2,
            }}
          >
            Add Project
          </Button>
        </Box>
      </div>
    </>
  );
};

export default AccountTable;
