import { Link as RouterLink } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';

import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
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
      <Stack 
        className={`link-items-wrapper p-3
        ${hoverEffect ? "hover:rounded hover:bg-mainSecondary hover:text-linkPrimary": ""}`}
        alignItems="center"
        spacing={2}   
      >
        {icon}
        <Box className={className?.linkText} component="span">
          {linkText}
        </Box>
      </Stack>
    </Link>
  );
}

export default LinkItem;