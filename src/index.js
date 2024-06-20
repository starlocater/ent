import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import app from './firebase';
import 'primeicons/primeicons.css';
// import { PrimeReactProvider } from 'primereact/api';
// import Tailwind from 'primereact/passthrough/tailwind';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}> */}
      <BrowserRouter>
        <App />
        </BrowserRouter>
    {/* </PrimeReactProvider> */}
  </React.StrictMode>
);
