import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useState }  from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AboutPage from '../../features/about/AboutPage';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import ContactPage from '../../features/contact/ContactPage';
import HomePage from '../../features/home/HomePage';
import ServerError from '../errors/ServerError';
import 'react-toastify/dist/ReactToastify.css';
 
import Header from './Header';
import NotFound from '../errors/NotFound';

 

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
      <ToastContainer theme='colored' position='bottom-right' hideProgressBar />
    <CssBaseline />
      <Header handleThemeChange={handleThemeChange}  darkMode={darkMode}/>
      <Container>
        <Switch>
     <Route exact  path="/" component={HomePage} />
     <Route exact  path="/catalog" component={Catalog} />
     <Route  path="/catalog/:id" component={ProductDetails} />
     <Route  path="/about" component={AboutPage} />
     <Route  path="/contact" component={ContactPage} />
     <Route  path="/server-error" component={ServerError} />
     <Route   component={NotFound} />
     </Switch>
      </Container>
     
    </ThemeProvider>
  );
}

export default App;
