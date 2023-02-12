/* eslint-disable @typescript-eslint/prefer-includes */
import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Checkbox, ListItemText } from '@mui/material';

const AssignRole: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);
  const [RoleName, setRoleName] = React.useState<string[]>([]);

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
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange = (event: SelectChangeEvent<typeof RoleName>) => {
    const {
      target: { value },
    } = event;
    setRoleName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const Roles = ['HR', 'Admin', 'Super Admin', 'Manager'];

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
              multiple
              value={RoleName}
              onChange={handleChange}
              input={<OutlinedInput label="Select Roles" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {Roles.map((Role) => (
                <MenuItem key={Role} value={Role}>
                  <Checkbox checked={RoleName.indexOf(Role) > -1} />
                  <ListItemText primary={Role} />
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
};

export default AssignRole;
