import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5D3FD3',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
        default: "#F4F6F8",
        paper: "#ffffff",
    }
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5D3FD3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
        default: "#010101"
    }
  },
});