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
    Rolename: string;
    Description: string;
  }
  const rowdata: AccountTableDatatype[] = [
    {
    Rolename: "HR",
    Description: "role_HR",
    
    },
    {
        Rolename: "Manager",
        Description: "role_Manager",
    },
    {
        Rolename: "Super Admin",
        Description: "role_Admin",
    },
  ];
  
  const ManageRoles: React.FunctionComponent = () => {
    const history = useNavigate();
    const navigateAddRole=():void=>{
      history('/AddRole')
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
            <h4>Available Roles</h4>
            <Button
              variant="contained"
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                mt: 0,
                 mb: 0,
                 marginLeft:69
                 
              }}
              onClick={navigateAddRole}
            >
              Add Roles
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
                  <StyledTableCell align="center" style={{ fontWeight: 600 }}>
                    Role name
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ fontWeight: 600 }}>
                    Description
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableHead></TableHead>
              <TableBody>
                {rowdata.map((row) => (
                  <StyledTableRow key={row.Rolename}>
                    <StyledTableCell
                      className="cell"
                      component="th"
                      scope="row"
                      padding="none"
                      align='center'
                      width="20%"
                    >
                      {row.Rolename}
                    </StyledTableCell>
                    <StyledTableCell width ="20%" align="center">{row.Description}</StyledTableCell>
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
  
  export default ManageRoles;
  