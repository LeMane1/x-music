'use client'

import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          light: '#757ce8',
          main: '#ffffff',
          dark: '#ececec',
          contrastText: '#1b1b1b',
        },
        secondary: {
          light: '#676767',
          main: '#e6e6e6',
          dark: '#cdcdcd',
          contrastText: '#000',
        },
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: "none"
        }
      },
    }
  },
});

export default theme;