import React, { useMemo } from 'react';
import { Box,Typography } from '@mui/material';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';


interface AllCandidateTableData {
  name: string;
  vendor:string,
  mobile: string;
  email: string;
  experience:number;
  position: string;
  account:string,
  project:string,
  status: string;
  Hired:string;
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
    status: 'Scheduled for L2',
    Hired:'NA',
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
    status: 'Pending',
    Hired:'NA',
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
    status: 'Applied',
    Hired:'NA',
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
    status: 'Applied',
    Hired:'NA',
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
    status: 'Pending',
    Hired:'NA',
  },
];

const AppliedCandidateTable: React.FunctionComponent = () => {
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
      
    />
    </Box>
  );

};

export default AppliedCandidateTable;
