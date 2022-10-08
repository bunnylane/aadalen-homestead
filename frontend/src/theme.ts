import { createTheme } from '@mui/material';

export default function CreateTheme() {
  return createTheme({
    palette: {
      primary: {
        main: "#92a5a6",
      },
      secondary: {
        main: "#ede8d2",
      },
      text: {
        primary: "#2d2d2d",
      },
    },
    typography: {
      button: {
        fontFamily: "'Fira Sans'",
        textTransform: 'none'
      },
      h1: {
        fontFamily: "'Fira Sans'",
        textTransform: 'none'
      },
      h2: {
        fontFamily: "'Fira Sans'",
        textTransform: 'none'        
      },
      h3: {
        fontFamily: "'Fira Sans'",
        textTransform: 'none'        
      },
      h4: {
        fontFamily: "'Fira Sans'",
        textTransform: 'none'        
      },
      h5: {
        fontFamily: "'Kurale'",
        textTransform: 'none'
      },
      fontFamily: "'Cardo'",
    }
  });
}

