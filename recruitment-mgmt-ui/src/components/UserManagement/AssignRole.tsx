/* eslint-disable @typescript-eslint/no-misused-promises */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
/* eslint-disable @typescript-eslint/prefer-includes */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Paper } from '@mui/material';
import { RoleInterface} from '../../Interfaces/RoleInterface';
import { clientId } from '../../API/ClientDetails';
import { useEffect, useState } from 'react';
import { getToken } from '../../API/GetToken';
import axios from 'axios';
import { useParams } from 'react-router';
import { DataGrid, GridColDef} from '@mui/x-data-grid';

const AssignRole: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);
  // const [available,setAvailable]= React.useState<RoleInterface[]>([]);
  

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Role name', minWidth: 150 },
    { field: 'description', headerName: 'Description', minWidth: 150 },
    {
      field: 'selected',
      headerName: 'Selected',
      width: 150,
      renderCell: (params) => (
        <input
          type="checkbox"
          checked={selectedRows.includes(params.row)}
          onChange={(event) => handleRowSelection(event.target.checked, params.row)}
        />
      ),
    },
  ];
  const [rowdata, setRowdata] = useState<RoleInterface[]>([]);
  const { id } = useParams<{ id: string }>();
  const [selectedRows, setSelectedRows] = useState<RoleInterface[]>([]);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function handleRowSelection(checked: boolean, id:RoleInterface) {
    if (checked) {
      setSelectedRows([...selectedRows,id]);
    } else {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    }
  }
  

  useEffect(() => {
    void GetAllRoles();
  }, []);


  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const GetAllRoles = async () => {
    try {
      const token = await getToken();
      const response = await axios.get<RoleInterface[]>(`/admin/realms/MyRealm/clients/${clientId}/roles`, {
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          'Authorization': `Bearer ${token}`
        }
      });
      setRowdata(response.data);
      console.log("def",response.data);
    } catch (error) {
       console.error(error);
    }
  };
  
  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent<unknown>,
    reason?: string
  ): void => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  
  // const handleChange = (event: SelectChangeEvent<typeof RoleName>) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setRoleName(
  //     // On autofill we get a stringified value.
  //     typeof value === 'RoleInterface' ? value.split(',') : value
  //   );
  // };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleAssign= async () => {
    try {
      const token = await getToken();
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      await axios.post(`/admin/realms/MyRealm/users/${id}/role-mappings/clients/${clientId}`,
       selectedRows ,
       {
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }).then(response =>{
        console.log(response.data);
      });
      // GetAssignedRoles();
    } catch (error) {
      console.error(error);
    }
  }

  const paginationProps: any = { pagination: false };
  return (
    <div>
      <Button
        sx={{ alignItems: 'center', justifyContent: 'center', mt: 0, mb: 0 }}
        variant="contained"
        onClick={handleClickOpen}
      >
        Assign
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose} style={{width:'70%',justifyContent:'center'}}>
        <DialogContent>
        <Paper
            sx={{
              width: '100%',
              overflow: 'hidden',
              marginLeft: '0rem',
              marginTop: '1rem',
            }}
          >
            <div style={{ height: 300, width: '100%',marginRight:'2rem' }}>
              <DataGrid
               pagination={paginationProps}
               rows={rowdata} columns={columns} 
              />
            </div>
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleAssign}>
            Assign
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AssignRole;
