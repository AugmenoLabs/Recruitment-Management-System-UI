import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { Box, Button, MenuItem, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
interface AccountTableData {
  id: string;
  name: string;
  ProjectID: string;
  ProjectName: string;
  Manager: string;
}

const data: AccountTableData[] = [
  {
    id: 'HON123',
    name: 'HoneyWell',
    ProjectID: 'FDU',
    ProjectName: 'Forge Data Unity',
    Manager: 'Sneha',
  },
  {
    id: 'HON123',
    name: 'HoneyWell',
    ProjectID: 'X001',
    ProjectName: 'XDR',
    Manager: 'Sanjeev',
  },
  {
    id: 'SYM123',
    name: 'Symphony',
    ProjectID: 'ABC',
    ProjectName: 'Bot',
    Manager: 'Anshu',
  },
];

const AccountTable: React.FunctionComponent = () => {
  const history = useNavigate();
  const navigateAddAccount = (): void => {
    history('/AddAccount');
  };
  const navigateAddProject = (): void => {
    history('/AddProject');
  };

  const columns = useMemo<Array<MRT_ColumnDef<AccountTableData>>>(
    () => [
      {
        accessorKey: 'id',
        header: 'AccountID',
        size: 80,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 80,
      },
      {
        accessorKey: 'ProjectID',
        header: 'ProjectID',
        size: 80,
      },
      {
        accessorKey: 'ProjectName',
        header: 'ProjectName',
        size: 80,
      },
      {
        accessorKey: 'Manager',
        header: 'Manager',
        size: 100,
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
        Account
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
        defaultColumn={{
          minSize: 20,
          maxSize: 300,
          size: 80,
        }}
        enableRowActions
        //   enableRowSelection
        renderTopToolbarCustomActions={({ table }) => (
          <Box sx={{ display: 'flex', gap: '1rem', p: '4px' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={navigateAddAccount}
              size="small"
            >
              Add Account
            </Button>
            <Button
              color="primary"
              size="small"
              onClick={navigateAddProject}
              variant="contained"
            >
              Add Project
            </Button>
          </Box>
        )}
        enableColumnResizing
        positionActionsColumn="last"
        displayColumnDefOptions={{
          'mrt-row-actions': {
            size: 40,

            muiTableHeadCellProps: {
              align: 'center',
            },
          },
        }}
        enableColumnActions={false}
        renderRowActionMenuItems={({ closeMenu }) => [
          <MenuItem
            key={1}
            onClick={() => {
              // Send email logic...
              closeMenu();
            }}
            sx={{ m: 0, display: 'flex' }}
          >
            <EditIcon />
          </MenuItem>,
          <MenuItem
            key={2}
            onClick={() => {
              // Send email logic...
              closeMenu();
            }}
            sx={{ m: 0 }}
          >
            <DeleteIcon />
          </MenuItem>,
        ]}
      />
    </Box>
  );
};

export default AccountTable;
