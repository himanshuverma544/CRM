import { createTheme } from "@mui/material";

const theme = createTheme({

  components: {
    MuiStack: {
      defaultProps: {
        direction: "row",
        useFlexGap: true
      }
    }
  },

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
    quaternary: {
      text: "#b7c3df"
    },
    green: '#22C55E',
    yellow: '#EAB308',
    blue: '#3B82F6',
    red: '#EF4444'
  },

  breakpoints: {  // Subtracting 1px as, MUI 374px == Tailwind 375px
    values: {
      xs: 375 - 1,
      sm: 425 - 1, 
      md: 768 - 1,
      lg: 1024 - 1,
      xl: 1440 - 1,
      xxl: 2560 - 1
    },
  }
});

export default theme;