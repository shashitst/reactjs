import { Link } from "react-router-dom";

import Layout from "../pages/layout";






export const Nav = ()=> {
  return (

<nav class="navbar navbar-expand-lg navbar-light bg-light">


<a class="navbar-brand" href="/">Hare M-Kart</a> 

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link class="nav-link nav-active"  to="/Home">Home</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/contact">Contact</Link>
      </li>
      
      <li class="nav-item">
        <Link class="nav-link" to="/about">About</Link>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to = "/Dropdown">Dropdown</Link> 
          
        
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
          
        </div>
        </li>
    </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my- -2 my-sm-0 pull right" type="submit">Search</button>
    </form> */}
  </div>
</nav>







  )
  }