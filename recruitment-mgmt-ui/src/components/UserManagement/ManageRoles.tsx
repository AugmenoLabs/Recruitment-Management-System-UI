/* eslint-disable @typescript-eslint/no-misused-promises */
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
  import DeleteIcon from '@mui/icons-material/Delete';
  import { useNavigate } from 'react-router-dom';
import { RoleInterface } from '../../Interface/RoleInterface';
import { getToken } from '../../keycloak/GetToken';
import axios from 'axios';
import { clientId } from '../../keycloak/ClientDetails';
  
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
  
  const ManageRoles: React.FunctionComponent = () => {
    const history = useNavigate();
    const navigateAddRole=():void=>{
      history('/AddRole')
    }
    
    const [roles, setRoles] = useState<RoleInterface[]>([]);

    useEffect(() => {
      void GetAllRoles();
    }, []);
  
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const GetAllRoles = async () => {
      try {
        const token = await getToken();
        const response = await axios.get<RoleInterface[]>(`/admin/realms/MyRealm/clients/${clientId}/roles`, {
          headers: {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            'Authorization': `Bearer ${token}`
          }
        });
        setRoles(response.data);
        console.log("def",response.data);
      } catch (error) {
        
        console.error(error);
      }
    };

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const DeleteRole = async (Roles:RoleInterface) => {
      try {
        const token = await getToken();
        await axios.delete(`/admin/realms/MyRealm/roles-by-id/${Roles.id}`, {
          headers: {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            'Authorization': `Bearer ${token}`
          }
        })
        .then(response => {
          console.log(response.data);
        });
        void GetAllRoles();
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
                {roles.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell
                      className="cell"
                      component="th"
                      scope="row"
                      padding="none"
                      align='center'
                      width="20%"
                    >
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell width ="20%" align="center">{row.description}</StyledTableCell>
                    <TableCell sx={{ width: '0.5%' }}>
                      <EditIcon />
                    </TableCell>
                    <TableCell sx={{ width: '0.5%' }}>
                    <IconButton onClick={async () => await DeleteRole(row)} >
                      <DeleteIcon  />
                      </IconButton>
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
  