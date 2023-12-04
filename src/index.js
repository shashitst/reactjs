import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from "./pages/layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import about from "./pages/about";
import NoPage from "./pages/noPages";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        

        <Route path="/" element={<Layout />}>
       
          <Route index element={<Home />} />
          
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<about />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
