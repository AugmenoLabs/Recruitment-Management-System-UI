/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import MaterialReactTable, { MaterialReactTableProps, MRT_Cell, MRT_ColumnDef, MRT_Row } from 'material-react-table';
import { MenuItem } from '@mui/material';
import { JobOpeningInterface } from '../../Interface/JobOpeningInterface';
import axios from 'axios';
import { AccountInterface } from '../../Interface/AccountInterface';
import { RequisitionInterface } from '../../Interface/RequisitionInterface';

export interface JobOpeningProps{
  users:JobOpeningInterface[];
}
const JobOpeningTable: React.FunctionComponent<JobOpeningProps>= ({users}) => {
  // const[users,setUsers]=useState<RequisitionInterface[]>([]);
  const history = useNavigate();
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleRowClick = (row: MRT_Row<JobOpeningInterface>) => {
   const id=row.getValue('id')
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  return(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    history(`/jobdescription/${id}`)
  )
    };

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const handleapplyjobs = (row: MRT_Row<JobOpeningInterface>) => {
      const id=row.getValue('id')
       // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
     return(
       // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
       history(`/applyforjobs/${id}`)
     )
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
        accessorKey: 'id',
        header: 'ID',
        // size:70,
      
      },
      {
        accessorKey: 'jobId',
        header: 'JobID',
        // size:70,
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: () =>  handleRowClick(cell.row), 
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
          onClick: () =>  handleRowClick(cell.row), 
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'accountName',
        header: 'Account',
        
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: () =>  handleRowClick(cell.row), 
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'projectName',
        header: 'Project',
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: () =>  handleRowClick(cell.row), 
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
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: () =>  handleRowClick(cell.row), 
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'totalcandidate',
        header: 'Total Candidate',
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: () =>  handleRowClick(cell.row), 
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'hired',
        header: 'Hired',
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: () =>  handleRowClick(cell.row), 
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
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: () =>  handleRowClick(cell.row), 
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
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: () =>  handleRowClick(cell.row), 
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
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: () =>  handleRowClick(cell.row), 
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'screening',
        header: 'Screening',
        muiTableBodyCellProps: ({ cell }) => ({
          onClick: () =>  handleRowClick(cell.row), 
          sx: {
            cursor: 'pointer',
          },
        }),
      },
      {
        accessorKey: 'L1',
        header: 'L1',
        // size:70,
        // muiTableBodyCellProps: ({ cell }) => ({
        //   onClick: (event) => {
        //     console.info(event);
        //     navigatetoapply();
        //   },
        //   sx: {
        //     cursor: 'pointer',
        //   },
        // }),
      },
      {
        accessorKey: 'L2',
        header: 'L2',
        // size:70,
        // muiTableBodyCellProps: ({ cell }) => ({
        //   onClick: (event) => {
        //     console.info(event);
        //     navigatetoapply();
        //   },
        //   sx: {
        //     cursor: 'pointer',
        //   },
        // }),
      },
      {
        accessorKey: 'Managerial',
        header: 'Manangerial',
        // size:70,
        // muiTableBodyCellProps: ({ cell }) => ({
        //   onClick: (event) => {
        //     console.info(event);
        //     navigatetoapply();
        //   },
        //   sx: {
        //     cursor: 'pointer',
        //   },
        // }),
      },
      
      {
        accessorKey: 'HR',
        header: 'HR',
        // size:70,
        // muiTableBodyCellProps: ({ cell }) => ({
        //   onClick: (event) => {
        //     console.info(event);
        //     navigatetoapply();
        //   },
        //   sx: {
        //     cursor: 'pointer',
        //   },
        // }),
      },
    ],
    [getCommonEditTextFieldProps]
  );
  // const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  // useEffect(() => {
  // navigatetojd();
  //   console.info({ rowSelection });
  // }, [rowSelection]);
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      //    enableColumnActions={false}
      //    enableColumnFilters={false}
      // enableRowSelection
  // getRowId={(originalRow) => originalRow.id}
 
  // onRowSelectionChange={setRowSelection} //connect internal row selection state to your own
  //     state={{ rowSelection }
  
      muiTablePaginationProps={{
        rowsPerPageOptions: [5, 10, 20, 50],
      }}
      initialState={{
        density: 'compact',
        columnVisibility: { L1: false,id:false, L2: false,Managerial:false,HR:false },
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
          // onClick={() => {
          //   // View profile logic...
          //   // navigatetojd();
          //   closeMenu();
          // }}
          onClick={()=>{
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
