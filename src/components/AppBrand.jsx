import { DASHBOARD } from "../routes";

import { useTheme } from '@mui/material/styles';

import LinkItem from "./LinkItem";


const AppBrand = ({ className: linkClassName, name, logo, variant }) => {

  const theme = useTheme();

  return (
    <LinkItem
      className={{
        link: linkClassName,
        linkText: "name tracking-widest"
      }}
      path={DASHBOARD.path}
      linkText={name}
      icon={logo}
      fontSize="2rem"
      color={theme.palette.primary.link}
    />
  );
}

export default AppBrand;