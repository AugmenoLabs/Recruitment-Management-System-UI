/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MaterialReactTable, { MaterialReactTableProps, MRT_Cell, MRT_ColumnDef, MRT_Row } from 'material-react-table';
import { Box, Button, MenuItem, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { AccountInterface } from '../../Interface/AccountInterface';

// const data: AccountTableData[] = [
//   {
//     id: 'HON123',
//     name: 'HoneyWell',
//     ProjectID: 'FDU',
//     ProjectName: 'Forge Data Unity',
//     Manager: 'Sneha',
//   },
//   {
//     id: 'HON123',
//     name: 'HoneyWell',
//     ProjectID: 'X001',
//     ProjectName: 'XDR',
//     Manager: 'Sanjeev',
//   },
//   {
//     id: 'SYM123',
//     name: 'Symphony',
//     ProjectID: 'ABC',
//     ProjectName: 'Bot',
//     Manager: 'Anshu',
//   },
// ];

const AccountTable: React.FunctionComponent = () => {
  const [data, setData] = useState<AccountInterface[]>([]);
 
  const API_URL = 'http://localhost:5141/api/v1/Account';
  // const [isDeleting, setIsDeleting] = useState(false);
 
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      try {
        const result = await axios.get<AccountInterface[]>(API_URL);
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
  const handleSaveRowEdits: MaterialReactTableProps<AccountInterface>['onEditingRowSave'] =
    async ({ exitEditingMode, row, values }) => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!Object.keys(validationErrors).length) {
        data[row.index] = values;
      
        setData([...data]);
        exitEditingMode(); 
      }
    };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };
  const handleDeleteRow = useCallback(
    (row: MRT_Row<AccountInterface>) => {
      if (
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        !confirm(`Are you sure you want to delete ${row.getValue('accountName')}`)
      ) {
        return;
      }
      const handleDelete = async (Accounts:AccountInterface) => {
        try {
          await axios.delete(`${API_URL}/${Accounts.accountId}`)
          .then((response) => {
            console.log(response);
            const newData=[...data];
            const index=newData.findIndex((item)=>item.accountId===Accounts.accountId)
            newData.splice(index,1);
            setData(newData);
          });
  


          // Perform additional logic here, such as updating the UI to reflect the deleted item
        } catch (error) {
          console.error(error);
        } 
      };
      data.splice(row.index, 1);
      setData([...data]);
    },
    [data],
  );
  const getCommonEditTextFieldProps = useCallback(
    (
      cell: MRT_Cell<AccountInterface>,
    ): MRT_ColumnDef<AccountInterface>['muiTableBodyCellEditTextFieldProps'] => {
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

  
  const history = useNavigate();
  const navigateAddAccount = (): void => {
    history('/AddAccount');
  };
  const navigateAddProject = (): void => {
    history('/AddProject');
  };

  const columns = useMemo<Array<MRT_ColumnDef<AccountInterface>>>(
    () => [
      {
        accessorKey: 'accountId',
        header: 'AccountID',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'accountName',
        header: 'Name',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'projectID',
        header: 'ProjectID',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'projectName',
        header: 'ProjectName',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'accountManager',
        header: 'Manager',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
    ],
    [getCommonEditTextFieldProps]
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
        editingMode="modal" 
       
      
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
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
        renderRowActionMenuItems={({ row,table }) => [
          <MenuItem
            key={1}
            onClick={() => {
              // Send email logic...
              table.setEditingRow(row)
            }}
            sx={{ m: 0, display: 'flex' }}
          >
            <EditIcon/>
          </MenuItem>,
          <MenuItem
            key={2}
            onClick={() => {
              // Send email logic...
              handleDeleteRow(row)
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
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const validateRequired = (value: string) => !!value.length;


export default AccountTable;
