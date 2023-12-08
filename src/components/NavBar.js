import { Link } from "react-router-dom";



export const Nav = ()=> {
  return (

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  
<a class="navbar-brand" href="/">Hare-Mkart</a>

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
    </ul>
    
  </div>
</nav>

  )
  }