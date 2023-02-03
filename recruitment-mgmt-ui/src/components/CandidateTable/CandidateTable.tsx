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
import { Box, Paper, TablePagination, Typography } from '@mui/material';
import ScheduleInterview from '../Interview/ScheduleInterview';

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

const rows: CandidateTableDataType[] = [
  {
    name: 'Sneha Kothari',
    mobile: '9099876543',
    email: 'a@gmail.com',
    position: 'Frontend',
    status: 'Applied',
  },
  {
    name: 'Anshu Wadhwani',
    mobile: '9099876543',
    email: 'a@gmail.com',
    position: 'Frontend',
    status: 'Pending',
  },
  {
    name: 'Shubham Kumawat',
    mobile: '9099876543',
    email: 'a@gmail.com',
    position: 'Frontend',
    status: 'Applied',
  },
  {
    name: 'Sneha Kothari',
    mobile: '9099876543',
    email: 'a@gmail.com',
    position: 'Frontend',
    status: 'Applied',
  },
  {
    name: 'Anshu Wadhwani',
    mobile: '9099876543',
    email: 'a@gmail.com',
    position: 'Frontend',
    status: 'Pending',
  },
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

const CandidateTable: React.FunctionComponent = () => {
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
    <>
      {' '}
      <Box style={{ marginTop: '5rem', marginLeft: '2rem' }}>
        {' '}
        <Typography variant="h6" style={{ fontSize: '24px', fontWeight: 600 }}>
          Candidate Details
        </Typography>
      </Box>
      <Box
        style={{
          marginTop: '1rem',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper sx={{ alignItems: 'center' }}>
          <TableContainer
            sx={{
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
            <Table stickyHeader aria-labelledby="tableTitle" size={'medium'}>
              <TableHead>
                <TableRow>
                  {headCells.map((headCell) => (
                    <TableCell
                      key={headCell.id}
                      style={{ fontWeight: 600 }}
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
                    return (
                      <TableRow
                        hover
                        key={row.name}
                        role="checkbox"
                        tabIndex={-1}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          align="center"
                          padding="none"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell align="center">{row.mobile}</TableCell>
                        <TableCell align="center">{row.email}</TableCell>
                        <TableCell align="center">{row.position}</TableCell>
                        <TableCell align="center">{row.status}</TableCell>
                        <TableCell>
                          <ScheduleInterview />
                        </TableCell>
                        <TableCell>
                          <DownloadIcon />
                        </TableCell>
                        <TableCell>
                          <EditIcon />
                        </TableCell>
                        <TableCell>
                          <DeleteIcon />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={5} />
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
    </>
  );
};

export default CandidateTable;
