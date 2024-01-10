import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";
import AppRoutes from './AppRoutes';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import App from './App';

export default function images() {
   return (
      <div>
         <h2> 
            {" "}
            Using the <i> React inline styles </i> to set a background image
         </h2>
         <br></br>
         <div
            class = "image"
            style = {{
               height: "350px",
               width: "550px",
               backgroundImage:
               'url("https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/b2/1f/21/b21f21a8-e4f6-b7d2-1fec-8e5430273077/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png")',
               backgroundSize: "contain",
               backgroundRepeat: "no-repeat",
            }}
         >

         </div>
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

