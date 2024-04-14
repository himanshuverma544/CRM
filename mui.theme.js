import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {

    /* Subtracting 1px, as MUI 639px is equal to Tailwind 640px */

    values: {
      sm: 640 - 1, 
      md: 768 - 1,
      lg: 1024 - 1,
      xl: 1280 - 1,
      xxl: 1536 - 1
    },
  },
});

export { 
  theme
};