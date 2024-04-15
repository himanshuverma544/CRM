import { NavLink, Outlet } from 'react-router-dom';

import { DASHBOARD, PRODUCTS, CUSTOMERS, SIGN_IN } from '../routes';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from "@mui/material/Box";

import WebhookIcon from '@mui/icons-material/Webhook';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SellIcon from '@mui/icons-material/Sell';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LoginIcon from '@mui/icons-material/Login';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

import AppBrand from "../components/AppBrand";
import NavItem from "../components/NavItem";


const Layout = () => {

  return (
    <>
      <AppBar className="header" position='static'>
        <Toolbar>
          <Box className="w-full flex justify-around" component="nav">
            <AppBrand
              className="app-brand nav-links w-3/12 flex justify-center items-center gap-2"
              logo=<WebhookIcon className="logo" fontSize="inherit"/> 
              name="CRM"
              variant="h1"
            />
            <Box className="nav-links w-6/12 flex justify-around" component="ul">
              <NavItem
                path={DASHBOARD.path}
                activeIcon={<HomeIcon/>}
                inactiveIcon={<HomeOutlinedIcon/>}
                title={DASHBOARD.title}
              />
              <NavItem
                path={PRODUCTS.path}
                activeIcon={<SellIcon/>}
                inactiveIcon={<SellOutlinedIcon/>}
                title={PRODUCTS.title}
              />
              <NavItem
                path={CUSTOMERS.path}
                activeIcon={<GroupsIcon/>}
                inactiveIcon={<GroupsOutlinedIcon/>}
                title={CUSTOMERS.title}
              />
            </Box>
            <Box className="nav-links w-3/12 flex justify-evenly" component="ul">
              <NavItem
                path={SIGN_IN.path}
                activeIcon={<LoginIcon/>}
                inactiveIcon={<LoginOutlinedIcon/>}
                title={SIGN_IN.title}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="main">

        <Outlet/>
      </Box>

      <Box component="footer">
         
      </Box>

    </>
  );
}

export default Layout;