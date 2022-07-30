import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useState }  from 'react';
import Catalog from '../../features/catalog/Catalog';
 
import Header from './Header';

 

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const paletteType = darkMode ? 'dark' : 'light';
 const theme = createTheme({
  palette: {
    mode: paletteType,
    background: {
      default:paletteType === 'light' ? '#e8e8e8' : '#121212'
    }
  }
 })

 function handleThemeChange() {
  setDarkMode(!darkMode)
 }
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Header handleThemeChange={handleThemeChange}  darkMode={darkMode}/>
      <Container>
      <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
