import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";
import AppRoutes from './AppRoutes';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// import  icon  from './components/Icon';








export default function App() {
  return (
    <BrowserRouter>
    
    {/* <Icon /> */}
    
   
    
   
   
      <AppRoutes />
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

