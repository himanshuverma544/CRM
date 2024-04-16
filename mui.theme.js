import { createTheme } from "@mui/material";

const theme = createTheme({

  palette: {
    primary: {
      main: '#092661',
      body: '#F9FBFE',
      link: '#FFF',
      text: '#000'
    },
    secondary: {
      main: '#1F3663',
      link: '#b7c3df',
      text: '#324253'
    },
    tertiary: {
      text: '#8F9FBC'
    },
    green: '#22C55E',
    yellow: '#EAB308',
    blue: '#3B82F6',
    red: '#EF4444'
  },

  breakpoints: {  // Subtracting 1px, as MUI 639px is equal to Tailwind 640px
    values: {
      sm: 640 - 1, 
      md: 768 - 1,
      lg: 1024 - 1,
      xl: 1280 - 1,
      xxl: 1536 - 1
    },
  },
});

export default theme;