import { Box } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({

  palette:{
    primary:{
      main:'#3B3C2F',
      light: '#7C7044',
    },

    secondary:{
      main:'#FCE8A7',
      light: '#F9EECC',
      dark: '#EBE1AB',
    },

    info:{
      main:'#D2C76D'
      
    }

  }
}
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
    <Box sx = {{bgcolor:'secondary.main',}} >
    <App />
    </Box>
  </React.StrictMode>
  </ThemeProvider>
);

