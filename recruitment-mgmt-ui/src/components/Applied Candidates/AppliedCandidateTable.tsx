import React, { useMemo,useState,useEffect } from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import ScheduleInterview from '../Interview/ScheduleInterview';
import EditCandidateStatus from './EditCandidateStatus';
import { Box } from '@mui/material';
import axios from 'axios';
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
  const API_URL = 'http://localhost:5141/api/v1/CandidateProfile';
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      try {
        const result = await axios.get<CandidateData[]>(API_URL);
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    }; 
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
    console.log(data);
  }, []);
   
  const columns = useMemo<Array<MRT_ColumnDef<CandidateData>>>(
    () => [
      {
        accessorKey: 'candidateName',
        header: 'Candidate Name',
        // size:70,
      },
      {
        accessorKey: 'vendor',
        header: 'Vendor',
        // size:120,
      },
      {
        accessorKey: 'contactNumber',
        header: 'Contact',
        // size:70,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        // size:70,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        // size:80,
      },
      {
        accessorKey: 'screening',
        header: 'Screening',
        // size:60,
      },
      {
        accessorKey: 'L1',
        header: 'L1',
        // size:120,
      },
      {
        accessorKey: 'L2',
        header: 'L2',
        // size:120,
      },
      {
        accessorKey: 'Managerial',
        header: 'Managerial',
        // size:70,
      },
      {
        accessorKey: 'HR',
        header: 'HR',
        // size:100,
      },
      {
        accessorKey: 'Offer',
        header: 'Offer',
        // size:120,
      },
      {
        accessorKey: 'Hired',
        header: 'Hired',
        // size:80,
      },
      {
        accessorKey: 'screening',
        header: 'Screening',
        // size:100,
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
          tableLayout: 'fixed',
          align: 'center',

          marginLeft: '2%',
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
          <Box display="flex" justifyContent="center" alignItems="center">
            <ScheduleInterview candidateId={row.id}/>
            <EditCandidateStatus />
          </Box>
        </div>
      )}
    />
  );
};

export default AppliedCandidateTable;
