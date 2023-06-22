import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': {
          fontFamily: 'sans-serif',
        },
      },
    },
  },
});

export default theme;
