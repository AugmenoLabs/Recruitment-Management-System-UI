import * as React from 'react';
import { Box,Menu,MenuItem,IconButton,Tooltip } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from 'react-router-dom';
import FilterListIcon from '@mui/icons-material/FilterList';

import { visuallyHidden } from '@mui/utils';

interface JobOpeningData {
  account: string,
  jobID: number,
  postedOn: string,
  experience: string,
  position:string,
  team:string,
  openposition:number,
  skills:string,
  noofcandidateapplied:number,

}


function createData(
  jobID: number,
 
account: string,
  postedOn: string,
  experience: string,
  position:string,
  team:string,
  openposition:number,
  skills:string,
  noofcandidateapplied:number
): JobOpeningData {
  return {
  jobID,account,postedOn,experience,position,team,openposition,skills,
  noofcandidateapplied };
}

const rows = [
  createData( 2301, 'Honeywell','04/02/2023','2-5','Frontend Developer','XDR',4,'React/JS/MUI',11),
  createData( 2302, 'LG','04/02/2023','2-5','Backend Developer','RMS',4,'React/JS/MUI',10),
  createData( 2303, 'Zeta','04/02/2023','3','Frontend Developer','TMS',4,'React/JS/MUI',5),
  createData( 2304, 'Syncly','04/02/2023','1','Frontend Developer','Polaris',4,'React/JS/MUI',6),
  createData( 2305, 'Amazon','04/02/2023','5','Frontend Developer','Exam Portal',4,'React/JS/MUI',15),
  createData( 2306, 'ZS','04/02/2023','2-5','Frontend Developer','Shopping website',4,'React/JS/MUI',10),
  createData( 2307, 'Flipkart','04/02/2023','3-5','Frontend Developer','Chatbot',4,'React/JS/MUI',8),
  createData( 2308, 'Bitwise','04/02/2023','2-5','Frontend Developer','XDR',4,'React/JS/MUI',2),
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
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
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
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
    disablePadding :false,
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
    label: 'Project ',
  },
  {
    id: 'openposition',
    numeric: true,
    disablePadding: false,
    label: 'Open Position',
  },
  {
    id: 'noofcandidateapplied',
    numeric: true,
    disablePadding: false,
    label: 'Total Applied',
  },
  {
    id: 'experience',
    numeric: true,
    disablePadding: false,
    label: 'Experience',
  },
  {
    id: 'skills',
    numeric: true,
    disablePadding: false,
    label: 'Skills',
  },
  {
    id: 'postedOn',
    numeric: true,
    disablePadding: false,
    label: 'Posted On',
  },
  {
    id:'skills',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof JobOpeningData) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function EnhancedTableHead(props: EnhancedTableProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof JobOpeningData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };


  return (
    <TableHead >
      <TableRow>
      
        {headCells.map((headCell) => (
         <> <TableCell style={{fontWeight:700,backgroundColor:'lightgray'}}

            key={headCell.id}
            align={headCell.numeric ? 'center' : 'center'}
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
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          
          </TableCell>
        
          </>
        ))}
      </TableRow>
    </TableHead>
  );
}



// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
   

const JobOpeningTable:React.FunctionComponent=()=> {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof JobOpeningData>('jobID');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClickmenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClose = () => {
    setAnchorEl(null);
  };
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof JobOpeningData,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.account);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClick = (event: React.MouseEvent<unknown>, account: string) => {
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
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  type NewType = unknown;

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChangePage = (event: NewType, newPage: number) => {
    setPage(newPage);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/prefer-includes
  const isSelected = (account:string) => selected.indexOf(account) !== -1;

  const history = useNavigate();
    const  navigatetoapply=():void=>{
history('/applyforjobs')
    }

    const  navigatetojd=():void=>{
      history('/jobdescription')
          }
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box style={{
      width: '95%',
      marginLeft:'2.5%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Paper sx={{  alignItems: 'center' ,overflowX:'auto'}} >
      <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
        <TableContainer sx={{
            marginTop: '0',
            overflowX:'auto',
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
          }}>
          <Table
           stickyHeader
           aria-labelledby="tableTitle"
           size={'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.account);
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                    hover
                 
                    onClick={(event) => {
                      handleClick(event, row.account)
                   }}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.account}
                    selected={isItemSelected}
                  >
                  
                    <TableCell  onClick={ navigatetojd} align="center" color='blue'>
                    <Link
                  
                  to={`/jobdescription`}
                  style={{ textDecoration: 'blue', color: 'blue' }}
                >
                {row.jobID}  
                </Link></TableCell>
                    <TableCell
                    onClick={ navigatetojd}
                      component="th"
                      scope="row"
                      align='center'
                      padding="none"
                    >
                      {row.position}
                    </TableCell>
                    <TableCell onClick={ navigatetojd} align="center">{row.account}</TableCell>
                    <TableCell onClick={ navigatetojd} align="center">{row.team} </TableCell>
                    <TableCell onClick={ navigatetojd} align="center">{row.openposition}</TableCell>
                    <TableCell onClick={ navigatetojd} align="center">{row.noofcandidateapplied}</TableCell>
                    <TableCell onClick={ navigatetojd} align="center">{row.experience}</TableCell>
                    <TableCell onClick={ navigatetojd} align="center">{row.skills}</TableCell>
                    <TableCell onClick={ navigatetojd} align="center">{row.postedOn}</TableCell>
                    <TableCell align="center">
                    <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClickmenu}
      >
      <MoreVertIcon/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={navigatetoapply}>Apply</MenuItem>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
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


export default JobOpeningTable;