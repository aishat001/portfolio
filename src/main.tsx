import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
 import 'rsuite/dist/rsuite.min.css';
AOS.init();
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
