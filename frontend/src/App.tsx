import { EventType, InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider, useMsal } from '@azure/msal-react';
import { Box, Grid, Paper } from '@mui/material';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { b2cPolicies } from './authentication/authConfig';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { ShoppingCartProvider, useShoppingCart } from './contexts/ShoppingCart';
import About from './pages/About';
import Blog from './pages/Blog';
import Index from './pages/Index';
import Orders from './pages/Orders';
import Store from './pages/Store';

const Pages = () => {

  const { instance } = useMsal();

  useEffect(() => {
    const callbackId = instance.addEventCallback((event: { eventType: EventType; error: { errorMessage: string | string[]; }; interactionType: InteractionType; payload: { idTokenClaims: { [x: string]: string; }; }; }) => {
      if (event.eventType === EventType.LOGIN_FAILURE) {
        if (event.error && event.error.errorMessage.indexOf("AADB2C90118") > -1) {
          if (event.interactionType === InteractionType.Redirect) {
            instance.loginRedirect(b2cPolicies.authorities.forgotPassword);
          } else if (event.interactionType === InteractionType.Popup) {
            instance.loginPopup(b2cPolicies.authorities.forgotPassword)
              .catch(e => {
                return;
              });
          }
        }
      }

      if (event.eventType === EventType.LOGIN_SUCCESS || event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) {
        if (event?.payload) {
          if (event.payload.idTokenClaims["acr"] === b2cPolicies.names.forgotPassword) {
            window.alert("Password has been reset successfully. \nPlease sign-in with your new password.");
            return instance.logout();
          } else if (event.payload.idTokenClaims["acr"] === b2cPolicies.names.editProfile) {
            window.alert("Profile has been edited successfully. \nPlease sign-in again.");
            return instance.logout();
          }
        }
      }
    });

    return () => {
      if (callbackId) {
        instance.removeEventCallback(callbackId);
      }
    };
  });

  return (
    <>
    <Box>
      <NavBar />
      <Grid container direction="row-reverse" justifyContent="space-between" alignItems="flex-start">
        <Grid item xs={3} />
        <Grid item xs={6} >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/store' element={<Store />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
        </Grid>
        <Grid item xs={3}/>
      </Grid>
      <Footer />
      </Box>
    </>
  )
}


function App({ provider }: { provider: PublicClientApplication }) {
  useShoppingCart()
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <MsalProvider instance={provider}>
          <Pages />
        </MsalProvider>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
