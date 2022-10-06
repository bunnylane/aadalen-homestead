import { Grid } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { ShoppingCartProvider } from './contexts/ShoppingCart';
import About from './pages/About';
import Blog from './pages/Blog';
import Index from './pages/Index';
import Store from './pages/Store';




function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Grid container spacing={3}>
        <Grid xs />
        <Grid xs={9}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/about' element={<About />} />
              <Route path='/store' element={<Store />} />
            </Routes>
          </BrowserRouter>
        </Grid>
        <Grid xs />
      </Grid>
      <Footer />
    </ShoppingCartProvider>);
}

export default App;
