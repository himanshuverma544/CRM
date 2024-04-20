import { NavLink, useLocation } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";


const NavItem = ({ path, activeIcon, inactiveIcon, title, keepInRow=false }) => {

  const location = useLocation();

  const isActive = () => location.pathname === path;

  return (
    <li>
      <NavLink to={path}>
        <Stack 
          className={`nav-items-wrapper px-3 sm:py-3
          hover:rounded hover:bg-mainSecondary hover:text-linkPrimary
          ${isActive() ? "rounded bg-mainSecondary text-linkPrimary" : "text-linkSecondary"}`}
          direction={{xs: keepInRow ? "row" : "column", sm: "row"}}
          alignItems="center"
          spacing={{xs: keepInRow ? 2 : 1, sm: 2}}
        >
          {isActive() ? activeIcon : inactiveIcon}
          <Box component="span">{title}</Box>
        </Stack>
      </NavLink>
    </li>
  );
}

export default NavItem;