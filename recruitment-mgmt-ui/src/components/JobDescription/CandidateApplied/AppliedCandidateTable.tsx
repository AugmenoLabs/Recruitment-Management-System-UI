import React, { useMemo,useState,useEffect } from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import ScheduleInterview from '../../ScheduleInterview/ScheduleInterview';
import EditCandidateStatus from './EditCandidateStatus';
import { Box } from '@mui/material';

import { GetCandidate } from '../../../services/CandidateApi';
interface CandidateData {
  id:string;
  vendor: string;
  candidateName: string;
  contactNumber: number;
  email: string;
  status: string;
  screening: string;
  L1: string;
  L2: string;
  Managerial: string;
  HR: string;
  Offer: string;
  Hired: string;
}

const AppliedCandidateTable: React.FunctionComponent = () => {
  const [data, setData] = useState<CandidateData[]>([]);

  useEffect(() => {
    GetCandidate()
      .then((response: any) => {
        setData(response.data);
      })
      .catch((error: any) => console.log('error', error));
  }, []);
   
  const columns = useMemo<Array<MRT_ColumnDef<CandidateData>>>(
    () => [
      {
        accessorKey: 'candidateName',
        header: 'Candidate Name',
        size:160,
        muiTableBodyCellProps: ({ cell }) => ({
       
          sx: {
            cursor: 'pointer',
            whiteSpace: 'pre-line',
            wordWrap: 'break-word',
          },
        }),
      },
      {
        accessorKey: 'vendor',
        header: 'Vendor',
        size:90,
        muiTableBodyCellProps: ({ cell }) => ({
       
          sx: {
            cursor: 'pointer',
            whiteSpace: 'pre-line',
            wordWrap: 'break-word',
          },
        }),
      },
      {
        accessorKey: 'contactNumber',
        header: 'Contact',
        size:110,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        // size:70,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size:90,
      },
      {
        accessorKey: 'screening',
        header: 'Screening',
        size:90,
      },
      {
        accessorKey: 'L1',
        header: 'L1',
        size:70,
      },
      {
        accessorKey: 'L2',
        header: 'L2',
        size:70,
      },
      {
        accessorKey: 'Managerial',
        header: 'Managerial',
        size:110,
      },
      {
        accessorKey: 'HR',
        header: 'HR',
        size:70,
      },
      {
        accessorKey: 'Offer',
        header: 'Offer',
        size:80,
      },
      {
        accessorKey: 'Hired',
        header: 'Hired',
        size:80,
      },
      
    ],
    []
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
        columnVisibility: { Contact: false, email: false },
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
          tableLayout: 'auto',
          align: 'center',
          height: '80%',
          '&::-webkit-scrollbar': {
            overflow: 'hidden',
          },
        },
      }}
      //   enableColumnFilterModes
      //   enableColumnOrdering
      //   enableGrouping
      //   enablePinning
      enableRowActions
      //   enableRowSelection
      enableColumnResizing
      positionActionsColumn="last"
      displayColumnDefOptions={{
        'mrt-row-actions': {
          size: 150,

          muiTableHeadCellProps: {
            align: 'center',
          },
        },
      }}
      getRowId={(row)=>row.id}
      enableColumnActions={false}
      renderRowActions={({ row }) => (
        <div>
          <Box display="flex" justifyContent="flex-start" alignItems="center" >
            <ScheduleInterview candidateId={row.id}/>
            <EditCandidateStatus />
          </Box>
        </div>
      )}
    />
  );
};

export default AppliedCandidateTable;
