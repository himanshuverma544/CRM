import { Link as RouterLink } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";


const LinkItem = ({ className, path, linkText, target="_self", icon, variant, fontSize, color, hoverEffect=false }) => {

  const theme = useTheme();

  return (
    <Link
      className={className.link}
      component={RouterLink}
      to={path}
      target={target}
      variant={variant}
      fontSize={fontSize}
      color={color ?? theme.palette.secondary.link}
    >
      <Box 
        className={`link-items-wrapper flex items-center gap-2 p-3
        ${hoverEffect ? "hover:rounded hover:bg-mainSecondary hover:text-linkPrimary": ""}`}
      >
        {icon}
        <Box className={className?.linkText} component="span">
          {linkText}
        </Box>
      </Box>
    </Link>
  );
}

export default LinkItem;