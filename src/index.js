import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";
import AppRoutes from './AppRoutes';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

