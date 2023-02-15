import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Checkbox, ListItemText } from '@mui/material';
import { RoleInterface} from '../../Interfaces/RoleInterface';
import { clientId } from '../../API/ClientDetails';
import { useEffect } from 'react';
import { getToken } from '../../API/GetToken';
import axios from 'axios';

export default function AssignRole() {
  const [open, setOpen] = React.useState(false);
  const [RoleName, setRoleName] = React.useState<string[]>([]);
  const [available,setAvailable]= React.useState<RoleInterface[]>([]);

  useEffect(() => {
    GetAllRoles();
  }, []);


  const GetAllRoles = async () => {
    try {
      const token = await getToken();
      const response = await axios.get<RoleInterface[]>(`/admin/realms/MyRealm/clients/${clientId}/roles`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setAvailable(response.data);
      console.log("def",response.data);
    } catch (error) {
       console.error(error);
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent<unknown>,
    reason?: string
  ) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChange = (event: SelectChangeEvent<typeof RoleName>) => {
    const {
      target: { value },
    } = event;
    setRoleName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <Button
        sx={{ alignItems: 'center', justifyContent: 'center', mt: 0, mb: 0 }}
        variant="contained"
        onClick={handleClickOpen}
      >
        Assign
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogContent>
          {/* <Box component="form" sx={{ display: 'flex' }}> */}
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">
              Select Roles
            </InputLabel>
            <Select
              //label="select Roles"
              multiple
              value={RoleName}
              onChange={handleChange}
              input={<OutlinedInput label="Select Roles" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {available.map((Role) => (
                <MenuItem key={Role.id} value={Role.name}>
                  <Checkbox checked={RoleName.indexOf(Role.name) > -1} />
                  <ListItemText primary={Role.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Assign
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
