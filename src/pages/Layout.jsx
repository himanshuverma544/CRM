import { Outlet } from 'react-router-dom';

import { DASHBOARD, PRODUCTS, CUSTOMERS, SIGN_IN } from '../routes';

import { ABOUT_DEVELOPER, SOURCE_CODE } from "../externalLinks";

import { useTheme } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import WebhookIcon from '@mui/icons-material/Webhook';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SellIcon from '@mui/icons-material/Sell';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LoginIcon from '@mui/icons-material/Login';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import GitHubIcon from '@mui/icons-material/GitHub';

import AppBrand from "../components/AppBrand";
import NavItem from "../components/NavItem";
import LinkItem from '../components/LinkItem';


const Layout = () => {

  const theme = useTheme();

  return (
    <>
      <AppBar className="header" position='static'>
        <Toolbar>
          <Stack 
            className="w-full" 
            component="nav"
            justifyContent="space-around"
          >
            <AppBrand
              className="app-brand w-6/12 lg:w-3/12 flex justify-center items-center gap-2"
              logo=<WebhookIcon className="logo" fontSize="inherit"/> 
              name="CRM"
            />
            <Stack 
              className="nav-links w-full lg:w-6/12 fixed lg:static bottom-0 bg-mainPrimary" 
              component="ul"
              justifyContent="space-around"
              alignItems="center"
            >
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
            </Stack>
            <Stack 
              className="nav-links w-6/12 lg:w-3/12"
              component="ul"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <NavItem
                path={SIGN_IN.path}
                activeIcon={<LoginIcon/>}
                inactiveIcon={<LoginOutlinedIcon/>}
                title={SIGN_IN.title}
                keepInRow={true}
              />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box component="main">

        <Outlet/>
      </Box>

      <Paper 
        className="flex flex-wrap justify-around items-center px-6 py-2 mb-14 lg:mb-0" 
        component="footer" 
        square={true} 
        elevation={24} 
        sx={{backgroundColor: theme.palette.primary.main}}
      >
        <LinkItem 
          className={{link: "flex items-center gap-2"}}
          path={ABOUT_DEVELOPER.path}
          linkText={ABOUT_DEVELOPER.text}
          icon={<Person4OutlinedIcon/>}
          target="_blank"
          hoverEffect={true}
        />          

        <Typography 
          className="p-3 w-full sm:w-fit text-center" 
          component="span" 
          color={theme.palette.quaternary.text}
          sx={{'@media (max-width: 545px)': {
            order: 3
          }}}
        >
          Made with Love ❤
        </Typography>

        <LinkItem
          className={{link: "flex justify-end items-center gap-2"}}
          path={SOURCE_CODE.path}
          linkText={SOURCE_CODE.text}
          icon={<GitHubIcon/>}
          target="_blank"
          hoverEffect={true}
        />
      </Paper>
    </>
  );
}

export default Layout;