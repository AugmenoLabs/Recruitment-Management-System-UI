import React, { useMemo } from 'react';
import { Box,Typography } from '@mui/material';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import Feedback from './Feedback';


interface AllCandidateTableData {
  name: string;
  vendor:string,
  mobile: string;
  email: string;
  experience:number;
  position: string;
  account:string,
  project:string,
  interviewer:string,
  Schedule:string,
}

const data: AllCandidateTableData[] = [
  {
    name: 'Sneha Kothari',
    vendor:'linkedin',
    mobile: '9099876543',
    email: 'a@gmail.com',
    experience:3,
    position: 'Frontend',
    account:'Honeywell',
    project:'RMS',
   interviewer:'Anshu',
   Schedule:'14/02//23 2:30pm'
  },
  {
    name: 'Anshu Wadhwani',
    vendor:'linkedin',
    mobile: '9099876543',
    email: 'a@gmail.com',
    experience:2,
    position: 'Frontend',
    account:'LG',
    project:'XDR',
    interviewer:'Anshu',
    Schedule:'14/02//23 2:30pm'
  },
  {
    name: 'Sanjeev',
    vendor:'Naukari',
    mobile: '9099876543',
    email: 'a@gmail.com',
    experience:3,
    position: 'Frontend',
    account:'Honeywell',
    project:'RMS',
    interviewer:'Anshu',
    Schedule:'14/02//23 2:30pm'
  },
  {
    name: 'Sneha Kothari',
    vendor:'Naukari',
    mobile: '9099876543',
    email: 'a@gmail.com',
    experience:5,
    position: 'Frontend',
    account:'Honeywell',
    project:'RMS',
    interviewer:'Anshu',
    Schedule:'14/02//23 2:30pm'
  },
  {
    name: 'Anshu Wadhwani',
    vendor:'Naukari',
    mobile: '9099876543',
    email: 'a@gmail.com',
    experience:5,
    position: 'Frontend',
    account:'Honeywell',
    project:'RMS',
    interviewer:'Anshu',
    Schedule:'14/02//23 2:30pm'
  },
];

const InterviewDetailTable: React.FunctionComponent = () => {
  const columns = useMemo<Array<MRT_ColumnDef<AllCandidateTableData>>>(
    () => [
      {
        accessorKey: 'name',
        header: 'Candidate Name',
        // size:70,
      },
      {
        accessorKey: 'mobile',
        header: 'Contact No.',
        // size:120,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        // size:120,
      },
      {
        accessorKey: 'experience',
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
        accessorKey: 'interviewer',
        header: 'Interviewer Name',
        // size:120,
      },
      {
        accessorKey: 'Schedule',
        header: 'Scheduled Date',
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
          <Box display="flex" justifyContent="center" alignItems="center">
            <Feedback />
            {/* <EditCandidateStatus /> */}
          </Box>
        </div>
      )}
    />
    </Box>
  );

};

export default InterviewDetailTable;
