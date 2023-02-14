import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { MenuItem } from '@mui/material';

interface JobOpeningData {
  id: number;
  position: string;
  account: string;
  team: string;
  openposition: number;
  totalcandidate: number;
  experience: string;
  skills: string;
  status: string;
  screening: number;
  hired: number;
  L1:number,
  L2:number,
  Managerial:number,
  HR:number,
}

const data: JobOpeningData[] = [
  {
    id: 2301,
    position: 'Frontend Developer',
    account: 'Honeywell',
    team: 'XDR',
    openposition: 2,
    totalcandidate: 10,
    experience: '3',
    skills: 'React/MUI/JS',
    status: 'Hiring',
    screening: 4,
    hired: 0,
    L1:2,
    L2:1,
    Managerial:0,
    HR:0, 
  },

  {
    id: 2302,
    position: 'Backend Developer',
    account: 'LG',
    team: 'RMS',
    openposition: 5,
    totalcandidate: 0,
    experience: '1',
    skills: '.Net/C#',
    status: 'Hiring',
    screening: 4,
    hired: 0,
    L1:2,
    L2:1,
    Managerial:0,
    HR:0, 
  },
  {
    id: 2303,
    position: 'Frontend Developer',
    account: 'Honeywell',
    team: 'XDR',
    openposition: 3,
    totalcandidate: 5,
    experience: '5',
    skills: 'React/MUI/JS',
    status: 'Hiring',
    screening: 4,
    hired: 0,
    L1:2,
    L2:1,
    Managerial:0,
    HR:0, 
  },
  {
    id: 2304,
    position: 'Devops',
    account: 'Flipkart',
    team: 'TMS',
    openposition: 2,
    totalcandidate: 10,
    experience: '3',
    skills: 'React/MUI/JS',
    status: 'Hiring',
    screening: 4,
    hired: 0,
    L1:2,
    L2:1,
    Managerial:0,
    HR:0, 
  },
  {
    id: 2305,
    position: 'Frontend Developer',
    account: 'Honeywell',
    team: 'Polaris',
    openposition: 2,
    totalcandidate: 7,
    experience: '2',
    skills: 'React/MUI/JS',
    status: 'Hiring',
    screening: 4,
    hired: 0,
    L1:2,
    L2:1,
    Managerial:0,
    HR:0, 
  },
  {
    id: 2306,
    position: 'Frontend Developer',
    account: 'Honeywell',
    team: 'XDR',
    openposition: 2,
    totalcandidate: 10,
    experience: '3',
    skills: 'React/MUI/JS',
    status: 'Hiring',
    screening: 4,
    hired: 0,
    L1:2,
    L2:1,
    Managerial:0,
    HR:0, 
  },
  {
    id: 2307,
    position: 'Frontend Developer',
    account: 'Honeywell',
    team: 'XDR',
    openposition: 2,
    totalcandidate: 8,
    experience: '3',
    skills: 'React/MUI/JS',
    status: 'Hiring',
    screening: 4,
    hired: 0,
    L1:2,
    L2:1,
    Managerial:0,
    HR:0, 
  },
  {
    id: 2308,
    position: 'Frontend Developer',
    account: 'Honeywell',
    team: 'XDR',
    openposition: 2,
    totalcandidate: 10,
    experience: '3',
    skills: 'React/MUI/JS',
    status: 'Hiring',
    screening: 4,
    hired: 0,
    L1:2,
    L2:1,
    Managerial:0,
    HR:0, 
  },
];

const JobOpeningTable: React.FunctionComponent = () => {
  const history = useNavigate();
  const navigatetoapply = (): void => {
    history('/jobdescription');
  };

  const navigatetojd = (): void => {
    history('/applyforjobs');
  };

  const columns = useMemo<Array<MRT_ColumnDef<JobOpeningData>>>(
    () => [
      {
        accessorKey: 'id',
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
        accessorKey: 'position',
        header: 'Position',
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
        accessorKey: 'team',
        header: 'Team',
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
        accessorKey: 'openposition',
        header: 'Open Position',
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
        accessorKey: 'experience',
        header: 'Experience',
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
        accessorKey: 'skills',
        header: 'Skills',
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

      renderRowActionMenuItems={({ closeMenu }) => [
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
            closeMenu();
          }}
          sx={{ m: 0 }}
        >
          Edit
        </MenuItem>,
        <MenuItem
          key={2}
          onClick={() => {
            // Send email logic...
            closeMenu();
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

export default JobOpeningTable;
