/* eslint-disable */
import React, { useState } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HailIcon from '@mui/icons-material/Hail';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import MoreIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { useNavigate } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useDispatch } from 'react-redux';
import { NavbarActions } from '../../redux/Navbar/slice';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import keycloak from 'keycloak-js';
import { useKeycloak } from '@react-keycloak/web';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import './navbar.scss';
import UserInfo from '../UserInfo/UserInfo';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: 'none',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...((open ?? true) && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop): boolean => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  marginTop:'-2rem',
  boxSizing: 'border-box',
  ...((open ?? true) && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!(open ?? true) && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const NavBar: React.FunctionComponent = () => {
  const [MobileMenuMore, setMobileMenuMore] = useState<null | HTMLElement>(
    null
  );

  const isMobileMenuOpen = Boolean(MobileMenuMore);
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setMobileMenuMore(event.currentTarget);
  };

  const handleDrawerOpen = (): void => {
    setOpen(true);
    dispatch(NavbarActions.changeSidebar(true));
  };

  const handleMobileMenuClose = (): void => {
    setMobileMenuMore(null);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
    dispatch(NavbarActions.changeSidebar(false));
  };

  var logoutOptions = { redirectUri: 'http://localhost:3000' };
  const { keycloak, initialized } = useKeycloak();
  const dashboard=()=>{
    navigate('/')}
  const usermanage=()=>{
    navigate('/UserDetails')}

  const hrlinks = [  
    { title: 'Candidate', path: '/candidatedetails', icon: <GroupIcon /> },
    { title: 'Interview', path: '/interviewdetails', icon: <CalendarMonthIcon /> },
    { title: 'InterviewDetails', path: '/interviewdetailview', icon: <CalendarViewMonthIcon/> },
  ];

  const masterlinks=[
    { title: 'Account', path: '/AccountDetails', icon: <AccountBoxIcon /> },
    { title: 'Project', path: '/ProjectDetails', icon: <ImportContactsIcon /> },
    { title: 'Vendor', path: '/VendorDetails', icon: <HailIcon/> },
  ]

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openemnu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElmaster, setAnchorElmaster] = React.useState<null | HTMLElement>(null);
  const openmaster= Boolean(anchorElmaster);
  const handleClickmaster = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElmaster(event.currentTarget);
  };
  const handleClosemaster = () => {
    setAnchorElmaster(null);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={MobileMenuMore}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
     
     
    
      <MenuItem>
      
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      {/* <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          onClick={() => keycloak.logout(logoutOptions)}
        >
            <LogoutIcon />
        </IconButton>
        <p>Logout</p>
      </MenuItem> */}
    </Menu>
  );

  const accountmenu=(
    <Menu   anchorEl={anchorElmaster}
    id="account-menu"
    open={openmaster}
    onClose={handleClosemaster}
    onClick={handleClosemaster}
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
        {masterlinks.map(({ title, path, icon }) => {
        return (
      <MenuItem   onClick={() => {
                navigate(path);
              }}>{icon} {title}</MenuItem>
   
        )})}
         </Menu>

  )

  const dashboardmenu=(
    <Menu   anchorEl={anchorEl}
    id="account-menu"
    open={openemnu}
    onClose={handleClose}
    onClick={handleClose}
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
        {hrlinks.map(({ title, path, icon }) => {
        return (
      <MenuItem   onClick={() => {
                navigate(path);
              }}>{icon} {title}</MenuItem>
   
        )})}
         </Menu>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ boxShadow: 1 }}
        style={{
          backgroundColor: 'white',
          color: 'black',
          borderRadius: '2px',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography   className='logo'>
            Augmento JobPortal
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
            <UserInfo/>
            {/* <IconButton 
            size="large"
            color="inherit"
            edge="end"
            onClick={() => keycloak.logout(logoutOptions)}>
              <LogoutIcon />
            </IconButton> */}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            top: '2%',
            backgroundColor:'black',
            color: 'black',
            fontWeight:600,
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{color:'white'}}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
<List>

<ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  onClick={() => {
                    dashboard();
                  }}
                  sx={{
                    minHeight: 48,
                   
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      color:'white',
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Dashboard"  
                    style={{fontWeight:'600',fontSize:'26px',color:'white'}}       
            sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
             
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  onClick={handleClickmaster}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                    <ListItemIcon
                    sx={{
                      minWidth: 0,
                      color:'white',
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                  <PersonAddAltIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Accounts"
                    style={{fontWeight:'600',fontSize:'26px',color:'white'}}           
            sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              {accountmenu}
               
                </ListItem>
        
                <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  onClick={handleClick}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                    <ListItemIcon
                    sx={{
                      minWidth: 0,
                      color:'white',
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                  <DashboardIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="Candidates"   
                    style={{fontWeight:'600',fontSize:'26px',color:'white'}}        
            sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              {dashboardmenu}
             
                </ListItem>
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  onClick={() => {
                    usermanage();
                  }}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      color:'white',
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <ManageAccountsIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary="User Management"  
                    style={{fontWeight:'600',fontSize:'26px',color:'white'}}         
            sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              
</List>
      </Drawer>
    </Box>
  );
};
export default NavBar;
