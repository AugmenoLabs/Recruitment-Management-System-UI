import React, { useEffect, useMemo, useState } from 'react';
import { Box,Typography } from '@mui/material';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import FeedbackDetails from './FeedbackDetails';
import {CandidateInterface} from '../../Interface/CandidateInterface'
import axios from 'axios';
import DownloadResume from '../Resume/downloadResume';
// import { getRowIdFromRowModel } from '@mui/x-data-grid/hooks/features/rows/gridRowsUtils';

const AppliedCandidateTable: React.FunctionComponent = () => {
  const [data, setData] = useState<CandidateInterface[]>([]);
  const API_URL = 'http://localhost:5141/api/v1/CandidateProfile';
  
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      try {
        const result = await axios.get<CandidateInterface[]>(API_URL);
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    }; 
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
    console.log(data);
  }, []);
   
  
  
  const columns = useMemo<Array<MRT_ColumnDef<CandidateInterface>>>(
    () => [
      {
        accessorKey: 'candidateName',
        header: 'Candidate Name',
        // size:70,
      },
      {
        accessorKey: 'contactNumber',
        header: 'Contact No.',
        // size:120,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        // size:120,
      },
      {
        accessorKey: 'yearOfExperience',
        header: 'Experience',
        // size:80,
      },
      {
        accessorKey: 'position',
        header: 'Position',
        // size:60,
      },
      {
        accessorKey: 'account',
        header: 'Account',
        // size:120,
      },
      {
        accessorKey: 'project',
        header: 'Project',
        // size:120,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        // size:120,
      },
      {
        accessorKey: 'Hired',
        header: 'Hired',
        // size:80,
      },
     
     
    ],
    []
  );
  return (
    <Box>
    <Typography
      gutterBottom
      variant="h5"
      sx={{
        paddingLeft: '2rem',
        paddingTop: '1.2rem',
        margin: 0,
        fontWeight: 600,
        fontSize: '30px',
        marginBottom: '2%',
      }}
      className="tableheader"
    >
      Candidate Details
    </Typography>
    <MaterialReactTable
      columns={columns}
      data={data}
      //    enableColumnActions={false}
      //    enableColumnFilters={false}
      getRowId={(row)=>row.id}
      
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
      enableColumnActions={false}
      renderRowActions={({ row }) => (
        <div>
          <Box display="flex" 
          justifyContent="center" alignItems="center"
          >
            <DownloadResume id = {row.id}/>
            <FeedbackDetails />
            {/* <EditCandidateStatus /> */}
          </Box>
        </div>
      )}
    />
    </Box>
  );

};

export default AppliedCandidateTable;

