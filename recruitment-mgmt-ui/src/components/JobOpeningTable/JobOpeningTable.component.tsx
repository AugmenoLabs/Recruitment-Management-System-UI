/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MaterialReactTable, { MaterialReactTableProps, MRT_Cell, MRT_ColumnDef, MRT_Row } from 'material-react-table';
import { MenuItem } from '@mui/material';
import { JobOpeningInterface } from '../../Interface/JobOpeningInterface';
import axios from 'axios';
import { AccountInterface } from '../../Interface/AccountInterface';



// const data: JobOpeningData[] = [
//   {
//     id: 2301,
//     position: 'Frontend Developer',
//     account: 'Honeywell',
//     team: 'XDR',
//     openposition: 2,
//     totalcandidate: 10,
//     experience: '3',
//     skills: 'React/MUI/JS',
//     status: 'Hiring',
//     screening: 4,
//     hired: 0,
//     L1:2,
//     L2:1,
//     Managerial:0,
//     HR:0, 
//   },

//   {
//     id: 2302,
//     position: 'Backend Developer',
//     account: 'LG',
//     team: 'RMS',
//     openposition: 5,
//     totalcandidate: 0,
//     experience: '1',
//     skills: '.Net/C#',
//     status: 'Hiring',
//     screening: 4,
//     hired: 0,
//     L1:2,
//     L2:1,
//     Managerial:0,
//     HR:0, 
//   },
//   {
//     id: 2303,
//     position: 'Frontend Developer',
//     account: 'Honeywell',
//     team: 'XDR',
//     openposition: 3,
//     totalcandidate: 5,
//     experience: '5',
//     skills: 'React/MUI/JS',
//     status: 'Hiring',
//     screening: 4,
//     hired: 0,
//     L1:2,
//     L2:1,
//     Managerial:0,
//     HR:0, 
//   },
//   {
//     id: 2304,
//     position: 'Devops',
//     account: 'Flipkart',
//     team: 'TMS',
//     openposition: 2,
//     totalcandidate: 10,
//     experience: '3',
//     skills: 'React/MUI/JS',
//     status: 'Hiring',
//     screening: 4,
//     hired: 0,
//     L1:2,
//     L2:1,
//     Managerial:0,
//     HR:0, 
//   },
//   {
//     id: 2305,
//     position: 'Frontend Developer',
//     account: 'Honeywell',
//     team: 'Polaris',
//     openposition: 2,
//     totalcandidate: 7,
//     experience: '2',
//     skills: 'React/MUI/JS',
//     status: 'Hiring',
//     screening: 4,
//     hired: 0,
//     L1:2,
//     L2:1,
//     Managerial:0,
//     HR:0, 
//   },
//   {
//     id: 2306,
//     position: 'Frontend Developer',
//     account: 'Honeywell',
//     team: 'XDR',
//     openposition: 2,
//     totalcandidate: 10,
//     experience: '3',
//     skills: 'React/MUI/JS',
//     status: 'Hiring',
//     screening: 4,
//     hired: 0,
//     L1:2,
//     L2:1,
//     Managerial:0,
//     HR:0, 
//   },
//   {
//     id: 2307,
//     position: 'Frontend Developer',
//     account: 'Honeywell',
//     team: 'XDR',
//     openposition: 2,
//     totalcandidate: 8,
//     experience: '3',
//     skills: 'React/MUI/JS',
//     status: 'Hiring',
//     screening: 4,
//     hired: 0,
//     L1:2,
//     L2:1,
//     Managerial:0,
//     HR:0, 
//   },
//   {
//     id: 2308,
//     position: 'Frontend Developer',
//     account: 'Honeywell',
//     team: 'XDR',
//     openposition: 2,
//     totalcandidate: 10,
//     experience: '3',
//     skills: 'React/MUI/JS',
//     status: 'Hiring',
//     screening: 4,
//     hired: 0,
//     L1:2,
//     L2:1,
//     Managerial:0,
//     HR:0, 
//   },
// ];

const JobOpeningTable: React.FunctionComponent = () => {
  const history = useNavigate();
  const navigatetoapply = (): void => {
    history('/jobdescription/:id');
  };
  const [data, setData] = useState<JobOpeningInterface[]>([]);
 
  const API_URL = 'http://localhost:5141/api/v1/OpenPosition';
  // const [isDeleting, setIsDeleting] = useState(false);
 
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      try {
        const result = await axios.get<JobOpeningInterface[]>(API_URL);
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
    console.log(data);
  }, []);
  const navigatetojd = (): void => {
    history('/applyforjobs');
  };
  const [validationErrors, setValidationErrors] = useState<{
    [cellId: string]: string;
  }>({});
  const handleSaveRowEdits: MaterialReactTableProps<JobOpeningInterface>['onEditingRowSave'] =
    async ({ exitEditingMode, row, values }) => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!Object.keys(validationErrors).length) {
    data[row.index]=values
      
        setData([...data]);
        exitEditingMode(); 
      }
    };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };
  const handleDeleteRow = useCallback(
    (row: MRT_Row<JobOpeningInterface>) => {
      if (
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        !confirm(`Are you sure you want to delete ${row.getValue('accountName')}`)
      ) {
        return;
      }

      data.splice(row.index, 1);
      setData([...data]);
    },
    [data],
  );
  const getCommonEditTextFieldProps = useCallback(
    (
      cell: MRT_Cell<JobOpeningInterface>,
    ): MRT_ColumnDef<JobOpeningInterface>['muiTableBodyCellEditTextFieldProps'] => {
      return {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === 'accountName'
              ? validateRequired(event.target.value)
              :  validateRequired(event.target.value);
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
    [validationErrors],
  );

  
  const columns = useMemo<Array<MRT_ColumnDef<JobOpeningInterface>>>(
    () => [
      {
        accessorKey: 'jobId',
        header: 'JobID',
        // size:70,
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: (event) => {
            console.info(event);
            navigatetoapply();
          },
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'jobTitle',
        header: 'Job Title',
        // size:120,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: (event) => {
            console.info(event);
            navigatetoapply();
          },
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'account',
        header: 'Account',
        
        // size:80,
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: (event) => {
            console.info(event);
            navigatetoapply();
          },
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'project',
        header: 'Project',
        // size:60,
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: (event) => {
            console.info(event);
            navigatetoapply();
          },
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'noOfPositions',
        header: 'Open Position',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        // size:120,
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: (event) => {
            console.info(event);
            navigatetoapply();
          },
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'totalcandidate',
        header: 'Total Candidate',
        // size:120,
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: (event) => {
            console.info(event);
            navigatetoapply();
          },
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'hired',
        header: 'Hired',
        // size:70,
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: (event) => {
            console.info(event);
            navigatetoapply();
          },
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'yearOfExp',
        header: 'Experience',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        // size:100,
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: (event) => {
            console.info(event);
            navigatetoapply();
          },
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'skillSet',
        header: 'Skills',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
        // size:120,
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: (event) => {
            console.info(event);
            navigatetoapply();
          },
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        filterFn: 'equals',
        filterSelectOptions: [
          { text: 'Hiring', value: 'Hiring' },
          { text: 'Closed', value: 'Closed' },
        
        ],
        filterVariant: 'select',
        // size:80,
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: (event) => {
            console.info(event);
            navigatetoapply();
          },
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'screening',
        header: 'Screening',
        // size:100,
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: (event) => {
            console.info(event);
            navigatetoapply();
          },
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'L1',
        header: 'L1',
        // size:70,
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: (event) => {
            console.info(event);
            navigatetoapply();
          },
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'L2',
        header: 'L2',
        // size:70,
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: (event) => {
            console.info(event);
            navigatetoapply();
          },
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'Managerial',
        header: 'Manangerial',
        // size:70,
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: (event) => {
            console.info(event);
            navigatetoapply();
          },
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'HR',
        header: 'HR',
        // size:70,
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: (event) => {
            console.info(event);
            navigatetoapply();
          },
          sx: {
            cursor: 'pointer',
          },
        }),
      },
    ],
    [getCommonEditTextFieldProps]
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      //    enableColumnActions={false}
      //    enableColumnFilters={false}

      muiTablePaginationProps={{
        rowsPerPageOptions: [5, 10, 20, 50],
      }}
      initialState={{
        density: 'compact',
        columnVisibility: { L1: false, L2: false,Managerial:false,HR:false },
        pagination: { pageSize: 5, pageIndex: 0 },
      }}
      enableDensityToggle={false}
      muiTableHeadCellProps={{
        sx: {
          '& .Mui-TableHeadCell-Content': {
            justifyContent: 'left',
            fontWeight: 600,
            color: 'blue',
          },
        },
      }}
      muiTableProps={{
        sx: {
          tableLayout: 'fixed',
          align: 'center',

          marginLeft: '2%',
        },
      }}
      //   defaultColumn={{
      //     minSize: 20,
      //     maxSize: 300,
      //     size: 80,
      //   }}

      enableRowActions
      //   enableRowSelection
      editingMode="modal" 
       
      
      onEditingRowSave={handleSaveRowEdits}
      onEditingRowCancel={handleCancelRowEdits}

      renderRowActionMenuItems={({row,table ,closeMenu }) => [
        <MenuItem
          key={0}
          onClick={() => {
            // View profile logic...
            navigatetojd();
            closeMenu();
          }}
          sx={{ m: 0 }}
        >
          Apply
        </MenuItem>,
        <MenuItem
          key={1}
          onClick={() => {
            // Send email logic...
            table.setEditingRow(row)
          }}
          sx={{ m: 0 }}
        >
          Edit
        </MenuItem>,
        <MenuItem
          key={2}
          onClick={() => {
            // Send email logic...
            handleDeleteRow(row)
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
          size: 70,

          muiTableHeadCellProps: {
            align: 'center',
          },
        },
      }}
      enableColumnActions={false}

      //   renderRowActions={({ row }) => (
      //     <div>
      //       <Button>Action 1</Button>
      //       <Button>Action 2</Button>
      //       <Button>Action 3</Button>
      //     </div>
      //   )}
    />
  );
};
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/strict-boolean-expressions
const validateRequired = (value: string) => !!value.length;


export default JobOpeningTable;
