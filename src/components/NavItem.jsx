import { NavLink, useLocation } from "react-router-dom";

import Box from "@mui/material/Box";


const NavItem = ({ path, activeIcon, inactiveIcon, title }) => {

  const location = useLocation();

  const isActive = () => location.pathname === path;

  return (
    <li>
      <NavLink to={path}>
        <Box 
          className={`nav-items-wrapper flex flex-col items-center gap-1 pt-1 pb-0 px-3
          md:flex-row md:gap-2 md:py-3 
          hover:rounded hover:bg-mainSecondary hover:text-linkPrimary
          ${isActive() ? "rounded bg-mainSecondary text-linkPrimary" : "text-linkSecondary"}`}
        >
          { isActive() ? activeIcon : inactiveIcon }
          <Box component="span">{title}</Box>
        </Box>
      </NavLink>
    </li>
  );
}

export default NavItem;