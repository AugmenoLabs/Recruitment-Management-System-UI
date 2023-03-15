/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MaterialReactTable, { MaterialReactTableProps, MRT_Cell, MRT_ColumnDef, MRT_Row } from "material-react-table";
import { Box, Button, MenuItem, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { VendorInterface } from '../../Interface/VendorInterface';
import { GetVendor } from '../../services/VendorApi';

const VendorTable: React.FunctionComponent = () => {
  const [data, setData] = useState<VendorInterface[]>([]); 
  const [validationErrors, setValidationErrors] = useState<{
    [cellId: string]: string;
  }>({});

  useEffect(() => {
    GetVendor()
      .then((response: any) => {
        setData(response.data);
      })
      .catch((error: any) => console.log('error', error));
  }, []);
      
  
  const handleSaveRowEdits: MaterialReactTableProps<VendorInterface>['onEditingRowSave'] =
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
    (row: MRT_Row<VendorInterface>) => {
      if (
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        !confirm(`Are you sure you want to delete ${row.getValue('accountName')}`)
      ) {
        return;
      }
    
      data.splice(row.index, 1);
      setData([...data]);
    },
    [data],
  );
  const getCommonEditTextFieldProps = useCallback(
    (
      cell: MRT_Cell<VendorInterface>,
    ): MRT_ColumnDef<VendorInterface>['muiTableBodyCellEditTextFieldProps'] => {
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
  const navigateAddVendor = (): void => {
    history('/AddVendor');
  };
  
  
 

  const columns = useMemo<Array<MRT_ColumnDef<VendorInterface>>>(
    () => [
      
      {
        accessorKey: 'vendorName',
        header: 'Vendor Name',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'spocName',
        header: 'SPOC Name',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'spocContactNumber',
        header: 'Contact',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'spocEmail',
        header: 'Email',
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
              fontWeight: 500,
              color: 'black',
            },
          },
        }}
        muiTableProps={{
          sx: {
            tableLayout: 'fixed',
            align: 'center',
            marginLeft: '1%',
            marginRight: '1%',
            width: '98%',
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
            background:'#e3f2fc',
            borderStyle: 'solid',
            borderColor: 'blue',
            borderWidth: 2,
          },      
        }}   
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
  );
};
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const validateRequired = (value: string) => !!value.length;

export default VendorTable;
