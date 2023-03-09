/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MaterialReactTable, {
  MaterialReactTableProps,
  MRT_Cell,
  MRT_ColumnDef,
  MRT_Row,
} from 'material-react-table';
import './Account.style.scss'
import { Box, Button, MenuItem, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { AccountInterface } from '../../Interface/AccountInterface';
import { ProjectInterface } from '../../Interface/ProjectInterface';
import { API_URL, GetAccount } from '../../services/AccountApi';
import { API_BASE_PATH } from '../../Config/config';


const AccountTable: React.FunctionComponent = () => {
  const [data, setData] = useState<AccountInterface[]>([]);
  const [validationErrors, setValidationErrors] = useState<{
    [cellId: string]: string;
  }>({});

  const handleSaveRowEdits: MaterialReactTableProps<AccountInterface>['onEditingRowSave'] =
    async ({ exitEditingMode, row, values }) => {
      if (Object.keys(validationErrors).length === 0) {
        try {
          const response = await axios.put(
            `${API_BASE_PATH}${API_URL}/Update?id=${row.original.id}`,
            values
          );
          const updatedRow = response.data;
          data[row.index] = values;
          setData([...data]);

          // Update the state with the updated row
          setData((prevState) => {
            const newData = [...prevState];
            newData[row.index] = updatedRow;
            return newData;
          });

          exitEditingMode();
        } catch (error) {
          console.error(error);
        }
      }
    };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = async (row: MRT_Row<AccountInterface>) => {
    if (
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      !confirm(`Are you sure you want to delete ${row.getValue('accountName')}`)
    ) {
      return;
    }
    try {
      await axios.delete(`${API_BASE_PATH}${API_URL}/${row.original.id}`);

      // data.splice(row.index,1);
      // setData([...data])
      setData((prevState) =>
        prevState.filter((item) => item.id !== row.original.id)
      );
      console.log('Row deleted successfully!');

      // Perform additional logic here, such as updating the UI to reflect the deleted item
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetAccount()
      .then((response: any) => {
        setData(response.data);
      })
      .catch((error: any) => console.log('error', error));
  }, []);

  const handleUpdateRow = (updatedRow: AccountInterface, index: number) => {
    setData((prevState) => {
      const newData = [...prevState];
      newData[index] = updatedRow;
      return newData;
    });
  };

  const getCommonEditTextFieldProps = useCallback(
    (
      cell: MRT_Cell<AccountInterface>
    ): MRT_ColumnDef<AccountInterface>['muiTableBodyCellEditTextFieldProps'] => {
      return {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === 'accountName'
              ? validateRequired(event.target.value)
              : validateRequired(event.target.value);
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
    [validationErrors]
  );

  const history = useNavigate();
  const navigateAddAccount = (): void => {
    history('/AddAccount');
  };

  const columns = useMemo<Array<MRT_ColumnDef<AccountInterface>>>(() => {
    return [
      {
        accessorKey: 'id',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false,
        enableSorting: false,
      },
      {
        accessorKey: 'accountId',
        header: 'AccountID',
        size: 80,
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
        accessorKey: 'accountManager',
        header: 'Manager',
        size: 100,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
    ];
  }, [getCommonEditTextFieldProps]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
          columnVisibility: { id: false },
          pagination: { pageSize: 5, pageIndex: 0 },
        }}
        enableDensityToggle={false}
        muiTableHeadCellProps={{
          sx: {
            '& .Mui-TableHeadCell-Content': {
              justifyContent: 'left',
              fontWeight: 500,
              color: 'black',
            },
          },
        }}
        muiTableProps={{
          sx: {
            tableLayout: 'auto',
            align: 'center',
            marginLeft: '1%',
            marginRight: '1%',
            width: '98%',
  //           height:'80%',
  // '&::-webkit-scrollbar':{
  //   overflow:'hidden',
  // }
          
          },
        }}
        
        defaultColumn={{
          minSize: 20,
          maxSize: 300,
          size: 80,
        }}
        enableRowActions
        //   enableRowSelection
        editingMode="modal"
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        enableColumnResizing
        positionActionsColumn="last"
        displayColumnDefOptions={{
          'mrt-row-actions': {
            size: 50,

            muiTableHeadCellProps: {
              align: 'center',
            },
          },
        }}
        enableColumnActions={false}

        muiTableHeadRowProps={{
          sx: {
           background:'#9fd7fc',
           borderStyle: 'solid',
           borderColor: '#a9d6f5',
          },
        }}

        muiTableBodyProps={{
          sx: {
            height: 300,
            background:'#e3f2fc',
            borderStyle: 'solid',
            borderColor: 'blue',
            borderWidth: 2,
          },      
        }}   
        
        renderRowActionMenuItems={({ row, table }) => [
          <MenuItem
            key={1}
            onClick={(event) => {
              // Send email logic...
              console.info(event);
              table.setEditingRow(row);
            }}
            sx={{ m: 0, display: 'flex' }}
          >
            <EditIcon />
          </MenuItem>,
          <MenuItem
            key={2}
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/no-floating-promises
              handleDeleteRow(row);
            }}
            sx={{ m: 0 }}
          >
            <DeleteIcon />
          </MenuItem>,
        ]}
      />
    
  );
};
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const validateRequired = (value: string) => !!value.length;

export default AccountTable;
