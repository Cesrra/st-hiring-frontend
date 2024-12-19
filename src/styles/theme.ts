import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#646cff',      
    },
    secondary: {
      main: '#535bf2',
    },
    background: {
      default: '#f9f9f9',
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
});

export default theme;
