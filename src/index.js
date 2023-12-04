import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import about from "./pages/about";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
       
          <Route index element={<Home />} />
          
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<about />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
