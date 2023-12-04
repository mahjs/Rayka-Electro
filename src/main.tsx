import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import AuthContextProvider from './contexts/authContext.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer position="top-right" autoClose={3000} closeOnClick />
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
);
