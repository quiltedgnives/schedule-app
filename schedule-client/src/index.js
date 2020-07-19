import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import { initMiddleware } from 'devise-axios';
import 'semantic-ui-css/semantic.min.css';

initMiddleware();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);