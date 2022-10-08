import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './authentication/authConfig';
import { ThemeProvider } from '@emotion/react';
import CreateTheme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const msalInstance = new PublicClientApplication(msalConfig);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={CreateTheme()}>
      <App provider={msalInstance} />
    </ThemeProvider>
  </React.StrictMode>
);
