import React, { useEffect, useMemo, useState } from 'react';
import { Box, Typography } from '@mui/material';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import FeedbackDetails from './FeedbackDetails';
import { CandidateInterface } from '../../Interface/CandidateInterface';
import DownloadResume from '../Resume/downloadResume';
import { GetCandidate } from '../../services/CandidateApi';
// import { getRowIdFromRowModel } from '@mui/x-data-grid/hooks/features/rows/gridRowsUtils';

const CandidateTable: React.FunctionComponent = () => {
  const [data, setData] = useState<CandidateInterface[]>([]);

  useEffect(() => {
    GetCandidate()
      .then((response: any) => {
        setData(response.data);
      })
      .catch((error: any) => console.log('error', error));
  }, []);

  const columns = useMemo<Array<MRT_ColumnDef<CandidateInterface>>>(
    () => [
      {
        accessorKey: 'candidateName',
        header: 'Candidate Name',
        size:130,
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
        header: 'Contact No.',
        size:100,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        // size:120,
      },
      {
        accessorKey: 'yearOfExperience',
        header: 'Experience',
        size:90,
      },
      {
        accessorKey: 'position',
        header: 'Position',
        size:120,
        muiTableBodyCellProps: ({ cell }) => ({
          sx: {
            cursor: 'pointer',
            whiteSpace: 'pre-line',
            wordWrap: 'break-word',
          },
        }),
      },
      {
        accessorKey: 'account',
        header: 'Account',
        size:120,
        muiTableBodyCellProps: ({ cell }) => ({
          sx: {
            cursor: 'pointer',
            whiteSpace: 'pre-line',
            wordWrap: 'break-word',
          },
        }),
      },
      {
        accessorKey: 'project',
        header: 'Project',
        size:120,
        muiTableBodyCellProps: ({ cell }) => ({
          sx: {
            cursor: 'pointer',
            whiteSpace: 'pre-line',
            wordWrap: 'break-word',
          },
        }),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size:100,
        muiTableBodyCellProps: ({ cell }) => ({
          sx: {
            cursor: 'pointer',
            whiteSpace: 'pre-line',
            wordWrap: 'break-word',
          },
        }),
      },
      {
        accessorKey: 'Hired',
        header: 'Hired',
        size:100,

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
          fontSize: '24px',
          marginBottom: '2%',
        }}
        className="tableheader"
      >
        CANDIDATE DETAILS
      </Typography>
      <MaterialReactTable
        columns={columns}
        data={data}
        //    enableColumnActions={false}
        //    enableColumnFilters={false}
        getRowId={(row) => row.id}
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
            height:'80%',
  '&::-webkit-scrollbar':{
    overflow:'hidden',
  }
          
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
            <Box display="flex" justifyContent="flex-start" alignItems="center" style={{marginLeft:'-1rem'}}>
              <DownloadResume id={row.id} />
              <FeedbackDetails />
              {/* <EditCandidateStatus /> */}
            </Box>
          </div>
        )}
      />
    </Box>
  );
};

export default CandidateTable;
