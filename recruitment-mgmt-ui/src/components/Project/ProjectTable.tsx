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
import { Box, Button, MenuItem, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { ProjectInterface } from '../../Interface/ProjectInterface';
import { API_URL, GetProject } from '../../services/ProjectApi';
import { API_BASE_PATH } from '../../Config/config';
import '../Account/Account.style.scss';

const ProjectTable: React.FunctionComponent = () => {
  const [data, setData] = useState<ProjectInterface[]>([]);

  useEffect(() => {
    GetProject()
      .then((response: any) => {
        setData(response.data);
      })
      .catch((error: any) => console.log('error', error));
  }, []);

  const [validationErrors, setValidationErrors] = useState<{
    [cellId: string]: string;
  }>({});

  const handleSaveRowEdits: MaterialReactTableProps<ProjectInterface>['onEditingRowSave'] =
    async ({ exitEditingMode, row, values }) => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!Object.keys(validationErrors).length) {
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
  const handleDeleteRow = async (row: MRT_Row<ProjectInterface>) => {
    if (
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      !confirm(`Are you sure you want to delete ${row.getValue('accountName')}`)
    ) {
      return;
    }

    try {
      await axios.delete(`${API_BASE_PATH}${API_URL}/${row.original.id}`);
      setData((prevState) =>
        prevState.filter((item) => item.id !== row.original.id)
      );
      console.log('Row deleted successfully!');

      // Perform additional logic here, such as updating the UI to reflect the deleted item
    } catch (error) {
      console.error(error);
    }
  };

  const getCommonEditTextFieldProps = useCallback(
    (
      cell: MRT_Cell<ProjectInterface>
    ): MRT_ColumnDef<ProjectInterface>['muiTableBodyCellEditTextFieldProps'] => {
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
  const navigateAddProject = (): void => {
    history('/AddProject');
  };

  const columns = useMemo<Array<MRT_ColumnDef<ProjectInterface>>>(() => {
    return [
      {
        accessorKey: 'projectId',
        header: 'Project ID',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },
      {
        accessorKey: 'projectName',
        header: 'Project Name',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
        }),
      },

      {
        accessorKey: 'projectManager',
        header: 'Project Manager',
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
    <Box>
      <Typography
        gutterBottom
        variant="h5"
        className="tableheader"
      >
        Project
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
              // Send email logic...
              // eslint-disable-next-line @typescript-eslint/no-floating-promises
              handleDeleteRow(row);
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

export default ProjectTable;
