import * as React from 'react';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { visuallyHidden } from '@mui/utils';
// import { deflate } from 'zlib';

interface JobOpeningData {
  account: string,
  jobID: number,
  postedOn: string,
  experience: string,
  position:string,
  team:string,
  openposition:number,
}

const rows :JobOpeningData[]= [
 {jobID:2301,account:'Honeywell',postedOn:'01/02/2022',experience:'2-4',position:'Frontend Developer',
team:'XDR',openposition:2},
{jobID:2302,account:'LG',postedOn:'01/02/2022',experience:'3-5',position:'Frontend Developer',
team:'Chatbot',openposition:5},
{jobID:2303,account:'Honeywell',postedOn:'01/02/2022',experience:'2',position:'Frontend Developer',
team:'Polaris',openposition:3},
{jobID:3,account:'Honeywell',postedOn:'01/02/2022',experience:'2',position:'Frontend Developer',
team:'RMS',openposition:2},
{jobID:3,account:'Honeywell',postedOn:'01/02/2022',experience:'2',position:'Frontend Developer',
team:'XDR',openposition:2},
{jobID:3,account:'Honeywell',postedOn:'01/02/2022',experience:'2',position:'Frontend Developer',team:'XDR',openposition:2}
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T): number {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
): T[] {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order: number = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof JobOpeningData;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'jobID',
    numeric: true,
    disablePadding: false,
    label: 'JOB ID',
  },
  {
    id: 'position',
    numeric: true,
    disablePadding: false,
    label: 'Position',
  },
  {
    id: 'account',
    numeric: true,
    disablePadding: false,
    label: 'Account',
  },
  {
    id: 'team',
    numeric: true,
    disablePadding: false,
    label: 'Team ',
  },
  {
    id: 'openposition',
    numeric: true,
    disablePadding: false,
    label: 'Open Position',
  },
  {
    id: 'experience',
    numeric: true,
    disablePadding: false,
    label: 'Experience Req',
  },
  {
    id: 'postedOn',
    numeric: true,
    disablePadding: false,
    label: 'Posted On',
  },
];

const JobOpeningTable: React.FunctionComponent = () => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof JobOpeningData>('jobID');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof JobOpeningData
  ): void => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (
    event: React.MouseEvent<unknown>,
    account: string
  ): void => {
    const selectedIndex = selected.indexOf(account);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, account);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (account: string): boolean => selected.includes(account);
  const createSortHandler =
    (property: keyof JobOpeningData) => (event: React.MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper sx={{  alignItems: 'center' }}>
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
          <Table
           stickyHeader
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    style={{fontWeight:600}}
                    align={headCell.numeric ? 'left' : 'center'}
                    padding={headCell.disablePadding ? 'none' : 'normal'}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={createSortHandler(headCell.id)}
                    >
                      {headCell.label}
                      {orderBy === headCell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === 'desc'
                            ? 'sorted descending'
                            : 'sorted ascending'}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.account);

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.account)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.account}
                      selected={isItemSelected}
                    >
                    
                      <TableCell align="center">{row.jobID}</TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        align='center'
                        padding="none"
                      >
                        {row.position}
                      </TableCell>
                      <TableCell align="center">{row.account}</TableCell>
                      <TableCell align="center">{row.team}</TableCell>
                      <TableCell align="center">{row.openposition}</TableCell>
                      <TableCell align="center">{row.experience}</TableCell>
                      <TableCell align="center">{row.postedOn}</TableCell>
                      <TableCell sx={{width:'0.5%'}}><EditIcon/></TableCell>
              <TableCell sx={{width:'0.5%'}}><DeleteIcon/></TableCell>
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
  );
};

export default JobOpeningTable;
