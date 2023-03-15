/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MaterialReactTable, {
  MaterialReactTableProps,
  MRT_Cell,
  MRT_ColumnDef,
  MRT_Row,
} from 'material-react-table';
import {
  Avatar,
  CircularProgress,
  Box,
  Grid,
  MenuItem,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { JobOpeningInterface } from '../../Interface/JobOpeningInterface';
import axios from 'axios';
import { AccountInterface } from '../../Interface/AccountInterface';
import { RequisitionInterface } from '../../Interface/RequisitionInterface';
import { fontFamily, fontSize } from '@mui/system';
import ScreeningPosition from './ScreeningPosition';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import { cursorTo } from 'readline';
import Loader from '../Loader/Loader';

export interface JobOpeningProps {
  users: JobOpeningInterface[];
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const NoDataComponent = () => (
  <Typography variant="body1" align="center">
    No data to display.
  </Typography>
);

const JobOpeningReport: React.FunctionComponent<JobOpeningProps> = ({
  users,
}) => {
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
    [data]
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
                  <b>Job Post Date :</b> {'08-March-2023'}
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
          `${row.totalApplied} ${row.screenings} ${row.onboarded} `,
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
                <Typography
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
                </Typography>
              </Grid>
            </Grid>

            {/* <span>{renderedCellValue}</span> */}
          </Box>
        ),
      },
      {
        id: 'workflowinfo',
        accessorFn: (row) =>
          `${row.l1s} ${row.l2s} ${row.managerials} ${row.hr}`,
        header: 'Work Flow Info',
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
                  <b>Level 1 :</b> {row.original.l1s}
                </Typography>
                <Typography
                  sx={{
                    paddingLeft: 3,

                    fontSize: 12,
                  }}
                >
                  <b>Level 2 :</b> {row.original.l2s}
                </Typography>
                <Typography
                  sx={{
                    paddingLeft: 3,

                    fontSize: 12,
                  }}
                >
                  <b>Manager :</b> {row.original.managerials}
                </Typography>
                <Typography
                  sx={{
                    paddingLeft: 3,

                    fontSize: 12,
                  }}
                >
                  <b>HR :</b> {row.original.hr}
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
        />
      )}
      <Dialog open={isDialogOpen} onClose={handleScreeningClose} maxWidth="md">
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
    </>
  );
};
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/strict-boolean-expressions
const validateRequired = (value: string) => !!value.length;

export default JobOpeningReport;
