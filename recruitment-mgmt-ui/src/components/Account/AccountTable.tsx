import {
  Box,
  Button,
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
import React from 'react';
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
  AccountID: string;
  name: string;
  ProjectID: string;
  ProjectName: string;
  Manager: string;
}
const rowdata: AccountTableDatatype[] = [
  {AccountID: 'HON123',name: 'HoneyWell',ProjectID: 'FDU', ProjectName: 'Forge Data Unity',Manager: 'Sneha',},
  {AccountID: 'HON123',name: 'HoneyWell',ProjectID: 'X001', ProjectName: 'XDR',Manager: 'Sanjeev',},
  {AccountID: 'SYM123',name: 'Symphony',ProjectID: 'ABC', ProjectName: 'Bot',Manager: 'Anshu',},
];


const AccountTable: React.FunctionComponent = () => {
    const history = useNavigate();
    const navigateAddAccount=():void=>{
history('/AddAccount')
    }
    const navigateAddProject=():void=>{
        history('/AddProject')
            }
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
              {rowdata.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    className="cell"
                    component="th"
                    scope="row"
                    padding="none"
                    width="10%"
                  >
                    {row.AccountID}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.name}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.ProjectID}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.ProjectName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.Manager}
                  </StyledTableCell>
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
    </Box>
    <div>
    <Box justifyContent='center' alignItems='center' display='flex'>
              <Button 
              onClick={navigateAddAccount}
        variant="contained"
       
        sx={{alignItems:'center',justifyContent:'center', mt: 3, mb: 2 }}>Add Account</Button>
        <Button 
               onClick={navigateAddProject}
        variant="contained"
       
        sx={{alignItems:'center',justifyContent:'center', mt: 3, mb: 2, ml:2 }}>Add Project</Button>
</Box>
</div>
</>
  );
};

export default AccountTable;
