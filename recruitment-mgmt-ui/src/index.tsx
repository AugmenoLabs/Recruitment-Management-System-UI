/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './Auth/keycloak';
import LoginComp from './components/LoginComp/LoginComp';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ReactKeycloakProvider
      initOptions={{ onLoad: 'login-required' }}
      authClient={keycloak}
    >
      <React.StrictMode>
        <LoginComp />
        <App />
      </React.StrictMode>
    </ReactKeycloakProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
