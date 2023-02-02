/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import './index.css';
import App from './App';
// import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './Auth/keycloak';
import LoginComp from './components/LoginComp/LoginComp';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <ReactKeycloakProvider 
  initOptions={{ onLoad: 'login-required' }}
  authClient={keycloak}>
  
  {/* // <React.StrictMode>
  //   <Provider store={store}> */}
  <LoginComp/>
       <App />
  {/* //   </Provider>
  // </React.StrictMode> */}
  
  </ReactKeycloakProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
