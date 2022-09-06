import RoutesApp from './routes'


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

function App() {
  return (
    <>
     <ThemeProvider theme={theme}>
    <RoutesApp/>
    </ThemeProvider>
    </>
  );
}

export default App;
