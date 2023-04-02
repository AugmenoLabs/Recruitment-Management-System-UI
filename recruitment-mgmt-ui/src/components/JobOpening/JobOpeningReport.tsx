/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './JobOpening.style.scss';
import { useNavigate, Link } from 'react-router-dom';
import MaterialReactTable, {
  MaterialReactTableProps,
  MRT_Cell,
  MRT_ColumnDef,
  MRT_Row,
} from 'material-react-table';
import {
  Avatar,
  Box,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Drawer,
  styled,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Checkbox,
} from '@mui/material';
import { JobOpeningInterface } from '../../Interface/JobOpeningInterface';
import axios from 'axios';
import ScreeningPosition from './ScreeningPosition';
import Loader from '../Loader/Loader';
import formatDate from '../formatDate/formatDate';
import JobDetailsDrawer from './JobDetailsDrawer';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export interface JobOpeningProps {
  users: JobOpeningInterface[];
}

const drawerWidth = 550;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const JobOpeningReport: React.FunctionComponent<JobOpeningProps> = ({ users,}) => {
  // const[users,setUsers]=useState<RequisitionInterface[]>([]);
  const history = useNavigate();
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleRowClick = (row: MRT_Row<JobOpeningInterface>) => {
    const id = row.getValue('id');
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return (
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      history(`/jobdescription/${id}`)
    );
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleapplyjobs = (row: MRT_Row<JobOpeningInterface>) => {
    const id = row.getValue('id');
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return (
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      history(`/applyforjobs/${id}`)
    );
  };
  const navigatetojd = (): void => {
    history('/applyforjobs');
  };

 

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  // const navigatetoapply = (rowData:any) => {
  //   // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unused-expressions, array-callback-return
  //   history(`/jobdescription/${rowData.id}`);
  // };

  const [data, setData] = useState<JobOpeningInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const API_URL =
  'http://localhost:5141/api/v1/OpenPosition/OpenPositionsReport';
  // const [lastUpdate, setLastUpdate] = useState(Date.now());


 

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      try {
        const result = await axios.get<JobOpeningInterface[]>(API_URL);
        setTimeout(() => {
          setData(result.data);
        
          setLoading(false);
          console.log(result.data);
        }, 2000);
      } catch (error) {
        console.error(error);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
    console.log(data);
  }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setLastUpdate(Date.now());
  //   }, 5000); // update every 5 seconds
  //   return () => clearInterval(intervalId);
  // }, []);

  const [validationErrors, setValidationErrors] = useState<{
    [cellId: string]: string;
  }>({});
  const handleSaveRowEdits: MaterialReactTableProps<JobOpeningInterface>['onEditingRowSave'] =
    async ({ exitEditingMode, row, values }) => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!Object.keys(validationErrors).length) {
        data[row.index] = values;

        setData([...data]);
        exitEditingMode();
      }
    };
    
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const randomColor = () => {
    const colors = [
      '#F44336',
      '#E91E63',
      '#9C27B0',
      '#673AB7',
      '#3F51B5',
      '#2196F3',
      '#03A9F4',
      '#00BCD4',
      '#009688',
      '#4CAF50',
      '#8BC34A',
      '#CDDC39',
      '#FFC107',
      '#FF9800',
      '#FF5722',
      '#795548',
      '#607D8B',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };
  const handleDeleteRow = useCallback(
    (row: MRT_Row<JobOpeningInterface>) => {
      if (
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        !confirm(
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `Are you sure you want to delete ${row.getValue('accountName')}`
        )
      ) {
        return;
      }

     data.splice(row.index, 1);
     setData([...data]);
   },
   [data],
 );



  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleScreeningClose = (row: any) => {
    setIsDialogOpen(false);
  };

  const [positionId, setPositionId] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleScreening = (row: MRT_Row<JobOpeningInterface>) => {
    setPositionId(row.getValue('id'));
    setIsDialogOpen(true);
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    return (
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      <ScreeningPosition positionid={positionId} />
    );
  };

  const [openDrawer, setOpenDrawer] = useState(false);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleDrawerOpen = (row:MRT_Row<JobOpeningInterface>) => {
    setPositionId(row.getValue('id'));
    setOpenDrawer(true);
    return(
      <JobDetailsDrawer positionid={positionId}/>
    )
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleDrawerClose = (row:any) => {
    setOpenDrawer(false);
  };

  const getCommonEditTextFieldProps = useCallback(
    (
      cell: MRT_Cell<JobOpeningInterface>
    ): MRT_ColumnDef<JobOpeningInterface>['muiTableBodyCellEditTextFieldProps'] => {
      return {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === 'accountName'
              ? validateRequired(event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors]
  );

  const columns = useMemo<Array<MRT_ColumnDef<JobOpeningInterface>>>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 70,
      },
      {
        accessorFn: (row) =>
          `${row.jobId} ${row.accountName} ${row.projectName}`,
        id: 'accountandprojectinfo',
        header: 'Account & Project',
        isFilterable: true,
        isFilterMatched: true,
        Cell: ({ row, cell }) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Grid container>
              <Grid item lg={2}>
                <Avatar
                  alt={row.original.jobId}
                  src="."
                  sx={{
                    backgroundColor: randomColor(),
                  }}
                ></Avatar>
              </Grid>
              <Grid item lg={10}>
                <Typography sx={{ paddingLeft: 3 }}>
                  <Grid
                    sx={{
                      fontFamily: 'cursive',
                      fontWeight: 'bold',
                      color: 'darkred',
                      fontSize: 15,
                    }}
                  >
                    {row.original.jobId}
                  </Grid>
                </Typography>
                <Typography
                  sx={{
                    paddingLeft: 3,
                    fontWeight: 'bold',
                    fontSize: 12,
                  }}
                >
                  Account : {row.original.accountName}
                </Typography>
                <Typography
                  sx={{
                    paddingLeft: 3,
                    fontWeight: 'bold',
                    fontSize: 12,
                  }}
                >
                  Project : {row.original.projectName}
                </Typography>
              </Grid>
            </Grid>

            {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
            {/* <span>{renderedCellValue}</span> */}
          </Box>
        ),
       
      },
      {
        accessorFn: (row) =>
          `${row.jobTitle} ${row.noOfPositions} ${row.budget}`,
        id: 'openpositioninfo',
        header: 'Open Positions',
        isFilterable: true,
        isFilterMatched: true,
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: () => handleRowClick(cell.row),
          sx: {
            cursor: 'pointer',
            whiteSpace: 'pre-line',
            wordWrap: 'break-word',
          },
        }),
        Cell: ({ row, cell }) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Grid container>
              <Grid item lg={12}>
                <Typography
                  sx={{
                    paddingLeft: 3,

                    fontSize: 12,
                  }}
                >
                  <b>Position Title :</b> {row.original.jobTitle}
                </Typography>
                <Typography
                  sx={{
                    paddingLeft: 3,

                    fontSize: 12,
                  }}
                >
                  <b>Open Positions :</b> {row.original.noOfPositions}
                </Typography>
                <Typography
                  sx={{
                    paddingLeft: 3,

                    fontSize: 12,
                  }}
                >
                  <b>Budget Range :</b> {row.original.budget}
                </Typography>
                <Typography
                  sx={{
                    paddingLeft: 3,

                    fontSize: 12,
                  }}
                >
                  <b>Posted On :</b>{formatDate(row.original.postedOn)}
                </Typography>
              </Grid>
            </Grid>

            {/* <span>{renderedCellValue}</span> */}
          </Box>
        ),
      },
      {
        id: 'screeninginfo',
        header: 'Screening Info',
        isFilterable: true,
        isFilterMatched: true,
        accessorFn: (row) =>
          `${row.totalApplied}  `,
        Cell: ({ row, cell }) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Grid container>
              <Grid item lg={12}>
                <Typography
                  sx={{
                    paddingLeft: 3,

                    fontSize: 12,
                  }}
                >
                  <Link onClick={() => handleScreening(row)} to={''}>
                    {' '}
                    <b>Profile Received :</b>{' '}
                  </Link>{' '}
                  {row.original.totalApplied}
                </Typography>
                {/* <Typography
                  sx={{
                    paddingLeft: 3,

                    fontSize: 12,
                  }}
                >
                  <b>Screenings :</b> {row.original.screenings}
                </Typography>
                <Typography
                  sx={{
                    paddingLeft: 3,

                    fontSize: 12,
                  }}
                >
                  <b>Hired :</b> {row.original.onboarded}
                </Typography> */}
              </Grid>
            </Grid>

            {/* <span>{renderedCellValue}</span> */}
          </Box>
        ),
      },
      {
        id: 'workflowinfo',
        accessorFn: (row) =>
          `${row.l1s}`,
        header: 'Work Flow Info',
        isFilterable: true,
        isFilterMatched: true,
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: () => handleDrawerOpen(cell.row),
          sx: {
            cursor: 'pointer',
            whiteSpace: 'pre-line',
            wordWrap: 'break-word',
          },
        }),
        Cell: ({ cell, row }) => (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Grid container>
              <Grid item lg={12}>
              <Typography
                  sx={{
                    paddingLeft: 3,

                    fontSize: 12,
                  }}
                >
                  <Link onClick={() => handleDrawerOpen(row)} to={''}>
                    {' '}
                    <b>Open Levels</b>{' '}
                  </Link>{' '}
                
                </Typography>
              
              </Grid>
            </Grid>

            {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
            {/* <span>{renderedCellValue}</span> */}
          </Box>
        ),
      },
    ],
    [getCommonEditTextFieldProps]
  );
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <MaterialReactTable
          columns={columns}
          data={data}
          muiTablePaginationProps={{
            rowsPerPageOptions: [5, 10, 20, 50],
          }}
          initialState={{
            density: 'compact',
            columnVisibility: { id: false },
            pagination: { pageSize: 5, pageIndex: 0 },
          }}
          enableDensityToggle={false}
          muiTableHeadCellProps={{
            sx: {
              '& .Mui-TableHeadCell-Content': {
                justifyContent: 'center',
                fontWeight: 500,
                color: 'black',
              },
            },
          }}
          muiTableProps={{
            sx: {
              tableLayout: 'auto',
              align: 'center',
              marginLeft: '1%',
              marginRight: '1%',
              width: '98%',
            },
          }}
          enableRowActions
          editingMode="modal"
          onEditingRowSave={handleSaveRowEdits}
          onEditingRowCancel={handleCancelRowEdits}
          renderRowActionMenuItems={({ row, table, closeMenu }) => [
            <MenuItem
              key={0}
              onClick={() => {
                handleapplyjobs(row);
              }}
              sx={{ m: 0 }}
            >
              Apply
            </MenuItem>,
            <MenuItem
              key={1}
              onClick={() => {
                // Send email logic...
                table.setEditingRow(row);
              }}
              sx={{ m: 0 }}
            >
              Edit
            </MenuItem>,
            <MenuItem
              key={2}
              onClick={() => {
                // Send email logic...
                handleDeleteRow(row);
              }}
              sx={{ m: 0 }}
            >
              Delete
            </MenuItem>,
          ]}
          enableColumnResizing
          positionActionsColumn="last"
          displayColumnDefOptions={{
            'mrt-row-actions': {
              size: 50,

              muiTableHeadCellProps: {
                align: 'center',
              },
            },
          }}
          enableColumnActions={false}
          muiTableHeadRowProps={{
            sx: {
              background: '#9fd7fc',
              borderStyle: 'solid',
              borderColor: '#a9d6f5',
            },
          }}
          muiTableBodyProps={{
            sx: {
              background: '#e3f2fc',
              borderStyle: 'solid',
              borderColor: 'blue',
              borderWidth: 2,
            },
          }}

          renderTopToolbarCustomActions={({ table }) => {
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            const [filterMenuOpen, setFilterMenuOpen] = useState(false);
            const [selectedFilters, setSelectedFilters] = useState([]);
          
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            const handleFilterMenuOpen = () => {
              setFilterMenuOpen(true);
            };
          
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            const handleFilterMenuClose = () => {
              setFilterMenuOpen(false);
            };
          
          
            const filters = ['filter1', 'filter2', 'filter3'];
          
            return (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button
                  color="secondary"
                  onClick={handleFilterMenuOpen}
                  variant="contained"
                >
                  Filters
                </Button>
                <Menu
                  // anchorEl={filterMenuOpen}
                  open={Boolean(filterMenuOpen)}
                  onClose={handleFilterMenuClose}
                >
                  {filters.map((filter) => (
                    <MenuItem key={filter}>
                      <Checkbox
                        // checked={selectedFilters.indexOf(filter) !== -1}
                        // onChange={handleFilterToggle(filter)}
                      />
                      {filter}
                    </MenuItem>
                  ))}
                  <Button
                  //  onClick={handleApplyFilters}
                   >Apply Filters</Button>
                </Menu>
              </div>
            );
          }}
        />
      )}
      <Dialog open={isDialogOpen} BackdropProps={{ invisible: true }} maxWidth="md">
        <DialogContent>
          <ScreeningPosition positionid={positionId} />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleScreeningClose}
            style={{ marginRight: '1rem' }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Drawer
       sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          overflow:'hidden'
        },
      }}
        variant="persistent"
        anchor="right"
        open={openDrawer}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ListItemIcon/>
            {/* <KeyboardArrowRightIcon/> */}
          </IconButton>

        </DrawerHeader>
        <IconButton onClick={handleDrawerClose} style={{color:'black',marginRight:'20px',float:'right',display:'end'}}>
            {/* <ListItemIcon style={{color:'black'}}/> */}
            <KeyboardArrowRightIcon/>
          </IconButton>
          <JobDetailsDrawer positionid={positionId}/>
       

      </Drawer>
    </>
  );
};
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/strict-boolean-expressions
const validateRequired = (value: string) => !!value.length;

export default JobOpeningReport;