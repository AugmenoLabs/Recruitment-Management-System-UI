import React, { useEffect, useMemo, useState } from 'react';
import { Box, Typography } from '@mui/material';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import Feedback from './Feedback';
import { InterviewInterface } from '../../Interface/InterviewInterface';
import { GetScheduleInterview } from '../../services/ScheduleInterviewApi';

const InterviewDetailTable: React.FunctionComponent = () => {
  const [data, setData] = useState<InterviewInterface[]>([]);

  useEffect(() => {
    GetScheduleInterview()
      .then((response: any) => {
        setData(response.data);
      })
      .catch((error: any) => console.log('error', error));
  }, []);

  const columns = useMemo<Array<MRT_ColumnDef<InterviewInterface>>>(
    () => [
      {
        accessorKey: 'candidateName',
        header: 'Candidate Name',
        // size:70,
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
        // size:120,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size:120,
      },
      {
        accessorKey: 'yearOfExperience',
        header: 'Experience',
        size:80,
      },
      {
        accessorKey: 'position',
        header: 'Position',
        // size:60,
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
        accessorKey: 'interviewerName',
        header: 'Interviewer Name',
        size:120,
      },
      {
        accessorKey: 'scheduledTimeFrom',
        header: 'Scheduled Date',
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
          fontSize: '30px',
          marginBottom: '2%',
        }}
        className="tableheader"
      >
        Interview Details
      </Typography>
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
        getRowId={(row) => row.candidateId}
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
            <Box display="flex" justifyContent="center" alignItems="center">
              <Feedback candidateId={row.id} />
              {/* <EditCandidateStatus /> */}
            </Box>
          </div>
        )}
      />
    </Box>
  );
};

export default InterviewDetailTable;
