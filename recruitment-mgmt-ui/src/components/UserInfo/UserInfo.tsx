import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import './UserInfo.style.scss';
import keycloak from '../../keycloak/keycloak';
import ChangePassword from '../Password/ChangePassword';
import { Grid, Typography } from '@mui/material';

const UserInfo: React.FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const username:string = keycloak.tokenParsed?.preferred_username;
  const userrole : string[]|undefined =  keycloak.tokenParsed?.resource_access?.MyClient.roles;
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>):void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = ():void => {
    setAnchorEl(null);
  };
  var logoutOptions = { redirectUri: 'http://localhost:3000' };
  const randomColor = ()=> {
    const colors = [
      '#F44336',
      '#E91E63',
      '#9C27B0',
      '#673AB7',
      '#3F51B5',
      '#2196F3',
      '#03A9F4',
      '#00BCD4',
      '#009688',
      '#4CAF50',
      '#8BC34A',
      '#CDDC39',
      '#FFC107',
      '#FF9800',
      '#FF5722',
      '#795548',
      '#607D8B',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <React.Fragment>
      <Box 
      className = "AccountBox">
        <Tooltip title="Profile">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, backgroundColor: randomColor() }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar  sx={{ minWidth: '56px', minHeight: '56px',backgroundColor: randomColor() }}/>
          
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >

          <Typography style = {{fontSize : 18, fontWeight:600}}>
           {username}
           </Typography>
           
           <Typography style = {{fontSize : 13}}>
           {userrole?.join(', ')}
           </Typography>
          </Grid> 
        </MenuItem>
       
          
        
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <ChangePassword/>
        <MenuItem 
        onClick={() => keycloak.logout(logoutOptions)}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};
export default UserInfo;