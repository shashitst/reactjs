import { Link } from "react-router-dom";

import Layout from "../pages/layout";



// to enable teh state in any componoent we have to import the below.
import { useState } from "react";
import { useEffect } from "react";
import Back from "../Back";




export const Nav = () => {

  // state ko define karne ke liye neeche jaise likha hai waise karte hai 
  // first waala option variable hai and comma ke baad jo hai woh us variable ko update karna ke function
  // jaise agar mere ko selectedMenu variable ko update karna hia toh main setSelectedMenu function se update karte hai 
  // ex 
  const [selectedMenu, setSelectedMenu] = useState('home')
 

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img src="https://t4.ftcdn.net/jpg/01/36/70/67/360_F_136706734_KWhNBhLvY5XTlZVocpxFQK1FfKNOYbMj.jpg" height={30} ></img> 
      <a class="navbar-brand" href="/">Hare M-Kart</a>
      
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
     
          <li class="nav-item "
            onClick={() => setSelectedMenu('home')}
          >
            <Link class={`nav-link  ${(selectedMenu === "home") ? "nav-active" : ""}`} to="/Home">Home</Link>
            
          </li>
          <li
            onClick={() => setSelectedMenu('contact')}
            class="nav-item">
            <Link
              class={`nav-link  ${(selectedMenu === "contact") ? "nav-active" : ""}`}
              to="/contact">Contact</Link>
          </li>
          <li
            class="nav-item"
            onClick={() => setSelectedMenu('about')}
          >
            <Link class={`nav-link  ${(selectedMenu === "about") ? "nav-active" : ""}`} to="/about">About</Link>
          </li>
          <li
            class="nav-item"
            onClick={() => setSelectedMenu('Counter')}
          >
            <Link class={`nav-link  ${(selectedMenu === "Counter") ? "nav-active" : ""}`} to="/Counter">Counter</Link>
          </li>
          <li
            class="nav-item"
            onClick={() => setSelectedMenu('Form')}
          >
            <Link class={`nav-link  ${(selectedMenu === "Form") ? "nav-active" : ""}`} to="/Form">Form</Link>
          </li>

         

        </ul>

      </div>
    </nav>
    







  )
}